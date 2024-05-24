import { Blog } from "../hooks/useBlog";
import { format } from "date-fns";
const FullBlog = ({blog}:{blog:Blog[]}) => {
    const actualBlog=blog[0];
    const formattedDate=format(new Date(actualBlog.createdAt),'MMM d,yyyyy');
    if(blog){
        return (
            <div className=' mx-8 gap-2 md:grid md:grid-cols-12 md:mx-24 md:gap-6 py-12'>
                
                <div className='col-span-8 flex flex-col'>
                    <div className='text-2xl font-extrabold md:text-5xl md:font-extrabold'>
                        {actualBlog.title}
                    </div>
                    <div className='text-slate-500 my-4'>
                        {`posted on ${formattedDate}`}
                    </div>                    
                    <div>
                        {actualBlog.content}
                    </div>                    
                </div>
                <div className='mt-16 md:col-span-4 md:mt-2 '>
                    <div className='flex flex-col gap-2 md:gap-6'>
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
    return <div className='bg-slate-200 w-4 h-4 rounded-full md:h-7 md:w-7 '>

    </div>
}
export default FullBlog