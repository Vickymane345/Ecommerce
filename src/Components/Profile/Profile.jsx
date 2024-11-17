import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { IoIosSearch, IoMdMenu } from 'react-icons/io';
import { IoMdPerson,IoIosClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo (3).png"
import { FaCartShopping, FaHeart, FaInbox } from 'react-icons/fa6';
import { FaFirstOrder } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
const Profile = ({firstName,size,address, setSelectedNav, toggleSideBarMenu,componentRef, SideBarMenu,setSideBarMenu,handleClick,handleMouseEnter,handleMouseLeave, isShown, lastName, dob, email, phoneNumber}) => {
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

                        <div className='md:hidden block relative' onClick={() => setSelectedNav('Home')}>
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
                                onClick={() => setSelectedNav('Home')}>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'>About</li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Home')}>
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
                            <li className='hidden md:block' onClick={() => setSelectedNav('Home')}>
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
      <section className='py-28 bg-gray-100'>
           <div className='grid lg:px-3 sm:grid-cols-6 md:px-2 xl:px-28 md:grid-cols-6  space-x-4 grid-cols-6 lg:grid-cols-5 xl:grid-cols-5'>
        <div className='col-start-1 p-4  space-y-4 sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-3 bg-white border-2 shadow-2xl lg:col-start-1 lg:col-end-2  col-end-7 xl:col-end-2 '>
          <div className='flex gap-6 items-center'>
            <IoMdPerson/>
            <p>My Account</p>
          </div>
          <div className='flex gap-6 items-center'>
            <FaInbox/>
            <p>Inbox</p>
          </div>
          <div className='flex gap-6 items-center'>
            <FaFirstOrder/>
            <p>Order</p>
          </div>
          <div className='flex gap-6 items-center'>
            <FaRegCreditCard/>
            <p>Voucher</p>
          </div>
          <div className='flex gap-6 items-center'>
            <FaHeart/>
            <p>Saved items</p>
          </div>
        <Link to='/Account'>
          <div>
            <button className='bg-white p-0 text-black'>
              Account Management
            </button>
          </div>
        </Link>
           <div>
            <button className='bg-white p-0 text-black'>
              Close Account
            </button>
          </div>
        </div>
        <div className='col-start-2 sm:col-start-3 sm:col-end-7 sm:px-4 hidden lg:col-start-2 md:col-start-3 md:col-end-7  lg:col-end-6 lg:block  xl:block bg-white border-2 md:block shadow-2xl col-end-6'>
          <p className='text-xl border-b-2 pb-2 pt-4'>Account Overview</p>
          <div className='grid gap-4 grid-cols-2 py-2'>
            <div className='border px-4'>
              <div className='border-b-2 py-3'>
                   <p>ACCOUNT DETAILS</p>

                </div>
                <div className='leading-10'>
                  <p>{firstName} {lastName}</p>
                  <p>{email}</p>
                  <p>{dob}</p>
                  <p>{phoneNumber}</p>
                  
                  </div>            
            </div>
            <div className='border px-4'>
              <div className='border-b-2 py-3'>
                <p>ADDRESS BOOK</p>
              </div>
              <div>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
          <footer className='mt-4 border-t-2 px-2 pt-5 xl:px-20 lg:px-20 md:px-16 '>
                <div className='grid grid-cols-5 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 '>
                    <div
                        className='xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-2 col-start-1 col-end-2 md:col-start-1 md:col-end-3'>
                        <h1 className='text-xl font-bold pb-10 xl:pb-14'>Funiro</h1>
                        <p className='text-sm font-normal text-gray-400'>420 University drive suite 200 carol</p>
                        <p className='text-sm font-normal text-gray-400'>Gobisa</p>
                        <p className='text-sm font-normal text-gray-400'>Fl 23038 UsA</p>
                    </div>
                    <div
                        className=' lg:text-start text-center xl:col-start-3 col-start-3 col-end-4 md:text-start md:col-start-3 md:col-end-3   xl:col-end-3 '>
                        <p className='text-sm font-normal text-gray-400 pb-10 xl:pb-14'>Links</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Home</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Shop</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>About</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Contact</p>
                    </div>
                    <div
                        className=' xl:col-start-4 xl:col-end-5 lg:col-start-4 lg:col-end-5 col-start-5 md:col-start-4 md:col-end-5  '>
                        <p className='text-sm font-normal text-gray-400 xl:pb-14 pb-10'>Help</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Payment Options</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Returns</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Privacy Policies</p>
                    </div>
                    <div
                        className='xl:col-start-5 xl:col-end-6 lg:col-start-5 md:col-start-5  lg:col-end-6'>
                        <p className='text-sm text-gray-400 pb-5 font-normal'>Newsletter</p>
                        <div className='flex space-x-2'>
                            <div className='border-b-2 border-black'>
                                <input
                                    type="email"
                                    placeholder='Enter Your Email Address'
                                    className='outline-none border-none'/>

                            </div>
                            <div className='border-b-2  border-black'>
                                <button className='p-0 bg-white text-black'>SUBSCRIBE
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>
      {/* <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{dob}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p> */}
    
    </div>
  )
}

export default Profile
