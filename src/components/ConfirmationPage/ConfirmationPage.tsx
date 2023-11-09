import ConfirmIcon from '@assets/icons/confirm-icon.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeItemFromForm } from '@/store/actions';

import style from './confirmationPage.module.scss';

function ConfirmationPage() {
	const navigator = useNavigate();
	const formDisatcher = useDispatch();

	function handleGoToHomePage() {
		navigator('/');
		localStorage.setItem('step', '1');
		formDisatcher(removeItemFromForm);
	}
	return (
		<div className={style.confirmation}>
			<div className={style.confirmation__img}>
				<img src={ConfirmIcon} alt="tick" />
			</div>
			<h3 className={style.confirmation__text}>All forms completed successfuly!</h3>
			<Button appearance='filled' className={style.confirmation__button} onClick={handleGoToHomePage}>Go to home page</Button>
		</div>
	)
}

export default ConfirmationPage;