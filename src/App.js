import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import CategorySection from './components/CategorySection/CategorySection';
import AccountSection from './components/AccountSection/AccountSection';
import ExpensesSection from './components/ExpensesSection/ExpensesSection';

const App = () => {
  const [expense, setExpense] = React.useState([
    { expenseID: 1, expense: 49.90, locationName: 'Whole Foods', date: '2020-15-03', accountId: '', categoryId: ''}
  ]);
  const [account, setAccount] = React.useState([
     { accountID: 20, accountTitle: 'groceries', color: '', type: 'bank account' }
  ]);
  const [category, setCategory] = React.useState([
     { categoryID: 15, categoryTitle: 'groceries', color: '' }
  ]);
  const colorTypes = [
    {type: 'bank account', color: ''},
    {type: 'card', color: ''},
    {type: 'credit', color: ''}
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
      </section>
      <section>
        <AccountSection accounts={account} addAccount={addAccount}/>
        <ExpensesSection expenses={expense} addExpense={addExpense} />
      </section>
    </section>
  );
}

export default App;
