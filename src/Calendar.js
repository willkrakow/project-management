import React, { useState } from "react";
import Calendar from "react-calendar";
import DayInfo from './DayInfo.js';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    date: new Date(),
    selectedDate: new Date()
  };

  onChange = (date) => {this.setState({ date: date }); console.log(this.state)};

  render() {
    const  assignments = [{
        title: "This thing",
        date: "Thu Sep 10 2020"
    },
    {
        title: "This second",
        date: "Wed Sep 09 2020"
    },
    {
        title: "This other",
        date: "Fri Sep 11 2020"
    }]
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={(value, event) => {this.setState({selectedDate: value});}}
          tileClassName={(date, view) => {
              let content = assignments.find(assignment => assignment.date === date.date.toDateString() )
              if (content){return "bg-primary"} else {return "bg-light"}
            }
        }
        />
        <DayInfo selectedDate={this.state.selectedDate} assignments={assignments} />
      </div>
    );
  }
}

export default MyApp;
