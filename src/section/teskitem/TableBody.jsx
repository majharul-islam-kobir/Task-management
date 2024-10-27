/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Table , Button,  Modal } from "flowbite-react";
import ModalPopup from '../add-task/ModalPopup';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { createPortal } from 'react-dom';
import path from 'path-browserify';





function TableBody(props) {
    let { id,title,comment,AssignedTo,Priority} = props.data;
    let [openModal , setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);


    let editeHendeler = (tasks) => {
    props.onEdite(tasks); 
    
      
    }
 
 


  return (
    
    <>
        
     
      <Modal show={openModal1} size="md" onClose={() => setOpenModal1(false) } popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => {props.onDelete(id)}}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal1(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-b">{props.index}</Table.Cell>
            <Table.Cell className="border-b">{title}</Table.Cell>
            <Table.Cell className="border-b">{comment}</Table.Cell>
            <Table.Cell className="border-b">{AssignedTo}</Table.Cell>
            <Table.Cell className="border-b">{Priority}</Table.Cell>
            
            <Table.Cell className="border-b">
              <button onClick={ ()=> setOpenModal(true)} className="me-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500 no-underline ">
                Edit
              </button>
              <button
                  onClick={() => {
                    setOpenModal1(true);
                    
                  }}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 no-underline"
                >
                  Delete
                </button>

            </Table.Cell>
          </Table.Row>
         <ModalPopup taskToEdite={props.data} onEdite={editeHendeler} onOpen={openModal} onClose={() => setOpenModal(false) } /> 
    </>
 
  )
}
export function NoDataTable() { 
  return ( 
  
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800  "> 
      <td colSpan={6}  className=" text-center border-b py-5">No Data Found</td>
    </Table.Row>

  )
}

export default TableBody