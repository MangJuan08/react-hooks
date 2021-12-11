import React, {useState,useReducer} from "react";
import Modal from "./modal";

const Index = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState('Eccomi , sono un modal');
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      <h2>User Reducer Component</h2>
      <Modal modalContent={modalContent} modalState={isModalOpen} openModal={openModal}></Modal>
    </div>
  );
};

export default Index;
