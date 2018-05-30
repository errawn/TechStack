import React from 'react'
import { Header, Title, Left, Body, Right } from 'native-base'

const HeaderComponent = ({ title }) => {
	return (
		<Header>
			<Left/>
			<Body>
				<Title>{title}</Title>
			</Body>
			<Right />
		</Header>
	)
}

export { HeaderComponent }