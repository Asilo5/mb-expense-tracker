import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import CategorySection from './components/CategorySection/CategorySection';
import AccountSection from './components/AccountSection/AccountSection';
import ExpensesSection from './components/ExpensesSection/ExpensesSection';

const App = () => {
  const [expense, setExpense] = React.useState([
    { expenseID: 1, expense: 49.90, locationName: 'Whole Foods', date: '2020-15-03', accountId: '20', categoryId: '15'}
  ]);
  const [account, setAccount] = React.useState([
     { accountID: 20, accountTitle: 'London Trip', color: '#9381FF', type: 'bank account' }
  ]);
  const [category, setCategory] = React.useState([
     { categoryID: 15, categoryTitle: 'groceries', color: '#FFD8BE' }
  ]);
  const colorTypes = [
    {type: 'bank account', color: '#9DC4B5'},
    {type: 'card', color: '#9DC4B5'},
    {type: 'credit', color: '#FAC9B8'}
  ];

  const addExpense = (expense) => {
    setExpense(expense);
  }

  const addAccount = (account) => {
    setAccount(account);
  }

  const addCategory = (category) => {
    setCategory(category);
  }

  return (
    <section className='App'>
      <NavBar />
      <section>
         <CategorySection categories={category} addCategory={addCategory} />
         <ExpensesSection expenses={expense} addExpense={addExpense} />
      </section>
      <section>
        <AccountSection accounts={account} addAccount={addAccount}/>
      </section>
    </section>
  );
}

export default App;
