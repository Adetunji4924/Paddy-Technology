import { useState } from "react"

function Header() {

    let [open,setOpen]=useState(false);
    return(
        <div className="flex  md:flex-row justify-between items-center">
            <a href="/"><img src="/src/images/Pady-logo.png" className="xsm:w-[12rem] w-[9rem]"/></a>
            <div>
                <ul className={`flex md:flex-row flex-col md:bg-transparent gap-10 absolute md:static md:z-auto z-[1] left-0 md:mt-0 mt-10 md:w-auto w-full bg-white pt-5 pb-10 pl-10 transition-all duration-1000 ease-in ${open ? 'top-10 opacity-100':'top-[-490px]'}`}>
                    <li className="font-Overpass text-primary-200 md:text-white text-[1rem] font-semibold"><a href="\">About</a></li>
                    <li className="font-Overpass text-primary-200 md:text-white text-[1rem] font-semibold"><a href="\">Service</a></li>
                    <li className="font-Overpass text-primary-200 md:text-white text-[1rem] font-semibold"><a href="\">Case</a></li> 
                    <li className="font-Overpass text-primary-200 md:text-white text-[1rem] font-semibold"><a href="\">News</a></li>
                    <li className="font-Overpass text-primary-200 md:text-white text-[1rem] font-semibold"><a href="\">Connect</a></li>
                </ul>
            </div>
            <div onClick={()=>setOpen(!open)} className="md:hidden cursor-pointer text-4xl text-white">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
        </div>
    )
}

export default Header