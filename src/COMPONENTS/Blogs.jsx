import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState(useSelector((state) => state.blogs));
    console.log(blogs);
     
    return (
        <section id="blogs-section">
            
        </section> 
    )
}

export default Blogs;


{/* <section>
            {blogs && blogs.map((blog) => (
                <section key={blog.id}>
                    <Link><h4 style={{width: "max-content"}}>{blog.title}</h4></Link>
                    <p>Author: {blog.author} | System: {blog.system} | Date: {blog.time}</p>
                    <img src={"../" + blog.image} alt={blog.system} width="500px" />
                </section>
            ))}
        </section> */}