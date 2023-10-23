import ChatBlue from '@assets/icons/chat_blue.svg';
import PersonPhoto from '@assets/img/person.png';

import './header.scss';

function Header () {
	return (
		<header className="header">
			<div className="header__img">
				<img src={ChatBlue} alt="chat"/>
			</div>
			<div className="header__img">
				<img src={PersonPhoto} alt="user"/>
			</div>
		</header>
	)
}

export default Header;