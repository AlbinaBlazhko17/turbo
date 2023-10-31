import style from '../customForm.module.scss';

function AddressForm () {
	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<label htmlFor="address" className={style.form__label}>Address (City, Street, Blok)</label>
			<input id="address" type="text" className={style.form__input} />
			<label htmlFor='country' className={style.form__label}>Country</label>
			<datalist id='country'>
				<option value='USA' />
				<option value='Canada' />
				<option value='Mexico' />
			</datalist>
			<label htmlFor="zipCode">Postal Code</label>
			<input id="zipCode" type="number" className={style.form__input} />
		</form>
	)
}

export default AddressForm;