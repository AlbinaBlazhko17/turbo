import ExpertCard from '../ExpertCard/ExpertCard';
import './experts.scss';

function Experts ({ data }) {

	return (
		<section className="experts">
			<h2 className="experts__header">Our experts</h2>
			<div className="experts__wrapper">
				{
					data.length !== 0 && 
					data.map(expert => (
						<ExpertCard expert={expert} key={expert.id} />
					))
				}
			</div>
		</section>
	)
}

export default Experts;