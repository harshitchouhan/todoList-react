import React from 'react';
import './App.css';
import Form from './components/form/Form';

const App = () => {
  return (
    <main id='todolist'>
      <h1>
        Todo List
        <span>Today i need To :</span>
      </h1>

      {/* Message for empty list */}
      <p className='emptylist'>Your todo list is empty.</p>

      {/* Adding new todo task form */}
      <Form></Form>
    </main>
  );
};

export default App;
