import { useEffect, useState } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { TransactionList } from './components/TransactionList';

function App() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/transactions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((transactions) => setTransactions(transactions))
			.catch((err) => console.log(err));
	}, []);

	return (
		<VStack>
			<Heading as="h3">Bank Of Flatiron</Heading>
			<div>Form</div>
			<TransactionList transactions={transactions} />
		</VStack>
	);
}

export default App;
