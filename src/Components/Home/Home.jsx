import React, {useState} from 'react'
import logo from '../../assets/logo (3).png'
import { IoMdPerson,IoIosClose } from "react-icons/io";
import {IoIosSearch, IoMdMenu} from 'react-icons/io'
import {CiHeart} from 'react-icons/ci'
import vase from "../../assets/Home/vase.png"
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bedroom from "../../assets/Home/bedroom.png"
import living from "../../assets/Home/living.png"
import dining from "../../assets/Home/Dining.png"
import card from "../../Card/Card"
import {FaArrowRight, FaCartShopping, FaCodeCompare, FaHeart, FaShare} from 'react-icons/fa6'
import Slider1 from '../../assets/Home/Slider/bedroomInnerPeace.png'
import Slider2 from '../../assets/Home/Slider/cupboard.png'
import Slider3 from '../../assets/Home/Slider/kitchen.png'
import image1 from '../../assets/Home/Grid/leaf.png'
import image2 from '../../assets/Home/Grid/laptop.png'
import image3 from '../../assets/Home/Grid/chair.png'
import image4 from '../../assets/Home/Grid/leafVase.png'
import image5 from '../../assets/Home/Grid/dininigRoom.png'
import image6 from '../../assets/Home/Grid/hotel.png'
import image7 from '../../assets/Home/Grid/gatheringtable.png'
import image8 from '../../assets/Home/Grid/wallpicture.png'
import image9 from '../../assets/Home/Grid/gascooker.png'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'
import MultiCarousel from '../../MultiCarousel/MultiCarousels'
const Home = ({
    addToCart,
    setIsShown,
    isShown,
    size,
    SideBarMenu,
    setSideBarMenu,
    toggleSideBarMenu,
    setShow,
    setSelectedNav,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    componentRef,
    carousel
}) => {

    const [showMore,
        setShowMore] = useState(false)

    const showButton = () => {
        showMore
            ? setShowMore(false)
            : setShowMore(true)
    }
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    };

    // const myStyle = {     backgroundImage: `url(${vase})`,     backgroundSize:
    // "cover",     backgroundRepeat: "no-repeat",     height: "91vh",     width:
    // "100%" }
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

            <section className='pt-[85px] lg:pt-[85px] md:pt-[75px] sm:pt-[85px]'>
                <div className='flex relative '>
                    <img
                        src={vase}
                        className='w-full h-[78vh] md:h-[80vh] sm:h-[75vh] lg:h-[89vh] '
                        alt=""/>

                    <div>
                        <div
                            className='absolute top-64 sm:top-40  sm:space-y-3 lg:space-y-4 space-y-1 md:space-y-4 lg:top-48 md:top-48 right-10 w-[80%] md:h-[55%] lg:h-[65%] sm:h-[50%] h-[40vh] md:w-[50%] sm:w-[50%] md:right-20 lg:right-32 lg:p-10 p-3  md:p-10 sm:p-8 lg:w-[50%] bg-[#efdcc3] '>
                            <p className='text-sm font-normal'>New Arrival</p>

                            <h1
                                className='md:text-4xl text-2xl sm:text-3xl lg:text-6xl font-bold text-[#ce954b]'>Discover Our
                                <br/>
                                New Collection</h1>
                            <p className='text-sm sm:text-xs md:text-base lg:text-xl'>Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Deserunt recusandae exercitationem corporis
                                adipisci voluptatibus? Praesentium.</p>
                            <div onClick={() => setSelectedNav('Home')}>
                                <Link to="/shop">
                                    <button
                                        className='font-normal sm:px-9  md:px-10 lg:px-20 md:py-5 lg:py-10 lg:text-xl  hover:bg-[white] hover:text-[#ce954b]'>Buy Now</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='text-center py-16'>
                    <h1 className='text-xl font-bold'>Browse The Range</h1>
                    <p className='text-xs font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <ScrollAnimation animateIn='zoomIn'>
                    <div
                        className='grid grid-cols-3  sm:px-28  md:px-28 lg:gap-2 xl:gap-0 sm:gap-2  md:gap-3 lg:px-40'>
                        <div className=' text-center space-y-4 '>
                            <img src={living} alt="" className='rounded-lg '/>
                            <p className='font-bold'>Living</p>
                        </div>
                        <div className='text-center space-y-4'>
                            <img src={dining} alt="" className='rounded-lg'/>
                            <p className='font-bold'>Dining</p>
                        </div>
                        <div className='text-center space-y-4'>
                            <img src={bedroom} alt="" className='rounded-lg'/>
                            <p className='font-bold'>Bedroom</p>
                        </div>
                    </div>
                </ScrollAnimation>

            </section>

            <section className='py-16'>
                <h1 className='text-3xl text-center font-bold'>Our Products</h1>
                <div
                    className='lg:py-10 md:py-10 py-10 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 lg:px-20 xl:px-36 md:px-8 sm:px-6 px-4 gap-6'>
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
                                        <div
                                            className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2   py-5 text-white items-center'>
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
                <div
                    className={`lg:py-10 md:py-10 py-10 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 lg:px-20 xl:px-36 md:px-8 sm:px-6 px-4 gap-6 ${showMore
                    ? ""
                    : 'hidden'}`}>
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
                                        <div
                                            className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2   py-5 text-white items-center'>
                                            <div className=' flex items-center'>
                                                <FaShare/>
                                                <p>Share</p>
                                            </div>
                                            <div className='flex items-center'>
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
                <div className='text-center py-7 bg-white '>
                    <button
                        onClick={showButton}
                        className='bg-white border-2 border-[#ce954b] hover:bg-[#ce954b] hover:text-white text-[#ce954b]'>SHOW More</button>

                </div>
            </section>
            <section className='bg-[#f5e9db]'>
                <MultiCarousel/>

            </section>
            <section>
                <div className='text-center py-12 space-y-3'>
                    <h1>Store your setup with</h1>
                    <h1 className='text-4xl font-extrabold'>#FuniroFurniture</h1>
                </div>
                <div
                    className='grid grid-cols-5 md:grid-cols-5 md:gap-3 lg:grid-cols-5  xl:grid-cols-5 lg:gap-3 xl:gap-3 sm:grid-cols-5 gap-3'>
                    <div
                        className='col-start-1 col-end-3  space-y-1 xl:col-start-1 lg:col-start-1 md:col-start-1 md-col-end-3 xl:col-end-3 sm:col-start-1 sm:col-end-3 lg:col-end-3 xl:space-y-3 md:space-y-3 lg:space-y-3 sm:space-y-2'>
                        <div
                            className='grid grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-3 sm:grid-cols-4 sm:gap-1 xl:grid-cols-4 xl:gap-3 md:gap-2 md:grid-cols-4'>
                            <div className=''>
                                <img
                                    src={image1}
                                    className='w-full h-full lg:w-full lg:h-full xl:w-full xl:h-full md:w-full sm:w-full sm:h-full md:h-full   '
                                    alt=""/>
                            </div>
                            <div
                                className='col-start-2 pt-3 lg:pt-20 xl:pt-16 md:pt-20 col-end-5 sm:col-start-2 sm:col-end-5 sm:pt-10 md:col-start-2 md:col-end-5 xl:col-start-2 lg:col-start-2 lg:col=end-5 xl:col-end-5 '>
                                <img src={image2} className='w-full' alt=""/>
                            </div>
                        </div>
                        <div
                            className='grid grid-cols-5 gap-1 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 sm:gap-1 md:gap-2   lg:gap-3 xl:grid-cols-5 xl:gap-3'>
                            <div
                                className='col-start-1 sm:col-stat-1 sm:col-end-3 col-end-3 lg:col-start-1 md:col-start-1 md:col-end-3 lg:col-end-3 xl:col-start-1 xl:col-end-3'>
                                <img
                                    src={image3}
                                    className='h-[16vh] xl:h-[52vh] lg:h-[44vh] md:h-[30vh] sm:h-[24vh]'
                                    alt=""/>
                            </div>
                            <div
                                className='col-start-3 col-end-6 xl:col-start-3 sm:col-start-3 sm:col-end-6 md:col-start-3 md:col-end-6 lg:col-end-6 lg:col-start-3 xl:col-end-6'>
                                <img src={image4} className='w-full' alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src={image5} className='' alt=""/>
                    </div>
                    <div
                        className='col-start-4 col-end-6 lg:col-end-7 lg:col-start-4 md:col-start-4 sm:col-start-4 sm:col-end-7 md:col-end-7 xl:col-start-4 xl:col-end-7'>
                        <div
                            className='grid grid-cols-4 gap-1 xl:grid-cols-4 xl:gap-4 md:grid-cols-4 lg:grid-cols-4 md:gap-2 lg:gap-3 sm:gap-2 sm:grid-cols-4'>
                            <div
                                className='col-start-1 col-end-3 pt-[25px] sm:pt-[26px] xl:col-start-1 lg:col-start-1 md:col-start-1 md:col-end-3 xl:col-end-3 lg:col-end-3 xl:pt-[105px] lg:pt-[50px] md:pt-[45px] '>
                                <img
                                    src={image6}
                                    className='w-full h-full xl:w-full xl:h-full lg:h-full md:h-full sm:h-full '
                                    alt=""/>
                            </div>
                            <div
                                className='col-start-3 col-end-5 sm:col-start-3 sm:col-end-5 md:col-start-3 md:col-end-5 xl:col-start-3 xl:col-end-5 lg:col-end-5 lg:col-start-3 '>
                                <img src={image7} className='w-full' alt=""/>
                            </div>
                        </div>
                        <div
                            className='flex space-x-1 py-1 sm:flex sm:space-x-2 xl:flex xl:space-x-5 xl:py-2 sm:py-1 lg:py-2 lg:space-x-3 md:py-2 md:space-x-2 md:flex'>
                            <img
                                src={image8}
                                className='w-[40%] h-[10vh] xl:h-[35vh] lg:h-[30vh] md:h-[22vh] sm:h-[16vh]'/>
                            <img
                                src={image9}
                                className='pb-5 w-[50%] xl:w-[50%] xl:pb-5 lg:w-[50%] lg:pb-5 md:w-[50%] sm:w-[50%]'
                                alt=""/>
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
        </div>
    )
}

export default Home
