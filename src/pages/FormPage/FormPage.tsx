import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';

import style from './formPage.module.scss';

function FormPage () {
	return(
		<main>
			<div>
				<h2>Form page</h2>
				<Steps />
				<CustomForm />
			</div>
		</main>
	)
}

export default FormPage;