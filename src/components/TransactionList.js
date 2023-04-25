import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React from 'react';

export const TransactionList = () => {
	return (
		<TableContainer>
			<Table variant={'simple'} size={'sm'}>
				<Thead>
					<Tr>
						<Th>Id</Th>
						<Th>Date</Th>
						<Th>Description</Th>
						<Th>Category</Th>
						<Th>Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>1</Td>
						<Td>2019-12-01</Td>
						<Td>Paycheck from Bob's Burgers</Td>
						<Td>Income</Td>
						<Td>1000</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};
