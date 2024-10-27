/* eslint-disable react/jsx-no-undef */
import { Button  } from "flowbite-react";
import { Table } from "flowbite-react";
import Container from "../components/Container"
import TableHeader from "./teskitem/TableHeader";
import TableBody, { NoDataTable } from "./teskitem/TableBody";
import ModalPopup from "./add-task/ModalPopup";
import { useState } from "react";



function Tasktable() {
  let [openModal , setOpenModal] = useState (false);
  let [tasks , setTasks] = useState ([])

let deleteHadler = (id) => {
  setTasks(tasks.filter(item => {
    return item.id != id ;
  }))
}


let editHandler = (task) => {
 setTasks(tasks.map(item => {
    if (task.id===item.id){
        return task;
    }else{
      return item;
    }
  }))
}
 
let createHendeler = (item) => {
  let updateData = [
    ...tasks,
      item,
  ];
  setTasks (updateData.reverse())
  
}



  return (
    <Container>
        <div className="flex justify-end mt-7 ">
        <Button  onClick={() => setOpenModal(true)} className="me-4 px-2 py-1 text-base" color="success">Add Task</Button>
        <Button className=" px-2 py-1 text-base" onClick={() =>  setTasks([])}  color="failure">Clear Tasks</Button>
        </div> 

        <TableHeader />

        <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Assigned To</Table.HeadCell>
          <Table.HeadCell>Priority </Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y"> 
        {tasks.length==0 ?  <NoDataTable /> :tasks.map((item ,index) => <TableBody onDelete={deleteHadler} onEdite={editHandler} data={item} key={item.id} index={index+1} /> ) }
        
        
   
        </Table.Body>
      </Table>
    </div>
  
   <ModalPopup onCreate={createHendeler} onOpen={openModal} onClose={() => setOpenModal(false) } />
    </Container>
  )
}

export default Tasktable