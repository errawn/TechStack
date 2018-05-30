import React from 'react'
import { Container, Content } from 'native-base'

import { HeaderComponent } from './components/common'

const App = () => {
	return (
		<Container>
			<Content>
				<HeaderComponent title="Tech Stack" />
			</Content>
		</Container>
	)
}

export default App