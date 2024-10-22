
import { Table } from "flowbite-react";
function TableBody() {
  return (
    <Table.Body className="divide-y"> 
   
 
         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1           </Table.Cell>
            <Table.Cell>API Build</Table.Cell>
            <Table.Cell>Create an API by using laravel platform</Table.Cell>
            <Table.Cell>Majharul Islam</Table.Cell>
            <Table.Cell>Height</Table.Cell>
            
            <Table.Cell>
              <a href="#" className="me-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500 no-underline">
                Edit
              </a>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 no-underline">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
       
    </Table.Body>
    
   
  )
}

export default TableBody