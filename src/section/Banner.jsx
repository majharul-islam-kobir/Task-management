/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Container"
import banner from "../images/tampleit.png"

function Banner() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
            <h2 className="text-5xl font-bold text-red-800 dark:text-yellow-300 mb-4">Task  Management</h2>
            <p className="text-[18px] dark:text-yellow-50 md:w-[100%] w-full">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className="ms-auto">
            <img className=" w-[300px] rounded-md mt-4 max-w-sm hidden md:block" src={banner} alt="banner-image" />
        </div>

    </Container>
   
  )
}

export default Banner