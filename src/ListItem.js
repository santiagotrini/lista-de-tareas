import { useState } from 'react';

const ListItem = props => {
  

  const [done, setDone] = useState(props.done); // hook de estado
  // const done = array[0];
  // const setDone = array[1];
 

  let style = {};
  if (done) {
    style.textDecoration = 'line-through';
  }



//   let style = props.done ? { textDecoration: 'line-through' } : {}; 

  const handleChange = event => {
    // console.log(event.target.checked);
    setDone(done => !done);
  };


  return (
    <li>
        <input  
          checked={done}
          onChange={handleChange} 
          type="checkbox" 
        />
        <label style={style}>{props.text}</label>
        {done && <button>X</button>}
    </li>
  );  
};

export default ListItem;





