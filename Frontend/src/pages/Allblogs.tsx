
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlog";
import Appbar from "../components/Appbar";



const Allblogs = () => {
  const {loading,posts}=useBlogs();
  return (
    <div className="overflow-x-hidden">
      <Appbar showSearchBar={true}/>
      {loading && <p>Loading blog...</p>}
      <div>
        {posts.map((post)=>{
            return <BlogCard
            name={post.author.name}
            title={post.title}
            content={post.content}
            publishedDate={post.createdAt}
            id={post.id}
          />
        })}
      </div>
    </div>
  );
};

export default Allblogs;

// Here,at componentDidMount a axios request should go to the backend /getAllblogs
// then iterate to the response and render the <BlogCard> component
