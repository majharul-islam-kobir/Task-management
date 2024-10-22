import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";


function TableHeader() {
  return (
  
          <div className=" p-4 border dark:border-[#666] my-6 rounded flex justify-between items-center">
            <div><h2 className="text-xl font-bold dark:text-gray-100">Your Task</h2></div>
            <div className="max-w-md ">
                
                <TextInput id="email4" type="email" rightIcon={FaSearch }  required />
            </div>

        </div>

  )
}

export default TableHeader