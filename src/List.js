import ListItem from "./ListItem";



const List = props => {

  
  const { tareas } = props;
 

  return (
      <ul>
      {tareas.map(item => 
        <ListItem 
          key={item.id} 
          text={item.text} 
          done={item.done}
        />
      )}  
    </ul>    
  );
};

export default List;