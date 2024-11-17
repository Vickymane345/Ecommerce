import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoIosArrowForward, IoIosSearch, IoMdMenu } from 'react-icons/io'
import { IoMdPerson,IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo (3).png'
import bar from "../../assets/Shop/bar.jpg"
import { FaCartShopping } from 'react-icons/fa6'
import Services from "../../Services"

const Checkout = ({selectedNav,toggleSideBarMenu,componentRef, SideBarMenu,setSideBarMenu,handleClick,handleMouseEnter,handleMouseLeave, isShown, setSelectedNav, size ,calculateTotalPrice, cart}) => {
        const myStyle = {
        backgroundImage: `url(${bar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "40vh",
        width: "100%",
        opacity: '0.5'
    }

    const totalprice = calculateTotalPrice();
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

                        <div className='md:hidden block relative' onClick={() => setSelectedNav('Checkout')}>
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
                                onClick={() => setSelectedNav('Checkout')}>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'>About</li>
                            <li
                                className='sm:border-b-2 sm:border-black  border-b-2 border-black  md:border-none'
                                onClick={() => setSelectedNav('Checkout')}>
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
                            <li className='hidden md:block' onClick={() => setSelectedNav('Checkout')}>
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
                            <p>Checkout</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid md:grid-cols-2 md:gap-2 sm:grid-cols-1 grid-cols-1 py-20 '>
                    <div className='m-auto  '>
                        <h1 className='text-2xl font-bold '>
                            Billing details
                        </h1>

                        <div className=''>
                            <form action="">
                                <div className='sm:flex md:flex  gap-10 '>
                                    <div className='space-y-4'>
                                         <label htmlFor="" className='text-sm font-bold'>First Name</label> <br/>
                                         <input type="text" name='fName'  className='border rounded-lg border-black py-4'/> 


                                    </div>
                                    <div  className='space-y-4'>
                                          <label htmlFor="" className='text-sm font-bold'>Last Name</label> <br/>
                                         <input type="text" name='LName' className='border rounded-lg border-black py-4' />
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <label htmlFor="" className='text-sm font-bold'> Complementary Name (optional)</label> <br/>
                                    <input type="text" className='border w-full rounded-lg py-4 border-black' />
                                </div>
                                   <div className='space-y-4'>
                                    <label htmlFor="" className='text-sm font-bold'> Country / Region</label> <br/>
                                    <select className='w-full bg-white border text-gray-400 border-black p-3 rounded-lg'>
                                        <option value="Country" className=''>Country</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                        
                                    </select>
                                </div>
                                <div className='space-y-4' >
                                      <label htmlFor="" className='text-sm font-bold'> Street Address</label> <br/>
                                      <textarea name="" className='border border-black resize-none w-full rounded-lg' id=""/>
                                </div>
                                    <div className='space-y-4' >
                                      <label htmlFor="" className='text-sm font-bold'> Town / City</label> <br/>
                                      <textarea name="" className='border border-black resize-none w-full rounded-lg' id=""/>
                                </div>
                                    <div className='space-y-4' >
                                      <label htmlFor="" className='text-sm font-bold'> Phone </label> <br/>
                                      <textarea name="" className='border border-black resize-none w-full rounded-lg' id=""/>
                                </div>
                                    <div className='space-y-4' >
                                      <label htmlFor="" className='text-sm font-bold'> Email address</label> <br/>
                                      <input name="" type="email"className='border border-black w-full rounded-lg py-4' id=""/>
                                </div>
                                    <div className='py-12' >
                                      <textarea name="" placeholder='Additional Information' className='border border-black resize-none  w-full p-3 h-[8vh] rounded-lg' id=""/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className=' sm:w-full sm:px-10  lg:w-[80%] md:w-[80%] px-5 md:px-0' >
                        <div className='border-b-2 w-full  py-10 flex justify-between '>
                               <ul className='space-y-2'>
                            <li className='font-bold'>Product</li>
                            { 
                                cart.map(item => (
                                    <li className='text-sm text-gray-500'>
                                        {item.name} x {item.quantity}
                                    </li>
                                ))
                            }
                            <li className='font-semibold'>
                                Subtotal
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                        <ul className='space-y-2 text-end'>
                            <li className='font-bold'>Subtotal</li>
                            {
                                cart.map(item => (
                                    <li>${item.price * item.quantity}</li>
                                    
                                ))
                            }
                               
                    
                                    {cart.length === 0 ? null : <div>
                                        <li><p>${totalprice}</p></li>
                                    <li className='text-2xl font-bold text-[#ce954b] text-start'>$ {totalprice}</li>
                                    </div> }
                                    
                                
                            
                 
                            
                        </ul>
                        </div>
                        <div className='py-6  w-full '>
                            <div className='flex items-center  space-x-4'>
                                <input type="radio" id='direct' className='' value="direct" />
                                <label for="direct" className=' text-sm font-semibold'>Direct Bank Transfer</label>
                            </div>
                            <div className=''>
                              
                                <div className='space-y-5'>
                                      <p className='text-gray-400 font-normal  sm:text-balance text-justify '>
                                    Make your payment directly into our bank account. Please use your order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account
                                </p>
                                 <form action="">
                                       <div className='flex items-center space-x-4 '>
                                        <input type="radio" name='bank' id='bank' value="bank" />
                                        <label for="delivery" className='text-sm text-gray-500'>Direct Bank Transfer</label>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <input type="radio" name='bank' id='delivery'  value="delivery" />
                                        <label for="delivery" className='text-sm text-gray-500'>Cash On Delivery</label>
                                    </div>
                                 </form>
                                    <p>Your personal data will be used to support your experience<br/> throughout the website, to manage access to your account, and<br/> for other purposes described in our <span className='font-bold'>privacy policy</span> </p>

                                    <div className='text-center'>
                                        {cart.length === 0 ? null : <button className='px-28 rounded-2xl bg-white text-black border border-black hover:bg-[#ce954b] hover:text-white'>Place Order</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                         
                    
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

export default Checkout
