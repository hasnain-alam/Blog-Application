import axios from 'axios'
import { atomFamily , selectorFamily} from 'recoil'
import { BACKEND_URL } from '../backendurl'



export interface BlogPost{
    id:string;
    title:string;
    content:string;
    createdAt:Date;
    author:{
        name:string;
    }
}
export const blogAtom=atomFamily({
    key:"blogAtom",
    default:(postId)=>async ()=>{
        const res=await axios.get(`${BACKEND_URL}/api/v1/blog/getPost/`,{
            params:{
                id:postId
            },
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.data.post;
    }
})


export const blogatomFamily = atomFamily({
    key: "blogatomFamily",
    default: selectorFamily({
      key: 'postSearch',
      get: postId => async () => {
        const response=await axios.get(`${BACKEND_URL}/api/v1/blog/getPost/${String(postId)}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response) return response.data.post;
        throw new Error(response)
      },
    }),
  });