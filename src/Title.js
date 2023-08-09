const Title = function(props) {
  const { text } = props; // desestructuramiento
  // const text = props.text;
  return (
    <h1>{text}</h1>
  );
};

export default Title;