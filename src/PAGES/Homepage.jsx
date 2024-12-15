import React, { useState } from 'react';
import "../CSS/homepage.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useRandomNumberGenerator from '../hooks/useRandomNumberGenerator';

import MorePosts from '../COMPONENTS/MorePosts';


const Homepage = ( {systemData} ) => {

	// Variables
	let [blogs, setBlogs] = useState(useSelector((state) => state.blogs));
	let [systems, setSystems] = useState(systemData);


	// Generates the featured articles on page load
    let featuredArticle1 = useRandomNumberGenerator(blogs.length);
	let featuredArticle2 = 0;

	// Makes sure the second number generates at least once
	do {
		featuredArticle2 = useRandomNumberGenerator(blogs.length);
	} while (featuredArticle2 === featuredArticle1);

	// Gamer paragraph
	let gamer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Odio ut enim blandit volutpat maecenas volutpat.
					Aliquam faucibus purus in massa tempor nec feugiat nisl.
					Nibh mauris cursus mattis molestie.`;


	return (
		<>
			<section className="featured-articles">
				<article className="left-featured">
					<Link to={"/blogs/article/" + blogs[featuredArticle1].id} state={ {blog: blogs[featuredArticle1]} } >
						<img
							className="featured-pic"
							src={blogs[featuredArticle1].image}
							alt={blogs[featuredArticle1].title}
						/>
						<h4 className="featured-title">{blogs[featuredArticle1].title}</h4>
					</Link>
				</article>
				<article className="right-featured">
					<Link to={"/blogs/article/" + blogs[featuredArticle2].id} state={ {blog: blogs[featuredArticle2]} }>
						<img
							className="featured-pic"
							src={blogs[featuredArticle2].image}
							alt={blogs[featuredArticle2].title}
						/>
						<h4 className="featured-title">{blogs[featuredArticle2].title}</h4>
					</Link>
				</article>
			</section>

			<header className="main-header">
				<h1>Gamer</h1>
				<p>{gamer}</p>
			</header>
			<section className='all-articles'>
				{blogs.map((blog) => (
					<article key={blog.id}>
						<Link className='article-img-link' to={"/blogs/article/" + blog.id} state={{ blog: blog }}>
							<img src={blog.image} alt={blog.title} />
						</Link>
						<p>
							<Link className='category console' to={"/systems/" + blog.system} title={blog.system} state={{ system: blog.system }}>{blog.system} </Link>
							| <time>{blog.time}</time>
						</p>
						<h5 className='article-header'>
						<Link to={"/blogs/article/" + blog.id}>{blog.title}</Link>
						</h5>
					</article>
				))}
			</section>

			<MorePosts />
		</>
	);
}

export default Homepage;
