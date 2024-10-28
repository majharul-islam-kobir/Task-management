/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Container"
import banner from "../images/download.jpeg"

function Banner() {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="lg:me-auto">
            <h2 className=" md:text-5xl font-bold text-red-800 dark:text-yellow-300 text-4xl  mx-3 mb-4">Task <br /> Management</h2>
            <p className="md:text-[18px] dark:text-yellow-50 md:w-[100%] text-[16px] w-full mx-3 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className="lg:ms-auto">
            <img className=" w-[300px] rounded-md mt-6 max-w-sm mx-auto md:block " src={banner} alt="banner-image" />

        </div>

    </Container>
   
  )
}

export default Banner