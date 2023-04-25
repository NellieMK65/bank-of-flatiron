import { Container, Heading, VStack } from '@chakra-ui/react';
import { TransactionList } from './components/TransactionList';

function App() {
	return (
		<Container>
			<VStack>
				<Heading as="h3">Bank Of Flatiron</Heading>
				<div>Form</div>
				<TransactionList />
			</VStack>
		</Container>
	);
}

export default App;
