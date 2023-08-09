import ListItem from "./ListItem";
import data from './data';
const List = () => {



  return (
    <ul>
      {data.map(item => (
        <ListItem 
          key={item.id} 
          text={item.text} 
          done={item.done}
        />
      ))}  
    </ul>
  );
};

export default List;