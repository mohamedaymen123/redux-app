import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/actions';
const EditTasj = ({item}) => {
    const [editedTaskAction, setEditedTaskAction] = useState(item.task);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const editedTask={
            id:item.id,task:editedTaskAction,isDone:item.isDone
        }
        dispatch(handleEdit(editedTask))
        closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
    

    
      function closeModal() {
        setIsOpen(false);
      }

  return (
    <div>
              <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} >
            <input type="text" value={editedTaskAction} onChange={e=>setEditedTaskAction(e.target.value)} />
            <input type="submit" />
            <button onClick={closeModal} >Close</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTasj