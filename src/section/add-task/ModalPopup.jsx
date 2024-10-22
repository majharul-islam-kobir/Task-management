/* eslint-disable react/prop-types */


import { Button, Modal , Label, TextInput, Textarea,Select} from "flowbite-react";


 function ModalPopup({onOpen , onClose}) {


  return (
    <>
     
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header className="">Add Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="">
                <div>
                  <div className="mt-4 block ">
                    <Label className="text-xl font-bold " htmlFor="title" value="Your email" />
                    </div>
                  <TextInput id="title" type="Email" required />
                </div>

                <div className="w-full">
                  <div className="mt-4 block ">
                    <Label className="text-xl font-bold " htmlFor="comment" value="Your message" />
                  </div>
                  <Textarea id="comment" placeholder="Your message..." required rows={4} />
            </div>

            <div className="flex justify-between">
                  <div className="w-[60%] m-2">
                      <div className="mt-4 block ">
                        <Label className="text-xl font-bold " htmlFor="countries" value="Assigned To" />
                      </div>
                      <Select id="countries" required>
                        <option className="">Indian</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                      </Select>
                </div>

                <div className="w-[35%] m-2">
                      <div className="mt-4 block ">
                        <Label className="text-xl font-bold " htmlFor="countries" value="Priority" />
                      </div>
                      <Select id="countries" required>
                        <option value={'Priority'}>Priority</option>
                        <option value={'Canada'}>Canada</option>
                        <option value={'France'}>France</option>
                        <option value={'Germany'}>Germany</option>
                      </Select>
                </div>
            </div>2
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onClose()}>Add Task</Button>
          <Button onClick={() => onClose()}>Decline</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;