import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { PageNotFound } from '../../Pages/PageNotFound/PageNotFound';
import { Posters } from '../../Pages/Posters/Posters';
import { PosterList } from '../Posters/PosterList'
import { PosterDetails } from '../Posters/PosterDetails'
import { Contact } from '../../Pages/Contact/Contact';
import { Cart } from '../../Pages/Cart/Cart';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />

			<Route path="/posters" element={<Posters />}>
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}