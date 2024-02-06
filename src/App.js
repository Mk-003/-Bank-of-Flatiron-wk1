import React,{useState,useEffect}from 'react';
import TransactionTable from './components/TransactionalTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionalForm';


function App() {
const [transactions,setTransactions] = useState([])
const [searchTerm,setSearchTerm]=useState('')

useEffect(() => {
  // Fetch initial data from your API endpoint
  fetch('http://localhost:3000/transactions') // Update the endpoint
    .then((res) => res.json())
    .then((data) => {
      setTransactions(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []); 

const addTransaction = (newTransaction) => {
  setTransactions([...transactions, newTransaction]);
};
  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
      <TransactionTable transactions={transactions} searchTerm={searchTerm}/>
      <TransactionForm addTransaction={addTransaction}/>
    </div>
  );
}

export default App;