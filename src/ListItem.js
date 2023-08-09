const ListItem = props => {
  let style = {};
  if (props.done) {
    style.textDecoration = 'line-through';
  }

//   let style = props.done ? { textDecoration: 'line-through' } : {}; 

  return (
    <li>
        <input checked={props.done} type="checkbox" />
        <label style={style}>{props.text}</label>
    </li>
  );  
};

export default ListItem;