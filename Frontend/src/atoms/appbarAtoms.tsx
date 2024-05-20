import { atom, selector } from 'recoil';
import { BACKEND_URL } from '../backendurl';
import axios  from 'axios';


export const currentUserNameQuery=atom({
    key:"currentUserNameAtom",
    default:selector({
        key:'currentUserNameSelector',
        get:async ()=>{
            const response=await axios.get(`${BACKEND_URL}/api/v1/user/getUser`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            return  response.data.User;
        }
    })
})