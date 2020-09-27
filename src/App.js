import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import CategorySection from './components/CategorySection/CategorySection';
import AccountSection from './components/AccountSection/AccountSection';
import ExpensesSection from './components/ExpensesSection/ExpensesSection';

const App = () => {

  return (
    <section className='App'>
      <NavBar />
      <section>
         <CategorySection />
      </section>
      <section>
        <AccountSection />
        <ExpensesSection />
      </section>
    </section>
  );
}

export default App;
