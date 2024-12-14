import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = ( {blog} ) => {

    // Variables
    let info = useLocation();
    blog = info.state.blog;

    let title = blog.title;
    let image = blog.image;
    let id = blog.id;
    let author = blog.author;
    let system = blog.system;
    let firstParagraph = blog.firstParagraph;
    let secondParagraph = blog.secondParagraph;
    let thirdParagraph = blog.thirdParagraph;
    let fourthParagraph = blog.fourthParagraph;
    let quote = blog.quote;
    let time = blog.time;

    console.log(firstParagraph);


    return (
        <main className='blog-post'>
            <img className='game-pic' src={"/" + image} alt={title} />
            <header className='game-header'>
                <h2>{title}</h2>
            </header>
            <section className='author'>
                <p>Author: {author} | <time>{time}</time></p>
                <span className='share-links'>Share this story on: 
                    <Link className='twitter'>
                        Twitter
                    </Link>
                    <Link className='linkedIn'>
                        LinkedIn
                    </Link>
                    <Link className='facebook'>
                        Facebook
                    </Link>
                </span>
            </section>
            <article className='container'>
                <p className='first-paragraph'>{firstParagraph}</p>
                <q className='quote'>
                    <em>{quote}</em>
                </q>
                <p className='second-paragraph'>{secondParagraph}</p>
                <p className='third-paragraph'>{thirdParagraph}</p>
                <p className='fourth-paragraph'>{fourthParagraph}</p>
            </article>
            <header className='author-header'>
                <h3>About the Author</h3>
            </header>
        </main>
    )
}

export default Blog;