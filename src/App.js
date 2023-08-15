import Title from './Title';
import Form  from './Form';
import List  from './List';
// import data from './data';
import { useState, useEffect } from 'react';

const App = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(JSON.parse(localStorage.getItem('tareas')));
  }, []);


  return (
    <div className="App">
      <Title text="Cosas por hacer" />
      <Form tareas={tareas} setTareas={setTareas} />
      <List tareas={tareas} />
    </div>
  );
}

export default App;
