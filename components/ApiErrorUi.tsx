import Row from 'react-bootstrap/cjs/Row';

interface Props {
	errorMessage: string;
}

export default function ApiErrorUi({errorMessage}: Props) {
	return (
		<Row className="mt-3 justify-content-center text-danger font-weight-bold">Request
			failed: {errorMessage}</Row>
	);
}
