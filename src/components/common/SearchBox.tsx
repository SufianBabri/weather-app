import React from 'react';
import PropTypes from 'prop-types';
import {FormControl} from "react-bootstrap/cjs";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/cjs/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
	width?: number,
	placeholder?: string;
	searchQuery: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
}

SearchBox.propTypes = {
	width: PropTypes.number,
	placeholder: PropTypes.string,
	searchQuery: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export function SearchBox({width, searchQuery, onChange, onSubmit, ...rest}: Props) {
	function onkeyup(event: any) {
		if (event.key === 'Enter') {
			onSubmit();
		}
	}

	return (
		<InputGroup className={`w-${width}`}>
			<FormControl as="input"
						 {...rest}
						 value={searchQuery}
						 onKeyPress={onkeyup}
						 onChange={(e) => onChange(e.currentTarget.value)}/>
			<InputGroup.Append>
				<Button variant="light ml-1" onClick={() => onSubmit()}>
					<FontAwesomeIcon
						icon="search"/>
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
}