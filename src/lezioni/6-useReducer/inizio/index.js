import React, {useState,useReducer} from "react";
import Modal from "./modal";
import reducer from "./reducer";
import { OPEN_MODAL, CLOSE_MODAL} from "./actions";

const initialState = {
  isModalOpen: false,
  modalContent: 'Eccomi'
}

const Index = () => {
  const [state,dispatch]=useReducer(reducer, initialState);

  const apriModal = () => {
    dispatch({ type: OPEN_MODAL, payload:'This is a modal'})
  }

  const chiudiModal = () => {
    dispatch({ type: CLOSE_MODAL})
  }

  return (
    <div>
      <h2>User Reducer Component</h2>
      <button className='btn btn-primary' onClick={apriModal}>APRI MODAL</button>
      <Modal modalContent={state.modalContent} modalState={state.isModalOpen} chiudiModal={chiudiModal}></Modal>
    </div>
  );
};

export default Index;
