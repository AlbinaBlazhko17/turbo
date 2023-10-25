import { Link } from 'react-router-dom';
import ChatBlue from '@assets/icons/chat_blue.svg';
import PersonPhoto from '@assets/img/person.png';

import style from './header.module.scss';

function Header () {
	return (
		<header className={style.header}>
			<Link to='/' className={style.header__img}>
				<img src={ChatBlue} alt="chat"/>
			</Link>
			<Link to='/' className={style.header__img}>
				<img src={PersonPhoto} alt="user"/>
			</Link>
		</header>
	)
}

export default Header;