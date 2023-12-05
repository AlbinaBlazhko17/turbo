import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import Header from '@/layout/Header/Header';
import NavBar from '@/layout/NavBar/NavBar';

import styleLayout from '../../layout/Layout/layout.module.scss';
import style from './errorPage.module.scss';

function ErrorPage() {
	const navigator = useNavigate();

	function handleGoBack() {
		navigator(-1);
	}

	return (
		<div>
			<Header />
			<div className={styleLayout.mainWrapper}>
				<NavBar />
				<main>
					<section className={style.error}>
						<h1>Error!</h1>
						<h2>Something went wrong!</h2>
						<Button appearance="filled" onClick={handleGoBack}>
							Go back
						</Button>
					</section>
				</main>
			</div>
		</div>
	);
}

export default ErrorPage;
