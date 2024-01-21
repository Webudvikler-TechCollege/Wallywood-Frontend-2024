import { NavLink } from "react-router-dom"
import styles from './Nav.module.scss'

export const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
			</ul>
		</nav>
	)
}