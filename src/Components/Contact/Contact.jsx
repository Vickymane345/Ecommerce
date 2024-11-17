import React from 'react'
import {CiHeart} from 'react-icons/ci'
import {IoIosArrowForward, IoIosSearch, IoMdMenu} from 'react-icons/io'
import { IoMdPerson,IoIosClose } from "react-icons/io";
import {Link} from 'react-router-dom'
import logo from '../../assets/logo (3).png'
import bar from "../../assets/Shop/bar.jpg"
import {FaCartShopping} from 'react-icons/fa6'

const Contact = ({size,selectedNav, setSelectedNav, toggleSideBarMenu,componentRef, SideBarMenu,setSideBarMenu,handleClick,handleMouseEnter,handleMouseLeave, isShown}) => {
    const myStyle = {
        backgroundImage: `url(${bar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "40vh",
        width: "100%",
        opacity: '0.5'
    }
    return (
        <div>
            <nav
                className='md:flex border-b-2  shadow  z-50 bg-white justify-evenly md:px-9 py-3  fixed w-full   items-center md:py-3'>
                <div
                    className='flex items-center justify-between px-7 sm:px-7 pb-2 sm:pb-2 md:pb-0 md:px-1 lg:px-0 '>
                    <div className='flex'>
                        <div
                            className=' md:hidden xl:hidden  2xl:hidden bg-[burlywood]  rounded-full px-2 py-2 '>
                            <IoMdMenu
                                className='cursor-pointer text-black'
                                onClick={toggleSideBarMenu}
                                size={20}/>
                        </div>

                        <div className='md:flex   flex logo items-center  '>
                            <div className=''>
                                <img src={logo} className='md:w-full w-[50px]' alt=""/>
                            </div>
                            <div>
                                <p className='md:text-xs lg:text-lg font-bold'>Funiro</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='sm:block block md:hidden lg:hidden'>
                            <CiHeart className='' size={20}/>
                        </div>
                      <Link to="/Profile">
                        <div className=''>
                            <IoMdPerson className='sm:block md:hidden block lg:hidden '/>

                        </div>
                      </Link>

                        <div className='md:hidden block relative' onClick={() => setSelectedNav('Contact')}>
                            <Link to='/cart'>
                                <button className='p-0 relative text-black bg-white'><FaCartShopping size={20}/>

                                </button>
                                <span
                                    className='product-count absolute bottom-2 right-3 bg-[#ce954b]  px-2  rounded-full'>{size}</span>
                            </Link>
                        </div>
                    </div>

                </div>

                <div
                    className={`${SideBarMenu
                    ? ""
                    : "hidden"} side md:flex md:items-center `}>

                    <ul className=' md:flex md:space-x-32 lg:space-x-12 xl:space-x-52  '>
                        <li className=''>
                            <IoIosClose
                                onClick={() => {
                                SideBarMenu
                                    ? setSideBarMenu(false)
                                    : setSideBarMenu(true)
                            }}
                                className='cursor-pointer lg:absolute ms-auto close lg:hidden md:hidden absolute right-16 text-black '/></li>
                        <div
                            className='py-4 md:flex md:space-x-12 lg:text-lg md:text-xs  xl:space-x-20 px-4 lg:px-0 md:px-0 lg:space-x-8 2xl:px-0 items-center text-black'>
                            <div
                                className='sm:border-b-2 sm:border-b-black border-b-2 border-black   md:border-none'>
                                <li >
                                    <Link to='/Home'>Home</Link>
                                </li>
                            </div>

                            <li
                                className='sm:border-b-2 sm:border-black border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Contact')}>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'>About</li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Contact')}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                        <div
                            className='md:flex lg:text-lg relative items-center md:text-xs md:space-x-8 lg:space-x-14 xl:space-x-10'>
                       
                            <Link to = '/Profile'>
                                <li className='sm:hidden md:inline-block  lg:inline-block hidden'><IoMdPerson className=''/></li>
                            </Link>

                            <li className='sm:hidden md:flex items-center lg:flex hidden'>

                                <div
                                    className=' items-center flex  space-x-2 '
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    ref={componentRef}>
                                    <IoIosSearch/>
                                    <div>
                                        {isShown && (<input
                                            type="text"
                                            onClick={handleClick}
                                            className={`border relative border-black`}/>)}
                                    </div>
                                </div>

                            </li>
                            <li className='hidden sm:hidden md:block'><CiHeart/></li>
                            <li className='hidden md:block' onClick={() => setSelectedNav('Contact')}>
                                <Link to='/cart'>
                                    <button className='p-0 relative text-black bg-white'><FaCartShopping/>
                                        <span
                                            className='product-count absolute bottom-0 bg-[#ce954b] left-3 px-3 py-1 rounded-full'>{size}</span>
                                    </button>
                                </Link>

                            </li>
                        </div>

                    </ul>

                </div>
                <div className='px-4 lg:absolute md:absolute'>
                    <div
                        className='flex items-center  relative lg:hidden sm:flex md:hidden w-full  '>
                        <IoIosSearch className='absolute left-3 '/>
                        <input
                            type="text"
                            placeholder='Search'
                            className='px-7 py-2 rounded-full border w-full border-black '/>
                    </div>
                </div>
            </nav>
            <section >
                <div style={myStyle}></div>
                <div className='absolute top-40 w-full text-center  '>
                    <h1 className='font-bold text-4xl'>Cart</h1>
                    <div className='flex leading-8 gap-2 justify-center items-center'>
                        <p>{selectedNav}</p>
                        <div className='flex gap-2 items-center'>
                            <IoIosArrowForward/>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='text-center'>
                    <h1>Get in Touch With Us</h1>
                    <p className='text-gray-400'>For More information About Our Product & Services. Please Feel Free to Drop Us
                        <br/>
                        An Email. Our staff Always Be There To Help You Out. Do not Hesitate</p>
                </div>
                <div className='sm:flex px-4 sm:px-0  sm:pt-20 sm:justify-evenly'>
                    <div className='sm:space-y-10  text-center '>
                        <div>
                            <h1 className='text-xl font-bold'>Address</h1>
                            <p>123, Main Street, New York, USA<br/>
                                00001 Uniked Kingdom<br/>Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Phone</h1>
                            <p>Mobile +(234) 8035628936</p>
                            <p>Mobile +(234) 8035628936</p>

                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Working Time</h1>
                            <p>Monday - Friday : 9:00 - 22:00</p>
                            <p>Monday - Friday : 9:00 - 22:00</p>
                        </div>
                    </div>
                    <div className='sm:w-[30em] py-8 sm:py-0 '>
                        <form action="" className='space-y-6 sm:space-y-0'>
                            <div className='sm:space-y-4 sm:pb-4'>
                                <label htmlFor="flex" className='font-semibold  w-full text-sm'>Your name</label>
                                <input type="text" className='py-4 border border-black rounded-xl px-4 w-full' placeholder='Abc'/>
                            </div>
                            <div className='sm:space-y-4 sm:pb-4'>
                                <label htmlFor="" className='font-semibold flex w-full text-sm'>Email address</label>
                                <input type="email" className='border py-4 px-4 w-full rounded-xl border-black' placeholder='Abc@gmail.com'/>
                            </div>
                            <div className='sm:space-y-4 sm:pb-4'>
                                <label htmlFor="" className='font-semibold flex text-sm w-full'>Subject</label>
                                <textarea type="text" className='resize-none py-4 px-4 w-full border rounded-xl border-black' placeholder='This is optional'/>
                            </div>
                            <div className='sm:space-y-4 sm:pb-4'>
                                <label htmlFor="" className='flex font-semibold text-sm w-full'>Message</label>
                                <textarea type="text" className='resize-none rounded-xl border py-4 px-4 w-full border-black' placeholder='Abc'/>
                            </div>
                            <div>
                                <button type="submit" className='py-4 rounded-md hover:bg-white hover:border hover:border-black hover:text-black'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
