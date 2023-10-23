import Nina from '@assets/img/nina.png';
import Ben from '@assets/img/ben.png';
import Lina from '@assets/img/lina.png';
import Carol from '@assets/img/carol.png';
import Nick from '@assets/img/nick.png';
import Ken from '@assets/img/Ken.png';

import './experts.scss';

function Experts () {
	return (
		<section className="experts">
			<h2 className="experts__header">Our experts</h2>
			<div className="experts__wrapper">
				<article className="experts__item">
					<div><img src={Nina} alt="nina"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Nina Smith</h3>
						<h4 className="experts__item-pos">CEO & Co-founder</h4>
						<p className="experts__item-exp">10 years of experience</p>
					</div>
				</article>
				<article className="experts__item">
					<div><img src={Ben} alt="ben"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Ben Lee</h3>
						<h4 className="experts__item-pos">CTO</h4>
						<p className="experts__item-exp">8 years of experience</p>
					</div>
				</article>
				<article className="experts__item">
					<div><img src={Lina} alt="lina"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Lina Wind</h3>
						<h4 className="experts__item-pos">Lead developer</h4>
						<p className="experts__item-exp">9 years of experience</p>
					</div>
				</article>
				<article className="experts__item">
					<div><img src={Carol} alt="carol"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Carol Black</h3>
						<h4 className="experts__item-pos">COO & Co-founder</h4>
						<p className="experts__item-exp">15 years of experience</p>
					</div>
				</article>
				<article className="experts__item">
					<div><img src={Nick} alt="nick"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Nick Smith</h3>
						<h4 className="experts__item-pos">CFO</h4>
						<p  className="experts__item-exp">14 years of experience</p>
					</div>
				</article>
				<article className="experts__item">
					<div><img src={Ken} alt="ken"/></div>
					<div className="experts__item-descr">
						<h3 className="experts__item-name">Ken Nolan</h3>
						<h4 className="experts__item-pos">HR & PP</h4>
						<p className="experts__item-exp">8 years of experience</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Experts;