import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar( {systems} ) {
    let [systemList, setSystemList] = useState(systems);
    
    return (
		<nav>
			<ul>
				<li className="logo">
					<Link to={"/"}>
						<img
							className="gamer-logo"
							src="/src/IMAGES/Gamer-logo-white.png"
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
								src="/src/IMAGES/search-icon-white.png"
								alt="search icon"
							/>
						</button>
					</li>
					<ul id="navigationList">
						{systemList && systemList.map((system) => (
                            <li key={system.id}>
                                <Link to={"systems/" + system.type} state={{system: system}}>
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