import { Nav } from '../Nav/Nav'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1>My Vite Template</h1>
			<Nav />
		</header>
	)
}