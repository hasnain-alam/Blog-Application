import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import Button from '../components/Button'
import { CreateBlog, createBlog } from '@rashidziya/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../backendurl'
import { useNavigate } from 'react-router-dom'
const Publish = () => {
  const [blog,setBlog]=useState<CreateBlog>({
    title:"",
    content:""
  });
  const navigate=useNavigate();

  const CreatBlogRequest=async()=>{
      try {
        const res=await axios.post(`${BACKEND_URL}/api/v1/blog`,blog,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          },
          
        })
        navigate('/allblogs')
      } catch (err) {
        console.log("Something is up while Creating the Blog-Post")
      }
  }
  
  return (
    <div>
         <Appbar/>
        <div className='flex justify-center '>
        <div className=' w-6/12 mt-6'>
          <div className='flex flex-col justify-center '>
            <div className='h-10'>
                <input onChange={(e)=>{
                  setBlog({
                    ...blog,
                    title:e.target.value
                  })
                }} className='border-2 border-black w-full px-4 rounded-lg h-10 '
                type='text' placeholder='Title'></input>
            </div>
            <div>
              {/* <label className="block mb-2 text-sm font-medium text-gray-900"></label> */}
              <textarea onChange={(e)=>{
                  setBlog({
                    ...blog,
                    content:e.target.value
                  })
              }} id="message" className="overflow-x-hidden w-full min-h-96 px-4 py-2 mt-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 " placeholder="Your Content Here..."></textarea>
            </div>
            <Button lable='Publish ' onclick={CreatBlogRequest} />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Publish