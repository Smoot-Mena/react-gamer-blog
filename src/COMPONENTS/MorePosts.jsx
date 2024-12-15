import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useRandomNumberGenerator from '../hooks/useRandomNumberGenerator';

const MorePosts = () => {
    let [blogs, setBlogs] = useState(useSelector((state) => state.blogs));
	let [posts, setPosts] = useState([]);

    useEffect(() => {
		const generateRandomPosts = () => {
			let randomPosts = [];
			let usedIndices = new Set();

			while (randomPosts.length < 3) {
				let randomIndex = useRandomNumberGenerator(blogs.length);
				if (!usedIndices.has(randomIndex)) {
					usedIndices.add(randomIndex);
					randomPosts.push(blogs[randomIndex]);
				}
			}
			setPosts(randomPosts);
		};

		generateRandomPosts();
	}, [blogs])

  return (
    <section>
        <header className='aside-header'>More Posts</header>
			<aside className='more-posts'>
				{posts && posts.map((post, index) => (
					<article key={index}>
						<Link className='article-img-link' to={"/blogs/article/" + post.id} state={ {post: post} } >
							<img src={"/" + post.image} alt={post.title} />
							<h6 className='article-header'>{post.title}</h6>
						</Link>
					</article>
				))}
			</aside>
    </section>
  )
}

export default MorePosts;