import { useState } from "react";
import { Link } from "react-router-dom";
import systems from "./systemData.json"; 
import System from "../PAGES/System";

function Navbar() {
    let [systemList, setSystemList] = useState(systems);
    
    return (
		<nav>
			<ul>
				<li className="logo">
					<Link to={"/"}>
						<img
							className="gamer-logo"
							src="src/IMAGES/Gamer-logo-white.png"
							alt="Gamer"
						/>
					</Link>
				</li>
				<ul id="searchAndDynamic">
					<li>
						<input
							className="search-box"
							type="search"
							placeholder="Search blogs"
						/>
					</li>
					<li>
						<button className="search-button">
							<img
								className="search-icon"
								src="src/IMAGES/search-icon-white.png"
								alt="search icon"
							/>
						</button>
					</li>
					<ul id="navigationList">
						{systemList.map((system) => (
                            <li key={system.id}>
                                <Link to={"systems/" + system}>
									{system.type}
								</Link>
                            </li>
						))}
					</ul>
				</ul>
			</ul>
		</nav>
	);
}

export default Navbar;