import Loop from '@assets/icons/loop.svg';
import Team from '@assets/icons/team.svg';
import Support from '@assets/icons/support.svg';

import './services.scss';

function Services() {
	return (
		<section className="services">
			<h2 className="services__header">Services</h2>
			<div className="services__wrapper">
				<article className="services-item">
					<div className="services-item__img"><img src={Loop} alt="loop"/></div>
					<div>
						<h3 className="services-item__header">Frist working process</h3>
						<p className="services-item__text">Customer satisfaction is such a key part of
							many successful businesses.</p>
					</div>
				</article>
				<article className="services-item">
					<div className="services-item__img"><img src={Team} alt="team"/></div>
					<div>
						<h3 className="services-item__header">Dedicated Team</h3>
						<p className="services-item__text">Business model that refers to an
							agreement between the client and
							service provider,</p>
					</div>
				</article>
				<article className="services-item">
					<div className="services-item__img"><img src={Support} alt="support"/></div>
					<div>
						<h3 className="services-item__header">24 / 7 Support</h3>
						<p className="services-item__text">Scaling your team to provide assistance
							around the clock might sound like a</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Services;