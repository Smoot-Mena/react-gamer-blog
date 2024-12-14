import React from 'react'
import { useLocation } from 'react-router-dom';

function Blog( {blogs} ) {

    // let info = useLocation();
    // blogs = info.state.blog;

    console.log(blogs);

    return (
        <section>This is the blog.</section>
    )
}

export default Blog;