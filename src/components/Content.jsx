import { useLoaderData } from "react-router-dom";
import placeholder from "../assets/404.jpg";
const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, description, published_at } = blog;
  console.log(blog);
  return (
    <div
    
      rel="noopener noreferrer"
      href="#"
      className=" mx-auto group hover:no-underline focus:no-underline bg-gray-50   hover:border-gray-700 border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeholder}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toLocaleDateString()}
        </span>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Content;
