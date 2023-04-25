import { useEffect, useState } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

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

	const handleAddTransaction = (newTransaction) => {
		setTransactions([
			...transactions,
			{
				id: transactions.length + 1,
				...newTransaction,
				date: new Date(newTransaction.date).toDateString(),
			},
		]);
	};

	return (
		<VStack spacing={3}>
			<Heading as="h3">Bank Of Flatiron</Heading>
			<AddTransaction handleAddTransaction={handleAddTransaction} />
			<TransactionList transactions={transactions} />
		</VStack>
	);
}

export default App;
