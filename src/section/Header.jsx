/* eslint-disable no-unused-vars */
import { MdOutlineLightMode } from "react-icons/md";
import Container from "../components/Container"
import logo from"../images/logo.png"
import { useEffect, useState } from "react";


function Header() {
let [theme , setTheme] = useState (localStorage.getItem('darkTheme')==('true'));
let themeHandler = () => {
  setTheme(!theme)
  localStorage.setItem('darkTheme' , `${!theme}`)
}

useEffect( () => {
  if (localStorage.getItem('darkTheme')==('true')){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }
}, [theme])

  return (
    <div className="py-4 border-b-2 dark:border-[#666]">
        <Container className="flex justify-between items-center">
        
            <img className="brightness-200" src={logo} alt="brand-logo" />
            <MdOutlineLightMode onClick={themeHandler} className= {`text-4xl ${!theme || 'text-white' }`}/>
            
        </Container>
    </div>
  )
}

export default Header