import { Link } from "react-router-dom";
import { format } from 'date-fns'

interface inputType {
  name: string;
  title: string;
  content: string;
  publishedDate:Date;
  id:string;
}
const BlogCard = ({ name, title, content, publishedDate ,id}: inputType) => {
  const formattedDate=format(new Date(publishedDate),'MMM d,yyyyy');
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-screen">
      <div className="mx-48 mt-4 px-20">
        <div className="flex flex-col ">
          <div className="flex ">
            <div className="flex jsutify-center flex-col">
              <Avatar name={name} size="small"/>
            </div>
            <div className="flex items-center pl-2 font-medium">
              <div>{name}</div>
              <div className="pl-2">
                <DotCircle />
              </div>
              <div className="pl-3 text-slate-500 font-normal">
                {formattedDate.toString()}
              </div>
            </div>
          </div>
          <div className="font-bold text-3xl mt-4 max-w-3xl">
            {title.length > 80 ? title.slice(0, 80) : title}
          </div>
          <div className="text-lg font-normal mt-4 max-w-2xl">
            {content.length > 100 ? content.slice(0, 150) + "..." : content}
          </div>
          <div className="mt-4 pb-4 text-slate-500 font-normal">
            {`${Math.ceil(content.length / 100)} min read`}
          </div>

          <div className="bg-slate-200 h-px mt-6 w-full" />
        </div>
      </div>
      </div>
      </Link>
  );
};

const DotCircle = () => {
  return <div className="bg-slate-500 w-1 h-1 rounded-full"></div>;
};
export const Avatar = ({ name ,size}: { name: string,size:'small'|"big" }) => {
  const letter = name[0];
  return (
    <div className={`relative inline-flex items-center justify-center ${size==='small'?`w-8 h-8`:`w-10 h-10`} overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}>
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {letter.toUpperCase()}
      </span>
    </div>
  );
};
export default BlogCard;
