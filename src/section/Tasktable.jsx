/* eslint-disable react/jsx-no-undef */
import { Button  } from "flowbite-react";
import { Table } from "flowbite-react";
import Container from "../components/Container"
import TableHeader from "./teskitem/TableHeader";
import TableBody from "./teskitem/TableBody";
import ModalPopup from "./add-task/ModalPopup";
import { useState } from "react";
function Tasktable() {

  let [openModal , setOpenModal] = useState (false);
  return (
    <Container>
        <div className="flex justify-end mt-7 ">
        <Button  onClick={() => setOpenModal(true)} className="me-4 px-2 py-1 text-base" color="success">Add Task</Button>
        <Button className=" px-2 py-1 text-base" color="failure">Clear Tasks</Button>
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
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
        <TableBody />
   
      
      </Table>
    </div>
  
  <ModalPopup onOpen={openModal} onClose={() => setOpenModal(false) } />
    </Container>
  )
}

export default Tasktable