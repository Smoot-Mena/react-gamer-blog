import React from 'react'
import "../App.css";
import { useLocation } from 'react-router-dom';

function System( {system} ) {
	let device = useLocation();
	system = device.state.system;

    return (
		<main>
			<header className="system-header">
				<h2>{system?.type || system}</h2>
			</header>
			<article className="container">
				<p className="first-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar
					mattis. Quisque egestas diam in arcu cursus euismod quis
					viverra nibh. Tristique risus nec feugiat in fermentum
					posuere urna nec tincidunt. Nunc mattis enim ut tellus
					elementum sagittis vitae et. Etiam tempor orci eu lobortis.
					Dis parturient montes nascetur ridiculus mus. Viverra mauris
					in aliquam sem fringilla ut morbi. Orci eu lobortis
					elementum nibh tellus. Bibendum neque egestas congue quisque
					egestas diam in arcu.
				</p>
				<q className="quote">
					<em>
						Elit at imperdiet dui accumsan sit amet nulla facilisi
						morbi. Non curabitur gravida arcu ac tortor dignissim.
					</em>
				</q>
				<p className="second-paragraph">
					Sapien faucibus et molestie ac feugiat sed. Sollicitudin
					nibh sit amet commodo nulla facilisi. Semper auctor neque
					vitae tempus quam pellentesque nec. Imperdiet dui accumsan
					sit amet nulla facilisi morbi tempus iaculis. At auctor urna
					nunc id cursus metus aliquam eleifend.{" "}
					<b>
						Elit at imperdiet dui accumsan sit amet nulla facilisi
						morbi. Non curabitur gravida arcu ac tortor dignissim.
					</b>{" "}
					Leo urna molestie at elementum eu facilisis sed odio morbi.
					Ipsum faucibus vitae aliquet nec ullamcorper. Quis commodo
					odio aenean sed adipiscing diam donec adipiscing. Penatibus
					et magnis dis parturient montes nascetur. Integer vitae
					justo eget magna. Dui ut ornare lectus sit amet est
					placerat. Tempor orci dapibus ultrices in iaculis. Feugiat
					vivamus at augue eget arcu dictum varius duis at. Dui ut
					ornare lectus sit amet. Sagittis nisl rhoncus mattis rhoncus
					urna neque.
				</p>
				<p className="third-paragraph">
					Senectus et netus et malesuada. Justo donec enim diam
					vulputate ut pharetra.{" "}
					<u>Facilisi etiam dignissim diam quis enim lobortis.</u> In
					dictum non consectetur a erat. Tellus in metus vulputate eu
					scelerisque felis imperdiet proin. Lorem donec massa sapien
					faucibus et molestie ac feugiat. Amet tellus cras adipiscing
					enim eu. Ut tortor pretium viverra suspendisse potenti
					nullam ac tortor vitae. Mauris pharetra et ultrices neque
					ornare aenean euismod. Pellentesque habitant morbi tristique
					senectus et netus et malesuada. Vulputate mi sit amet mauris
					commodo quis. Auctor neque vitae tempus quam pellentesque
					nec. Tristique nulla aliquet enim tortor. Mauris
					pellentesque pulvinar pellentesque habitant morbi tristique
					senectus. Purus non enim praesent elementum facilisis.
					Laoreet id donec ultrices tincidunt arcu non sodales neque
					sodales. Sed odio morbi quis commodo odio aenean.
				</p>
				{system.image && <figure className="image">
					<img src={"../" + system.image || `../src/IMAGES/pexels-${system.toLowerCase()}.png`} alt={system.type || system} />
					<figcaption>Lorem ipsum dolor sit amet.</figcaption>
				</figure>}
				<p className="fourth-paragraph">
					Lobortis elementum nibh tellus molestie nunc. A condimentum
					vitae sapien pellentesque habitant morbi tristique senectus.
					Odio euismod lacinia at quis risus sed vulputate odio. Id
					aliquet risus feugiat in ante metus. Nunc non blandit massa
					enim nec dui nunc mattis. Vitae tortor condimentum lacinia
					quis vel eros donec. Tincidunt eget nullam non nisi est.
					Urna neque viverra justo nec ultrices dui sapien. Quis
					blandit turpis cursus in hac habitasse platea. Morbi non
					arcu risus quis. Et odio pellentesque diam volutpat commodo
					sed egestas. Malesuada bibendum arcu vitae elementum.
				</p>
			</article>
		</main>
	);
}

export default System;