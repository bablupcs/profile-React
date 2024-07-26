import React, { useState } from 'react'
import pic from "../../public/logo.jpg"
import { IoMenuOutline ,IoClose  } from "react-icons/io5";
import {Link} from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems =[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Skill"
        },
        {
            id:6,
            text:"Contacts"
        },
    ]
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 right-0 left-0 z-50 bg-gray-100">
        <div className='flex justify-between items-center h-16 '>
            <div className=' flex space-x-2'>
                <img src={pic} alt=""  className='h-12 w-12 rounded-full'/>
                <h1 className='font-semibold text-xl cursor-pointer'>Code <span className='text-red-500 text-lg'>Capsule</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            {/* // desktop navbar // */}
            <div>   
                <ul className='hidden md:flex space-x-8'>
                   {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}
                        >
                            <Link to={text}
                            smooth={true}
                            duration={600}
                            offset={-80}
                            activeClass='active'
                            >
                            {text}
                            </Link>

                        </li>
                    ))
                   }
                </ul>
                <div onClick={()=>setMenu(!menu )} className='md:hidden'>
                    {/* {menu?<IoMenuOutline  size={24}/>:<IoClose size={24}/>}  */}
                    {menu?<IoClose  size={24}/>:<IoMenuOutline size={24}/>} 
                </div>
             
            </div>
        </div>

        {/* // mobile Navbar  // */}
        {
            menu &&(
                <div>
                    <ul className='md:hidden flex flex-col items-center justify-center space-y-3 font-semibold mt-10'>
                    {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}
                        >
                            <Link to={text}
                            onClick={()=>setMenu(!menu )}
                            smooth={true}
                            duration={600}
                            offset={-80}
                            activeClass='active'
                            >
                            {text}
                            </Link>

                        </li>
                    ))
                   }
                    </ul>
                </div>
            )
        }
        
     </div>
    
    
    </>
  )
}

export default Navbar