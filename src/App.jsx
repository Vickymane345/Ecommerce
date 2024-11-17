import React, { useEffect, useRef, useState } from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes, history, unstable_HistoryRouter } from 'react-router-dom'
import Cart from '../src/Components/Cart/Cart'
import Shop from './Components/Shop/Shop'
import Checkout from './Components/Checkout/Checkout'
import Contact from './Components/Contact/Contact'
import carousel from '../src/MultiCarousel/MultiCarousel'
import SignUp from './Components/SignUp/SignUp'
import Profile from './Components/Profile/Profile'
import Account from './Components/Account/Account'



const App = () => {
    const [cartsVisibility, setCartVisible] = useState(false);
    const [selectedNav, setSelectedNav] = useState(0);
      const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])



       const [SideBarMenu, setSideBarMenu] = useState(false) 
  const toggleSideBarMenu = () =>{
    SideBarMenu ? setSideBarMenu(false) : setSideBarMenu(true)
    
  }
  const addToCart = (product) =>{
    setCart((prev) => {
      const existingItems = prev.find(item => item.id === product.id)

      if(existingItems) {
        return prev.map(item=> item.id ===product.id ? { ...item, quantity: item.quantity + 1} : item);
      } else {
        return [...prev ,{...product, quantity: 1}]
      }
    });
  }

      const removeFromCart = (productId) => {
    setCart((prevItems) => prevItems.filter(item => item.id !== productId));
  };
    const decreaseQuantity = (product) => {
    setCart((prev) =>
      prev.map(item =>
        item.id === product
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
  

  
    const increaseQuantity = (product) => {
    setCart((prev) =>
      prev.map(item =>
        item.id === product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
    const [isShown, setIsShown] = useState(false);
      const [isClickable, setIsClickable] = useState(false);
        const componentRef = useRef(null);


       const handleMouseEnter = () => {
    if (!isClickable) {
      setIsShown(true);
    }
  };
    const handleMouseLeave = () => {
    if (!isClickable) {
      setIsShown(false);
    }
  };

    const handleClick = () => {
    setIsClickable(true);
    setIsShown(true);
  };
   const handleOutsideClick = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsClickable(false);
      setIsShown(false); // Hide content when clicking outside
    }
  };
    useEffect(() => {
    // Add event listener for clicks outside the component
    document.addEventListener('mousedown', handleOutsideClick);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
    const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
   const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
   const handleDobNameChange = (event) => {
    setDob(event.target.value);
  };
   const handlePhoneNameChange = (event) => {
    setPhoneNumber(event.target.value);
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    
  };
    return (
    <div className=''>
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp handleAddressChange={handleAddressChange} address={address} handlePhoneNameChange={handlePhoneNameChange} firstName={firstName} handleDobNameChange={handleDobNameChange} handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange}  email={email} lastName={lastName} phoneNumber={phoneNumber} dob={dob}/>}/>
       <Route path='Home' element={<Home carousel={carousel} componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu}  setSelectedNav={setSelectedNav} selectedNav={selectedNav} addToCart={addToCart} size={cart.length} setCartVisible={setCartVisible}/>}/>
       <Route path='shop' element={<Shop componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu} setSelectedNav={setSelectedNav} selectedNav={selectedNav} addToCart={addToCart} size={cart.length} setCartVisible={setCartVisible}/>}/>
           <Route path='cart' element={     <Cart  componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu} cart={cart} size={cart.length} setSelectedNav={setSelectedNav} calculateTotalPrice={calculateTotalPrice} removeFromCart={removeFromCart} setCart={setCart} increaseQuantity= {increaseQuantity} decreaseQuantity={decreaseQuantity} selectedNav={selectedNav}  />}/>
            <Route path='checkout' element={<Checkout  componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu} setSelectedNav={setSelectedNav} calculateTotalPrice={calculateTotalPrice}  cart={cart} selectedNav={selectedNav}/>} />
            <Route path='contact'element={<Contact  componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu} size={cart.length} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />} />
            <Route path='Profile' element={<Profile  componentRef={componentRef}  handleClick={handleClick} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}  isShown={isShown} setIsShown={setIsShown} SideBarMenu={SideBarMenu} setSideBarMenu={setSideBarMenu} toggleSideBarMenu={toggleSideBarMenu} setSelectedNav={setSelectedNav} selectedNav={selectedNav} addToCart={addToCart} size={cart.length} setCartVisible={setCartVisible} firstName={firstName} lastName={lastName} address={address} dob={dob} phoneNumber={phoneNumber} email={email} />}/>
            <Route path='Account' element={<Account firstName={firstName} lastName={lastName} address={address} dob={dob} phoneNumber={phoneNumber} email={email} />}/>
    </Routes>
    </BrowserRouter>
    </div>
  
    
  
)
}

export default App
