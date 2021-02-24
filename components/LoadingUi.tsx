import Row from 'react-bootstrap/cjs/Row';
import Spinner from 'react-bootstrap/cjs/Spinner';

export default function LoadingUi() {
	return (
		<Row className='align-items-center justify-content-center mt-4'>
			<Spinner animation='border'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</Row>
	);
}
