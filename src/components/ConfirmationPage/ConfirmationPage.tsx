import { removeItemFromForm } from '@/store/actions';
import ConfirmIcon from '@assets/icons/confirm-icon.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { RootState } from '@/store/types';

import style from './confirmationPage.module.scss';

function ConfirmationPage() {
	const values = useSelector((state: RootState) => state.form)
	const navigator = useNavigate();
	const formDisatcher = useDispatch();

	useEffect(() => {
		console.log(values);
	})

	function handleGoToHomePage() {
		navigator('/');
		localStorage.setItem('step', '1');
		formDisatcher(removeItemFromForm());
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