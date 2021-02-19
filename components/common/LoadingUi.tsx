import React from 'react';
import {Row, Spinner} from 'react-bootstrap';

export default function LoadingUi() {
	return (
		<Row className='align-items-center justify-content-center mt-4'>
			<Spinner animation='border'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</Row>
	);
}
