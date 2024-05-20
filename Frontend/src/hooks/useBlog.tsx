import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../backendurl";

export interface Blog{
    title:string;
    content:string;
    id:string;
    createdAt:Date;
    author:{
        name:string
    }
}


export const useBlog=({id}:{id:string})=>{
    const [blog,setBlog]=useState<Blog>();
    const [loading,setLoading]=useState(true);


    // how to make middleware optional for this allPost page.if the user is not signedin then also they sould get all the post to see
    useEffect(()=>{
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/getPost/${id}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response=>{
                setBlog(response.data.post);
                setLoading(false);
            });
            
        }catch(err){
            console.log("Something is up while fetching The Post");
        }
        
    },[])
    return {
        blog,
        loading
    }
}
export const useBlogs=()=>{
    const [posts,setPosts]=useState<Blog[]>([]);
    const [loading,setLoading]=useState(true);

    // how to make middleware optional for this allPost page.if the user is not signedin then also they sould get all the post to see
    useEffect(()=>{
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/allPost`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response=>{
                setPosts(response.data.post);
                setLoading(false);
            });
            
        }catch(err){
            console.log("Something is up while fetching all Posts");
        }
        
    },[])
    return {
        posts,
        loading
    }
}