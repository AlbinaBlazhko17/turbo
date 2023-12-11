import bg from '@assets/img/BG.png';

import style from './UserProfile.module.scss';

function UserProfile() {
	return (
		<div className={style.wrapper}>
			<h1>UserProfile</h1>
			<section>
				<div>
					<img src={bg} alt="bg" />
				</div>
			</section>
		</div>
	);
}

export default UserProfile;
