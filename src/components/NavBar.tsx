import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="nav">
			<ul className="nav__ul">
				<li className="nav__li">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`nav__link ${isActive ? "nav__link--active" : ""}`
						}
					>
						Calendario
					</NavLink>
				</li>
				<li className="nav__li">
					<NavLink
						to="/my-dates"
						className={({ isActive }) =>
							`nav__link ${isActive ? "nav__link--active" : ""}`
						}
					>
						My dates
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
