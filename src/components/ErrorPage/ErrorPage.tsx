import { useNavigate } from "react-router";
import Button from "../Button/Button";

function ErrorPage() {
	const navigator = useNavigate();

	function handleGoBack() {
		navigator(-1);
	}

	return (
		<div>
			<h1>Error!</h1>
			<h2>Something went wrong!</h2>
			<Button appearance='filled' onClick={handleGoBack}>Go back</Button>
		</div>
	)
}

export default ErrorPage;