import { useSelector } from 'react-redux';
import { RootState } from '@/customTypes/store.types';
import bg from '@assets/img/BG.png';
import ProfileIcon from '@assets/img/person.png';

import style from './UserProfile.module.scss';

function UserProfile() {
	const user = useSelector((state: RootState) => state.user);
	return (
		<div className={style.profile}>
			<h1 className={style.profile__header}>User Profile</h1>
			<section className={style.profile__wrapper}>
				<div className={style.profile__bg}>
					<img src={bg} alt="bg" />
				</div>
				<div className={style.profile__info}>
					<div className={style.profile__img}>
						<img src={ProfileIcon} alt="profile" />
					</div>
					<div className={style.profile__info__wrapper}>
						<div className={style['profile__info-item']}>
							<h2>Username: </h2>
							<p className={style.profile__name}>{user.username}</p>
						</div>
						<div className={style['profile__info-item']}>
							<h2>Email: </h2>
							<p className={style.profile__email}>{user.email}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default UserProfile;
