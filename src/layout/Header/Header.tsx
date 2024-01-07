import { AuthContext } from '@/auth/auth';
import ChatBlue from '@assets/icons/chat_blue.svg';
import Moon from '@assets/icons/moon.svg';
import Sun from '@assets/icons/sun.svg';
import TeamIcon from '@assets/icons/team.svg';
import PersonPhoto from '@assets/img/person.png';
import cn from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../theme/theme';

import style from './header.module.scss';

function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<header className={cn(style.header, style[`${theme}`])}>
			<div className={style.header__wrapper}>
				<ReactSwitch
					onChange={toggleTheme}
					checked={theme === 'light'}
					offColor="#5d7285"
					onColor="#cacbcc"
					onHandleColor="#2196f3"
					offHandleColor="#2196f3"
					uncheckedIcon={false}
					checkedIcon={false}
					uncheckedHandleIcon={
						<img
							src={Moon}
							alt="moon"
							style={{
								width: '30px',
								height: '30px',
								transform: 'rotate(40deg)',
							}}
						/>
					}
					checkedHandleIcon={
						<img
							src={Sun}
							alt="sun"
							style={{
								width: '30px',
								height: '30px',
								transform: 'rotate(40deg)',
							}}
						/>
					}
					width={62}
					height={32}
					handleDiameter={30}
				/>
				<Link to="/profile" className={style.header__img}>
					<img src={isAuthenticated ? PersonPhoto : TeamIcon} alt="user" />
				</Link>
			</div>
		</header>
	);
}

export default Header;
