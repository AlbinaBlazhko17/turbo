import './header.scss';

function Header () {
	return (
		<header className="header">
			<div className="header__img">
				<img src="./assets/icons/chat_blue.svg" alt="chat"/>
			</div>
			<div className="header__img">
				<img src="./assets/img/person.png" alt="user"/>
			</div>
		</header>
	)
}

export default Header;