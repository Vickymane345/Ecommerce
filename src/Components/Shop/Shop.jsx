import React, {useState} from 'react'
import logo from '../../assets/logo (3).png'
import { IoMdPerson,IoIosClose } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import {IoIosSearch, IoMdMenu} from 'react-icons/io'
import {CiHeart} from 'react-icons/ci'
import {Link} from 'react-router-dom'
import {FaCartShopping, FaCodeCompare, FaHeart, FaShare} from 'react-icons/fa6'
import bar from '../../assets/Shop/bar.jpg'
import {FaArrowRight} from 'react-icons/fa'
import {IoIosArrowForward} from "react-icons/io";
import {PiTextColumnsBold} from 'react-icons/pi'
import card from '../../Card/Card'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Services from "../../Services"

const Shop = ({addToCart, size, toggleSideBarMenu, setSideBarMenu, SideBarMenu, handleClick, handleMouseEnter,handleMouseLeave,isShown, componentRef, setShow, setSelectedNav, selectedNav}) => {
   
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

                        <div className='md:hidden block relative' onClick={() => setSelectedNav('Shop')}>
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
                                onClick={() => setSelectedNav('Shop')}>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'>About</li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Shop')}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                        <div
                            className='md:flex lg:text-lg relative items-center md:text-xs md:space-x-8 lg:space-x-14 xl:space-x-10'>
                       
                            <Link to = '/Profile'>
                                <li className='sm:hidden md:inline-block  lg:inline-block hidden'><IoIosClose className=''/></li>
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
                            <li className='hidden md:block' onClick={() => setSelectedNav('Shop')}>
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
            <section>
                <div style={myStyle}>
                </div>
                <div className='absolute top-40 w-full text-center  '>
                    <h1 className='font-bold text-4xl'>Shop</h1>
                    <div className='flex leading-8 gap-2 justify-center items-center'>
                        <p>{selectedNav}</p>
                        <div className='flex gap-2 items-center'>
                            <IoIosArrowForward/>
                            <p>shop</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#f9f1e7] lg:py-5 md:py-4 py-5 sm:py-4'>
                <div className='flex lg:px-28 lg:justify-between justify-between px-2 sm:justify-between sm:px-10 md:justify-between md:px-16'>
                    <div className='flex lg:space-x-5 text-sm   sm:text-xs md:text-lg lg:items-center md:space-x-5 md:items-center items-center space-x-1 sm:space-x-4 sm:items-center'>
                        <div className='flex space-x-1 lg:space-x-4 md:space-x-4 sm:space-x-4 px-1 sm:px-1 md:px-2 items-center border-r-2  border-black'>
                            <MdOutlineFilterList/>
                            <p>Filter</p>
                            <PiTextColumnsBold/>
                            <PiTextColumnsBold/>
                        </div>
                        <div className='hidden sm:block'>
                            <p>Showing 1-16 of 32 results</p>
                        </div>
                    </div>
                    <div className='flex lg:space-x-4 lg:items-center text-sm  md:space-x-4 sm:items-center space-x-2 items-center sm:space-x-4 md:items-center'>
                        <p>show</p>
                        <div className='bg-white lg:p-2 md:p-2 sm:p-2'>
                            <p>16</p>
                        </div>
                        <p>Short by</p>
                        <div className='bg-white lg:p-2 md:p-2 sm:p-2'>
                            <p className='font-normal'>Default</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16'>
              <div className='lg:py-10 md:py-10 py-10 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 lg:px-20 xl:px-36 md:px-8 sm:px-6 px-4 gap-6'>
                    {card.map((product) => {
                        return (
                            <div className='relative group'>
                                <div className='relative' key={product.id}>
                                    <div>
                                        <img src={product.image} className='w-full' alt=""/>
                                    </div>
                                    <div className='bg-gray-100 p-4 space-y-3'>
                                        <h1 className='font-bold text-xl'>{product.name}</h1>
                                        <p className='text-xs text-gray-400'>{product.desc}</p>
                                        <h2 className='font-bold '>{product.price}</h2>
                                    </div>
                                    <div
                                        className='absolute top-3 right-6 rounded-full bg-green-600 px-4 py-5 text-white'>
                                        <p>{product.discount}</p>
                                    </div>
                                </div>

                                <div
                                    className='absolute top-0 opacity-0 group-hover:opacity-80 w-full h-full group-hover:top-0 group-hover:backdrop-blur duration-500 bg-black divide-neutral-500'>
                                    <div className='py-28 px-2 sm:px-5 lg:px-5 md:px-5'>
                                        <div >
                                            <button
                                                onClick={() => addToCart(product)}
                                                className='bg-white text-[#ce954b] px-8 lg:px-12 md:px-3 xl:px-20 hover:bg-[#ce954b] hover:text-white'>Add to cart</button>
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2   py-5 text-white items-center'>
                                            <div className=' flex items-center'>
                                                <FaShare/>
                                                <p>Share</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaCodeCompare/>
                                                <p>Compare</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaHeart/>
                                                <p>Like</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ScrollAnimation animateIn='slideInRight'   animateOnce={true}>
                    <div className='lg:py-10 md:py-10 py-10 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 lg:px-20 xl:px-36 md:px-8 sm:px-6 px-4 gap-6'>
                    {card.map((product) => {
                        return (
                            <div className='relative group'>
                                <div className='relative' key={product.id}>
                                    <div>
                                        <img src={product.image} className='w-full' alt=""/>
                                    </div>
                                    <div className='bg-gray-100 p-4 space-y-3'>
                                        <h1 className='font-bold text-xl'>{product.name}</h1>
                                        <p className='text-xs text-gray-400'>{product.desc}</p>
                                        <h2 className='font-bold '>{product.price}</h2>
                                    </div>
                                    <div
                                        className='absolute top-3 right-6 rounded-full bg-green-600 px-4 py-5 text-white'>
                                        <p>{product.discount}</p>
                                    </div>
                                </div>

                                <div
                                    className='absolute top-0 opacity-0 group-hover:opacity-80 w-full h-full group-hover:top-0 group-hover:backdrop-blur duration-500 bg-black divide-neutral-500'>
                                    <div className='py-28 px-2 sm:px-5 lg:px-5 md:px-5'>
                                        <div >
                                            <button
                                                onClick={() => addToCart(product)}
                                                className='bg-white text-[#ce954b] px-8 lg:px-12 md:px-3 xl:px-20 hover:bg-[#ce954b] hover:text-white'>Add to cart</button>
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2   py-5 text-white items-center'>
                                            <div className=' flex items-center'>
                                                <FaShare/>
                                                <p>Share</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaCodeCompare/>
                                                <p>Compare</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaHeart/>
                                                <p>Like</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </ScrollAnimation>
                
                   <div className='lg:py-10 md:py-10 py-10 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 lg:px-20 xl:px-36 md:px-8 sm:px-6 px-4 gap-6'>
                    {card.map((product) => {
                        return (
                            <div className='relative group'>
                                <div className='relative' key={product.id}>
                                    <div>
                                        <img src={product.image} className='w-full' alt=""/>
                                    </div>
                                    <div className='bg-gray-100 p-4 space-y-3'>
                                        <h1 className='font-bold text-xl'>{product.name}</h1>
                                        <p className='text-xs text-gray-400'>{product.desc}</p>
                                        <h2 className='font-bold '>{product.price}</h2>
                                    </div>
                                    <div
                                        className='absolute top-3 right-6 rounded-full bg-green-600 px-4 py-5 text-white'>
                                        <p>{product.discount}</p>
                                    </div>
                                </div>

                                <div
                                    className='absolute top-0 opacity-0 group-hover:opacity-80 w-full h-full group-hover:top-0 group-hover:backdrop-blur duration-500 bg-black divide-neutral-500'>
                                    <div className='py-28 px-2 sm:px-5 lg:px-5 md:px-5'>
                                        <div >
                                            <button
                                                onClick={() => addToCart(product)}
                                                className='bg-white text-[#ce954b] px-8 lg:px-12 md:px-3 xl:px-20 hover:bg-[#ce954b] hover:text-white'>Add to cart</button>
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2   py-5 text-white items-center'>
                                            <div className=' flex items-center'>
                                                <FaShare/>
                                                <p>Share</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaCodeCompare/>
                                                <p>Compare</p>
                                            </div>
                                            <div className=' flex items-center'>
                                                <FaHeart/>
                                                <p>Like</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            

            </section>
            <section className='bg-[#f9f1e7]'>
                <div className='grid grid-cols-2 space-y-3 py-4 px-3 xl:grid-cols-4 xl:space-y-0 xl:px-12 xl:py-14 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 lg:py-14 md:py-14 sm:py-14  xl:place-items-center'>
                    {Services.map((index) => {
                        return (
                            <div key={index.id} className='items-center gap-1 flex' >
                                
                                    <img src={index.Image} className='w-[30%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[20%]' alt="" />
                                    <div>
                                        <h1 className='md:text-xl xl:text-xl text-xs font-bold'>{index.title}</h1>
                                        <p className='text-gray-500 text-xs xl:text-lg font-normal'>{index.desc}</p>
                                    </div>
                                
                               
                            </div>
                        )
                    })}

                </div>
            </section>
                  <footer className='mt-4 border-t-2 px-2 pt-5 xl:px-20 lg:px-20 md:px-16 '>
                <div className='grid grid-cols-5 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 '>
                    <div className='xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-2 col-start-1 col-end-2 md:col-start-1 md:col-end-3'>
                        <h1 className='text-xl font-bold pb-10 xl:pb-14'>Funiro</h1>
                        <p className='text-sm font-normal text-gray-400'>420 University drive suite 200 carol</p>
                        <p className='text-sm font-normal text-gray-400'>Gobisa</p>
                        <p className='text-sm font-normal text-gray-400'>Fl 23038 UsA</p>
                    </div>
                    <div className=' lg:text-start text-center xl:col-start-3 col-start-3 col-end-4 md:text-start md:col-start-3 md:col-end-3   xl:col-end-3 '>
                        <p className='text-sm font-normal text-gray-400 pb-10 xl:pb-14'>Links</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Home</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Shop</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>About</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Contact</p>
                    </div>
                    <div className=' xl:col-start-4 xl:col-end-5 lg:col-start-4 lg:col-end-5 col-start-5 md:col-start-4 md:col-end-5  '>
                        <p className='text-sm font-normal text-gray-400 xl:pb-14 pb-10'>Help</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Payment Options</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Returns</p>
                        <p className='text-sm font-bold pb-10 xl:pb-14'>Privacy Policies</p>
                    </div>
                    <div className='xl:col-start-5 xl:col-end-6 lg:col-start-5 md:col-start-5  lg:col-end-6'>
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
        </div>
    )
}

export default Shop
