import React from 'react'

function Footer() {
    return (
		<footer>
			<section className="subscription">
				<h2>Subscribe to the Newsletter!</h2>
				<p>
					<input type="email" placeholder="Email address" />
					<button className='signup'>Sign Up</button>
				</p>
			</section>
			<section className="copyright">
				<p>
					<sub>© 2022 Gamer</sub>
				</p>
			</section>
		</footer>
	);
}

export default Footer;