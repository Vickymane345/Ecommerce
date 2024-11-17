import React, {useEffect, useState} from 'react'
import bar from '../../assets/Shop/bar.jpg'
import logo from "../../assets/logo (3).png"
import {IoIosArrowForward, IoIosSearch, IoMdMenu} from 'react-icons/io'
import {Link} from 'react-router-dom'
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import {CiHeart} from 'react-icons/ci'
import {FaCartShopping, FaTrash} from 'react-icons/fa6'
import Services from "../../Services"
import './Cart.css'
const Cart = ({
    cart,
    size,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    selectedNav,
    calculateTotalPrice,
    setSelectedNav,
    toggleSideBarMenu,
    SideBarMenu,
    setSideBarMenu,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    componentRef,
    isShown
}) => {
    console.log(selectedNav)
    const totalprice = calculateTotalPrice();

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
                            <MdPersonOutline className='sm:block md:hidden block lg:hidden '/>

                        </div>
                      </Link>

                        <div className='md:hidden block relative' onClick={() => setSelectedNav('Cart')}>
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
                            <MdOutlineClose
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
                                onClick={() => setSelectedNav('Cart')}>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'>About</li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Cart')}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                        <div
                            className='md:flex lg:text-lg relative items-center md:text-xs md:space-x-8 lg:space-x-14 xl:space-x-10'>
                       
                            <Link to = '/Profile'>
                                <li className='sm:hidden md:inline-block  lg:inline-block hidden'><MdPersonOutline className=''/></li>
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
                            <li className='hidden md:block' onClick={() => setSelectedNav('Cart')}>
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
            <section className='sm:hidden block lg:hidden md:hidden py-8 xl:hidden'>
                <div>
                    {cart.length === 0
                        ? <p>cart is empty</p>
                        : cart.map((item) => (
                            <div key={item.id}>
                                <div>

                                    <div className='flex justify-evenly px-8 '>
                                        <div className='w-[60%]'>
                                            <img src={item.image} className='w-[60%]' alt=""/>
                                        </div>
                                        <div className=''>
                                            <h1>{item.name}</h1>
                                            <p>{item.desc}</p>
                                            <p>${item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end space-x-7 px-8'>
                                        <div>
                                            <button
                                                className='p-3 bg-red-700 text-white'
                                                onClick={() => removeFromCart(item.id)}><FaTrash/></button>
                                        </div>
                                        <div className='flex space-x-8 items-center'>
                                            <button
                                                className='px-1 py-0 bg-gray-100 border border-black hover:bg-[burlywood] hover:text-white  text-black'
                                                onClick={() => increaseQuantity(item.id)}>+</button>
                                            <p>
                                                {item.quantity}</p>
                                            <button
                                                className='px-1 py-0 bg-gray-100 border border-black hover:bg-[burlywood] hover:text-white  text-black'
                                                onClick={() => decreaseQuantity(item.id)}>-</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    {cart.length === 0
                        ? null
                        : <div className='text-center pt-9'>

                            <div onClick={() => setSelectedNav('Cart')}>
                                <Link to='/checkout'>
                                    <button
                                        className='bg-[#f9f1e7] border border-black rounded-2xl text-black px-16 py-4 hover:bg-[burlywood] hover:text-white '>Check Out ${totalprice} </button>
                                </Link>
                            </div>
                        </div>}
                </div>
            </section>
            <section className='py-14 hidden lg:block md:block sm:block xl:block'>
                <div className='flex xl:px-24 sm:px-5 gap-3 w-full '>
                    <table className='w-[65em] h-[10vh] items-center   '>
                        <tr className='bg-[#f9f1e7] '>
                            <th></th>
                            <th>
                                <h1>Product</h1>
                            </th>
                            <th>
                                <h1>Price</h1>
                            </th>
                            <th>
                                <h1>Quantity</h1>
                            </th>
                            <th>
                                <h1>Subtotal</h1>
                            </th>
                            <th></th>
                        </tr>

                        {cart.length === 0
                            ? <p>cart is empty</p>
                            : cart.map((item) => (
                                <tr key={item.id} className='text-center border-b-2 items-center'>
                                    <td className='w-20 pb-5 pt-5'>
                                        <img src={item.image} className='w-full' alt=""/></td>
                                    <td>{item.name}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td className='flex justify-center pt-12 gap-3 '>
                                        <button
                                            className='px-1 py-0 bg-gray-100 border border-black hover:bg-[burlywood] hover:text-white  text-black'
                                            onClick={() => increaseQuantity(item.id)}>+</button>
                                        <p>
                                            {item.quantity}</p>
                                        <button
                                            className='px-1 py-0 bg-gray-100 border border-black hover:bg-[burlywood] hover:text-white  text-black'
                                            onClick={() => decreaseQuantity(item.id)}>-</button>
                                    </td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                        <button
                                            className='p-3 bg-red-700 text-white'
                                            onClick={() => removeFromCart(item.id)}><FaTrash/></button>
                                    </td>

                                </tr>
                            ))}

                    </table>
                    <div className='bg-[#f9f1e7] w-[20em] h-[40vh]'>
                        <h1 className='text-center py-5 text-2xl font-semibold'>Cart Totals</h1>
                        <div className='flex sm:space-x-3 justify-between  px-10 py-8'>
                            <div className='font-semibold  space-y-4'>
                                <p className=''>Subtotal</p>
                                <p>Total</p>

                            </div>
                            <div className='space-y-4'>
                                <p className='text-gray-400'>
                                    ${totalprice}</p>
                                <p className='text-[#ce954b]'>
                                    ${totalprice}</p>

                            </div>
                        </div>
                        {cart.length === 0
                            ? null
                            : <div className='text-center'>

                                <div onClick={() => setSelectedNav('Cart')}>
                                    <Link to='/checkout'>
                                        <button
                                            className='bg-[#f9f1e7] border border-black rounded-2xl text-black sm:px-7 sm:py-3 px-16 py-4 hover:bg-[burlywood] hover:text-white'>Check Out</button>
                                    </Link>
                                </div>
                            </div>}
                    </div>
                </div>
            </section>

            <section className='bg-[#f9f1e7]'>
                <div
                    className='grid grid-cols-2 space-y-3 py-4 px-3 xl:grid-cols-4 xl:space-y-0 xl:px-12 xl:py-14 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 lg:py-14 md:py-14 sm:py-14  xl:place-items-center'>
                    {Services.map((index) => {
                        return (
                            <div key={index.id} className='items-center gap-1 flex'>

                                <img
                                    src={index.Image}
                                    className='w-[30%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[20%]'
                                    alt=""/>
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

        </div>
    )
}

export default Cart
