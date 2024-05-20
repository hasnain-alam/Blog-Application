import  { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Labelinput from './Labelinput'
import { SignupInput } from '@rashidziya/medium-common'
import Button from './Button'
import axios from 'axios'
import { BACKEND_URL } from '../backendurl'

const SignupCom = ({type}:{type:"signup"| "signin"}) => {
    // type userType=SigninInput|SignupInput;
    const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function postRequestHandler(){
        // solve the issue of post request for signup and signin button 
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?'signup':'signin'}`,userDetails);
            const jwt=response.data.token;
            localStorage.setItem('token',jwt);
            navigate('/allblogs');
        }catch(e){
            alert(type==="signin"?"something is up while signin ":"something is up while signup");
        }
       
    }
  return (
    
    <div className='flex flex-col justify-center h-screen '>
        <div className='flex justify-center'>
            <div>
                <div className='px-8'>
                    <div className='font-bold text-4xl  '>
                        {type==="signup"?"Crate an account":"Signin to Account"}
                    </div>
                    <div className='mb-8 text-slate-500 text-center'>
                        {type==="signup"?"Already have an account?":"Don't have an account?"}  
                        <Link className='pl-2 underline decoration-solid' to={type==="signup"?"/signin":"/signup"}>
                            {type==="signup"?"Sign In":"Sign up"}
                        </Link>
                    </div>
                </div>
                <div>
                    {type==="signup"? <Labelinput label={"Username"} placeholder={"Enter your Username"} onchange={(e)=>{
                        setUserDetails({
                            ...userDetails,
                            name:e.target.value
                        });
                    }}/>:null}
                   
                    <Labelinput label={"Email"} placeholder={"someone@gmail.com"} onchange={(e)=>{
                        setUserDetails({
                            ...userDetails,
                            email:e.target.value
                        });
                    }}/>
                    <Labelinput label={"Password"} type={"password"} placeholder={"12345"} onchange={(e)=>{
                        setUserDetails({
                            ...userDetails,
                            password:e.target.value
                        });
                    }}/>
                   
                    <Button lable={type==="signup"?"SignUp":"Signin"} onclick={postRequestHandler}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupCom