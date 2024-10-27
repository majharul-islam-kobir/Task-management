/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { Button, Modal , Label, TextInput, Textarea,Select} from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Comment } from "postcss";

 
 function ModalPopup({onOpen , onClose , onCreate , taskToEdite , onEdite}) {

  const schema = yup.object({
    title: yup.string().required().min(5),
    comment: yup.string().required().min(6),
    AssignedTo: yup.string().required(),
    Priority: yup.string().required()
  })
  

  const {register, handleSubmit,formState:{errors} ,reset} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
  if (taskToEdite){
    onEdite(data);
  }else{
    onCreate(data);   
  }
    reset();
    onClose() 
    
  };

let formData = taskToEdite || {
  id : crypto.randomUUID(), 
  title : null , 
  comment : null, 
  AssignedTo : null,
  Priority : null,
}
  

  return (
    <div>
     
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header className="">{taskToEdite ? 'Edit Task' : 'Add Task'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="mt-4 block ">
                    <input {...register('id')} defaultValue={formData.id} type="text" className="hidden" />
                    <Label className="text-xl font-bold " htmlFor="title" value="Title" />
                    </div>
                  <TextInput {...register("title")} defaultValue={formData.title} id="title" type="text"  />
                  {errors.title && <span className="text-red-600 ">{errors.title.message}</span> }
                  
                </div>

                <div className="w-full">
                  <div className="mt-4 block ">
                    <Label className="text-xl font-bold " htmlFor="comment" value="Your Message" />
                  </div>
                  <Textarea {...register('comment')} defaultValue={formData.comment} id="comment" placeholder="Your message..." rows={4} />
                  {errors.comment && <span className="text-red-600 ">{errors.comment.message}</span> }
                  
            </div>

            <div className="flex justify-between">
                  <div className="w-[70%] ">
                      <div className="mt-4 block ">
                        <Label className="text-xl font-bold " htmlFor="countries" value="Assigned To" />
                      </div>
                      <Select id="" defaultValue={formData.AssignedTo} {...register('AssignedTo')}>
                        <option className="">Indian</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                      </Select>
                      {errors.AssignedTo && <span className="text-red-600 ">{errors.AssignedTo.message}</span> }

                </div>
 
                <div className="w-[35%] ms-3">
                      <div className="mt-4 block ">
                        <Label className="text-xl font-bold " htmlFor="countries" value="Priority" />
                      </div>
                      <Select id="countries" defaultValue={formData.Priority} {...register('Priority')}>
                        <option value={'Priority'}>Priority</option>
                        <option value={'Canada'}>Canada</option>
                        <option value={'France'}>France</option>
                        <option value={'Germany'}>Germany</option>
                      </Select>
                      {errors.Priority && <span className="text-red-600 ">{errors.Priority.message}</span> }

                      
                </div>
                </div>
                  
                                 
           <Button type="submit" className="mt-6">{taskToEdite ? 'Update Task' : 'Add Task'}</Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>       
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPopup;