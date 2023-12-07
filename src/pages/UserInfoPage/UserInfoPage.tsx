import { PersonalAccount } from '@/components';
import ArrowIcon from '@assets/icons/sort-arrow.svg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import style from './userInfoPage.module.scss';

function UserInfoPage() {
	const navigate = useNavigate();

	function handleClickGoBack() {
		navigate(-1);
	}

	return (
		<>
			<h1 className={style.header}>User Info Page</h1>
			<section className={style.contentWrapper}>
				<Link to="/users" onClick={handleClickGoBack} className={style.button}>
					<span className={style.button__arrow}>
						<img src={ArrowIcon} alt="Go back" />
					</span>
					Go back
				</Link>
				<PersonalAccount />
			</section>
		</>
	);
}

export default UserInfoPage;
