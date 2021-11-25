import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form>
      <label htmlFor='newitem'>Add to the todo list</label>
      <input type='text' name='newitem' id='newitem' />
      <button type='submit'>Add item</button>
    </form>
  );
};

export default Form;
