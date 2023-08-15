import { useState } from 'react';

const Form = props => {

  const setTareas = props.setTareas;
  const tareas = props.tareas;

  const [texto, setTexto] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(texto);
    setTareas([{ id: 4, text: texto, done: false}, ...tareas]);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    setTexto('');

  };
  const handleChange = event => {
    setTexto(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={texto} name="tarea" type="text" />
        <input type="submit" value="+" />
    </form>
  );
};

export default Form;