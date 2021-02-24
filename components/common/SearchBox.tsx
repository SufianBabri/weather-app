import React from 'react';
import FormControl from 'react-bootstrap/cjs/FormControl';
import InputGroup from 'react-bootstrap/cjs/InputGroup';
import Button from 'react-bootstrap/cjs/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface Props {
	placeholder?: string;
	searchQuery: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
}

export function SearchBox({
							  placeholder,
							  searchQuery,
							  onChange,
							  onSubmit
						  }: Props) {

	const onKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') onSubmit();
	};

	return (
		<InputGroup className={`w-auto`}>
			<FormControl
				placeholder={placeholder}
				value={searchQuery}
				onKeyPress={onKeyPress}
				onChange={(e) => onChange(e.currentTarget.value)}
			/>
			<InputGroup.Append>
				<Button variant="light ml-1" onClick={() => onSubmit()}>
					<FontAwesomeIcon icon="search" />
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
}
