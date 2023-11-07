import ConfirmIcon from '@assets/icons/confirm-icon.svg';
import Button from '../Button/Button';

import style from './confirmationPage.module.scss';

function ConfirmationPage() {
	return (
		<div className={style.confirmation}>
			<div className={style.confirmation__img}>
				<img src={ConfirmIcon} alt="tick" />
			</div>
			<h3 className={style.confirmation__text}>All forms completed successfuly!</h3>
			<Button appearance='filled' className={style.confirmation__button}>Go to home page</Button>
		</div>
	)
}

export default ConfirmationPage;