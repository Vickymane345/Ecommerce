import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import logo from "../../assets/logo (3).png"
import { Link } from 'react-router-dom'
const Account = ({firstName, lastName, email,phoneNumber, dob, address}) => {
  return (
    <div>
      <div>
        <Link to='/Profile'>   <div className='p-5'>
            <FaArrowLeft/>
        </div></Link>
        <div>
            <div className='justify-center'>
                <img src={logo} className='text-center m-auto' alt="" />
            </div>
            <div className='px-5'>
                <div className='text-center'>
                     <h1 className='font-bold'>Profile Details</h1>
                </div>
                <div className=' py-4 border-b-2 pb-4'>
                    <p>First Name</p>
                    <p>{firstName}</p>
                </div>

                      <div className=' py-4 border-b-2 pb-4'>
                    <p>Last Name</p>
                    <p>{lastName}</p>
                </div>
                      <div className=' py-4 border-b-2 pb-4'>
                    <p>Email Address</p>
                    <p>{email}</p>
                </div>
                      <div className=' py-4 border-b-2 pb-4'>
                    <p>Date of Birth</p>
                    <p>{dob}</p>
                </div>
                      <div className=' py-4 border-b-2 pb-4'>
                    <p>Phone Number</p>
                    <p>{phoneNumber}</p>
                </div>

                      <div className=' py-4 border-b-2 pb-4'>
                    <p>Address</p>
                    <p>{address}</p>
                </div>
            </div>

            <div className='text-center py-5'>
                <p className='font-bold text-[burlywood]'>Edit Profile</p>
            </div>

            <div className='py-5'>
                <img src={logo} className ='m-auto' alt="" />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Account
