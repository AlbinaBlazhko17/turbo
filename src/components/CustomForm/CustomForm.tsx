import style from './customForm.module.scss';

function CustomForm () {
	const currentStep = localStorage.getItem('step') || 1;

	return (
		<form className={style.form}>
			{
			}
		</form>
	)
}

export default CustomForm;