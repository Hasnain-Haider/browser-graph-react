import './Node.css';

function Node(props) {
  return (
    <div 
    className="node"
     row={props.row} 
     col={props.col} 
     id={`${props.row},${props.col}`}/>
  );
}

export default Node;