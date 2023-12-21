import React, { useEffect, useState } from 'react';

import blogData from "../COMPONENTS/blogData.json";
import systemData from "../COMPONENTS/systemData.json";

import "../CSS/homepage.css";
import { Link } from 'react-router-dom';

function Homepage() {
	let [blogs, setBlogs] = useState(blogData);
	let [systems, setSystems] = useState(systemData);

    let rng = blogs.length - 2;
    let rng2 = 1;




	return (
		<>
			<section className="featured-articles">
				<article className="left-featured">
					<Link to={"/blogs/article#" + blogs[rng].id}>
						<img
							className="featured-pic"
							src={blogs[rng].image}
							alt={blogData[rng].title}
						/>
						<h4 className="featured-title">{blogs[rng].title}</h4>
					</Link>
				</article>
				<article className="right-featured">
					<Link to={"/blogs/article#" + blogs[rng2].id}>
						<img
							className="featured-pic"
							src={blogs[rng2].image}
							alt={blogData[rng2].title}
						/>
						<h4 className="featured-title">{blogs[rng2].title}</h4>
					</Link>
				</article>
			</section>

			<header className="main-header">
				<h1>Gamer</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Odio ut enim blandit volutpat maecenas volutpat.
					Aliquam faucibus purus in massa tempor nec feugiat nisl.
					Nibh mauris cursus mattis molestie.
				</p>
			</header>
			<main className='all-articles'>
				{blogs.map((blog) => (
					<article key={blog.id}>
						<Link className='article-img-link' to={"/blogs/article#" + blog.id}>
							<img src={blog.image} alt={blog.title} />
						</Link>
						<p>
							<Link className='category console' to={"/systems/" + blog.system} title={blog.system} system={blog.system}>{blog.system} </Link>
							| <time>{blog.time}</time>
						</p>
						<h5 className='article-header'>
						<Link to={"/blogs/article#" + blog.id}>{blog.title}</Link>
						</h5>
					</article>
				))}
			</main>

			<header className='aside-header'>More Posts</header>
			<aside className='more-posts'>
				<article>
					<Link className='article-img-link' to={"/blogs/article#" + blogs[0].id}>
						<img src={blogs[0].image} alt={blogs[0].title} />
						<h6 className='article-header'>{blogs[0].title}</h6>
					</Link>
				</article>
				<article>
					<Link className='article-img-link' to={"/blogs/article#" + blogs[4].id}>
						<img src={blogs[4].image} alt={blogs[4].title} />
						<h6 className='article-header'>{blogs[4].title}</h6>
					</Link>
				</article>
				<article>
					<Link className='article-img-link' to={"/blogs/article#" + blogs[2].id}>
						<img src={blogs[2].image} alt={blogs[2].title} />
						<h6 className='article-header'>{blogs[2].title}</h6>
					</Link>
				</article>
			</aside>
		</>
	);
}

export default Homepage;