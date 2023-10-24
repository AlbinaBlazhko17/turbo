import './experts.scss';

function Experts ({ data }) {

	return (
		<section className="experts">
			<h2 className="experts__header">Our experts</h2>
			<div className="experts__wrapper">
				{
					data.length !== 0 && 
					data.map(expert => (
						<article key={expert.id} className="experts__item">
							<div><img src={expert.img} alt={expert.name}/></div>
							<div className="experts__item-descr">
								<h3 className="experts__item-name">{expert.name}</h3>
								<h4 className="experts__item-pos">{expert.pos}</h4>
								<p className="experts__item-exp">{expert.exp}</p>
							</div>
						</article>
					))
				}
			</div>
		</section>
	)
}

export default Experts;