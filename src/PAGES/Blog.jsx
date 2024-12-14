import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Blog = ( {blog} ) => {

    let info = useLocation();
    blog = info.state.blog;

    console.log(blog);

    return (
        <section>This is the blog.</section>
    )
}

export default Blog;