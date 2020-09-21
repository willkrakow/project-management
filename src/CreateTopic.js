import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';

const CreateTopic = (props) => {
    const {
      buttonLabel,
      className
    } = props;
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
    

    const { handleSubmit, watch, register } = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data)
    };
    watch("tryit");


    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button color="danger" onClick={toggle}>Add topic</Button>
        </Form>
        <Modal isOpen={modal} toggle={toggle} className={className} >
          <ModalHeader toggle={toggle}>Create assignment</ModalHeader>
          <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="m-3">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="m-2" name="tryit" defaultValue="" placeholder="Add a topic" ref={register} />
                    <input outline className="m-2" type="submit" color="primary" />
                </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default CreateTopic;