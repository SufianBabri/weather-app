import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
	path: string;
	pathname: string;
	label: string;
}

export default function NavLink(props: Props) {

	let className = classNames({
		'nav-link': true,
		'is-active': props.pathname
	});
	return <Link href={props.path}><a className={className}>{props.label}</a></Link>;

}