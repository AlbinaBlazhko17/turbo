import './dashboard.scss';

function Dashboard () {
	return (
		<main>
			<h1>Dashboard</h1>
		<section className="stats">
			<h2>Statistics</h2>
			<figure className="stats__diagram">
				<img src="./assets/img/graph.png" alt="diagram"/>
			</figure>
		</section>
		<aside className="aside">
			<h2>Top news</h2>
			<div className="aside__wrapper">
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p  className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p  className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
				<article className="aside-item">
					<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
					<div>
						<h3 className="aside-item__header">Financial updates</h3>
						<p  className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
					</div>
				</article>
			</div>
		</aside>
		<div className="subgrid">
			<aside className="aside aside-latest">
				<h2>Latest topics</h2>
				<div className="aside__wrapper">
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
					<article className="aside-item">
						<div><img src="./assets/img/aside_image.jpeg" alt="aside_image"/></div>
						<div>
							<h3 className="aside-item__header">Will AI substitute real...</h3>
							<p className="aside-item__text">It is a long established fact that a reader will be distracted by...</p>
						</div>
					</article>
				</div>
			</aside>
				<section className="experts">
					<h2 className="experts__header">Our experts</h2>
					<div className="experts__wrapper">
						<article className="experts__item">
							<div><img src="./assets/img/nina.png" alt="nina"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Nina Smith</h3>
								<h4 className="experts__item-pos">CEO & Co-founder</h4>
								<p className="experts__item-exp">10 years of experience</p>
							</div>
						</article>
						<article className="experts__item">
							<div><img src="./assets/img/ben.png" alt="ben"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Ben Lee</h3>
								<h4 className="experts__item-pos">CTO</h4>
								<p className="experts__item-exp">8 years of experience</p>
							</div>
						</article>
						<article className="experts__item">
							<div><img src="./assets/img/lina.png" alt="lina"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Lina Wind</h3>
								<h4 className="experts__item-pos">Lead developer</h4>
								<p className="experts__item-exp">9 years of experience</p>
							</div>
						</article>
						<article className="experts__item">
							<div><img src="./assets/img/carol.png" alt="carol"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Carol Black</h3>
								<h4 className="experts__item-pos">COO & Co-founder</h4>
								<p className="experts__item-exp">15 years of experience</p>
							</div>
						</article>
						<article className="experts__item">
							<div><img src="./assets/img/nick.png" alt="nick"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Nick Smith</h3>
								<h4 className="experts__item-pos">CFO</h4>
								<p  className="experts__item-exp">14 years of experience</p>
							</div>
						</article>
						<article className="experts__item">
							<div><img src="./assets/img/ken.png" alt="ken"/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">Ken Nolan</h3>
								<h4 className="experts__item-pos">HR & PP</h4>
								<p className="experts__item-exp">8 years of experience</p>
							</div>
						</article>
					</div>
				</section>
				<section className="services">
					<h2 className="services__header">Services</h2>
					<div className="services__wrapper">
						<article className="services-item">
							<div className="services-item__img"><img src="./assets/icons/loop.svg" alt="loop"/></div>
							<div>
								<h3 className="services-item__header">Frist working process</h3>
								<p className="services-item__text">Customer satisfaction is such a key part of
									many successful businesses.</p>
							</div>
						</article>
						<article className="services-item">
							<div className="services-item__img"><img src="./assets/icons/team.svg" alt="team"/></div>
							<div>
								<h3 className="services-item__header">Dedicated Team</h3>
								<p className="services-item__text">Business model that refers to an
									agreement between the client and
									service provider,</p>
							</div>
						</article>
						<article className="services-item">
							<div className="services-item__img"><img src="./assets/icons/support.svg" alt="support"/></div>
							<div>
								<h3 className="services-item__header">24 / 7 Support</h3>
								<p className="services-item__text">Scaling your team to provide assistance
									around the clock might sound like a</p>
							</div>
						</article>
					</div>
				</section>
			</div>
		<section className="marquee">
			<div className="marquee__wrapper">
				<div className="marquee__content">
					<h3 className="marquee-item">Turbo platform</h3>
					<h3 className="marquee-item">Best experts</h3>
					<h3 className="marquee-item">High-level services</h3>
					<h3 className="marquee-item">Modern tools</h3>
					<h3 className="marquee-item">Support & cooperation</h3>
					<h3 className="marquee-item">Professional Team</h3>
				</div>

				<div className="marquee__content">
					<h3 className="marquee-item">Turbo platform</h3>
					<h3 className="marquee-item">Best experts</h3>
					<h3 className="marquee-item">High-level services</h3>
					<h3 className="marquee-item">Modern tools</h3>
					<h3 className="marquee-item">Support & cooperation</h3>
					<h3 className="marquee-item">Professional Team</h3>
				</div>
			</div>
		</section>
		<section className="slider">
			<h2>Client’s kind Words</h2>
			<h3 className="slider__subheader">Business owners and managers lead by example. The values</h3>
			<div className="slider__carousel">
				<div className="slider__carousel__wrapper">
					<div className="slider__carousel-slide swiper-slide">
						<div className="slider__carousel-slide__img"><img src="./assets/icons/first_feedbaack.svg" alt="first_feedback"/></div>
						<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
						<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
						<div className="slider__carousel-slide__stars"><img src="./assets/img/stars.png" alt="stars"/></div>
						<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
							sit aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit. Amet
							minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.</p>
					</div>

					<div className="slider__carousel-slide swiper-slide">
						<div className="slider__carousel-slide__img"><img src="./assets/icons/second__feedback.svg" alt="first_feedback"/></div>
						<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
						<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
						<div className="slider__carousel-slide__stars"><img src="./assets/img/stars.png" alt="stars"/></div>
						<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
							sit aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit. Amet
							minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.</p>
					</div>

					<div className="slider__carousel-slide  swiper-slide">
						<div className="slider__carousel-slide__img"><img src="./assets/icons/third__feedback.svg" alt="first_feedback"/></div>
						<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
						<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
						<div className="slider__carousel-slide__stars"><img src="./assets/img/stars.png" alt="stars"/></div>
						<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
							sit aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit. Amet
							minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.</p>
					</div>

					<div className="slider__carousel-slide  swiper-slide">
						<div className="slider__carousel-slide__img"><img src="./assets/icons/first_feedbaack.svg" alt="first_feedback"/></div>
						<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
						<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
						<div className="slider__carousel-slide__stars"><img src="./assets/img/stars.png" alt="stars"/></div>
						<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
							sit aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit. Amet
							minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.</p>
					</div>

					<div className="slider__carousel-slide  swiper-slide">
						<div className="slider__carousel-slide__img"><img src="./assets/icons/first_feedbaack.svg" alt="first_feedback"/></div>
						<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
						<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
						<div className="slider__carousel-slide__stars"><img src="./assets/img/stars.png" alt="stars"/></div>
						<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
							sit aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit. Amet
							minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.</p>
					</div>
				</div>
			</div>
			<div className="slider__carousel-pagination"></div>
		</section>
	</main>
	)
}

export default Dashboard;