import { Blog } from "../hooks/useBlog";
import { format } from "date-fns";
const FullBlog = ({blog}:{blog:Blog[]}) => {
    const actualBlog=blog[0];
    const formattedDate=format(new Date(actualBlog.createdAt),'MMM d,yyyyy');
    if(blog){
        return (
            <div className='grid grid-cols-12 mx-24 gap-6 py-12'>
                
                <div className='col-span-8 flex flex-col'>
                    <div className='text-5xl font-extrabold'>
                        {actualBlog.title}
                    </div>
                    <div className='text-slate-500 my-4'>
                        {`posted on ${formattedDate}`}
                    </div>                    
                    <div>
                        {actualBlog.content}
                    </div>                    
                </div>
                <div className='col-span-4 '>
                    <div className='flex flex-col gap-6'>
                        <div className='text-slate-600 font-medium'>
                            Author
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex flex-col justify-center'>
                                <LocalCirlce/>
                            </div>
                            
                            <div className='flex flex-col gap-2 text-2xl font-bold'>
                                <div>
                                    {actualBlog.author.name}
                                </div>                                                             
                                <div className='text-slate-400 text-base font-normal'>
                                From SEO-optimized articles to captivating blog posts, I create content that gets seen and drives action.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <div>
            Loading from Else...
        </div>
    }
}

const LocalCirlce=()=>{
    return <div className='bg-slate-200 h-7 w-7 rounded-full '>

    </div>
}
export default FullBlog