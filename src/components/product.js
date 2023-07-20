//name
//price
//description

function Product(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Product