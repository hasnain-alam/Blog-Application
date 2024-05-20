import {   useRecoilValue } from "recoil"
import FullBlog from "../components/FullBlog"
import { useParams } from "react-router-dom"
import {  blogatomFamily} from "../atoms/blogAtom"
import Appbar from "../components/Appbar"



const Blog = () => {
  const {id}=useParams() as {id:string};
  // let blogId:string=id||""
  const blogs=useRecoilValue(blogatomFamily(id));
  return (
    <div>
      <Appbar/>
      <div>  
        {blogs && <FullBlog blog={blogs}/>}
      </div>
        
    </div>
  )
}

export default Blog