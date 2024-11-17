import React from 'react'
import vase from '../../assets/Home/vase.png'
import logo from '../../assets/logo (3).png'
import { Link } from 'react-router-dom'

const SignUp = ({handleChange,address,handleAddressChange,handleLastNameChange, handleEmailChange,handlePhoneNameChange, firstName, handleDobNameChange,handleFirstNameChange,handleSubmit,lastName,dob,email,phoneNumber}) => {
     const myStyle = {
        backgroundImage: `url(${vase})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
       
    }
  return (
    <div style={myStyle} className=''>
      <div className=' py-5'>
        <div className='flex text-center pb-5 justify-center'>
            <img src={logo} alt="" />
                    <h1 className=''>SIGN UP</h1>

        </div>
        <div className='bg-white w-[80%] lg:w-[50%] md:w-[50%] sm:w-[50%] xl:w-[40%] m-auto px-2 shadow-2xl  rounded-2xl'>
            <form action="" onSubmit={handleSubmit} className='w-full p-8  space-y-2'>
                
                    <div className='space-y-3'>
                        <label htmlFor="" className='block text-start'>First Name</label>
                        <input type="text" name='fName' value={firstName} onChange={handleFirstNameChange} required className='py-2 w-full border-2 px-2' />
                    </div>

                
                                    <div className='space-y-3'>
                        <label className='block text-start'>Last Name</label>
                        <input type="text" name='lName' onChange={handleLastNameChange} value={lastName} required className='py-2 w-full border-2 px-2' />
                    </div>
                <div className='space-y-2'>
                    <label htmlFor="" className='block '>Email</label>
                    <input type="email" name='email'  onChange={handleEmailChange} value={email} required className='p-2 w-full border-2' />
                </div>
                <div>
                    <label htmlFor="" className='block'>Date of birth</label>
                    <input type='date' placeholder='DD/MM/YYYY' onChange={handleDobNameChange} value={dob} required name='dob' className='p-2 w-full border-2' />
                </div>
                 <div>
                    <label htmlFor="" className='block'>Password</label>
                    <input type="password" placeholder='password'   required name='password' className='p-2 w-full border-2' />
                </div>
                <div>
                    <label htmlFor="">Phone number</label>
                    <input type="number"placeholder='+234' name='phoneNumber' onChange={handlePhoneNameChange} value={phoneNumber} className='p-2 w-full border-2' required />
                </div>
                     <div>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='' name='address' onChange={handleAddressChange} value={address} className='p-2 w-full border-2' required />
                </div>
                <div>
                <Link to='/Home'>    <button className='px-5 py-3' >
                        Sign Up
                    </button></Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
