import { Button, PersonalAccount } from '@/components';
import ArrowIcon from '@assets/icons/sort-arrow_white.svg';
import { useNavigate } from 'react-router';

import style from './userInfoPage.module.scss';

function UserInfoPage() {
	const navigate = useNavigate();

	function handleClickGoBack() {
		navigate(-1);
	}

	return (
		<>
			<h1>User Info Page</h1>
			<section>
				<Button appearance="filled" onClick={handleClickGoBack} className={style.button}>
					<span className={style.button__arrow}>
						<img src={ArrowIcon} alt="Go back" />
					</span>
					Go back
				</Button>
				<PersonalAccount />
			</section>
		</>
	);
}

export default UserInfoPage;
