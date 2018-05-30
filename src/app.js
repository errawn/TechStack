import React from 'react'
import { Container, Content } from 'native-base'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import { HeaderComponent } from './components/common'

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<Container>
				<Content>
					<HeaderComponent title="Tech Stack" />
				</Content>
			</Container>
		</Provider>
	)
}

export default App