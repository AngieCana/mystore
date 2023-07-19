import { useState } from "react";
import Product from "./product";

//state is a built in feature in react that allows components to store and manage data that can change over time
//enables components to handle user interaction and updates the UI automatically 

function Store(){

//add a productList and a function to add products using state.
  
const [productList, setProductList] = useState([
    {name:"Gucci", price: 10, id: 1},
    {name:"Prada", price: 20, id: 2},
    {name:"Nike", price: 5, id: 3},
    {name:"Adidas", price: 10, id: 4},
  ]);

  //function to add new products by using the Add  Product Button
  // const addProduct = (newProduct) => {
  //   setProductList([...productList, newProduct]);
  // }
  //add products to product list  using handleInputChange, and handleAddProduct 

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: ""

  });

  //handleChange;

  const handleInputChange = (event) =>{
    setNewProduct({
      ...newProduct, [event.target.name]: event.target.value
    })
  };

    //handleAddProduct
    const handleAddProduct = () => {
      if(newProduct.name && newProduct.price){
        setProductList([...productList, {...newProduct}]);
        setNewProduct({name:"", price: ""});
      }
  };

  return (
    <div>
      <h1>My Store</h1>
      {/* <button onClick={() => 
        addProduct({name:"New Product", price: 0})
      }>
        Add New Product
      </button> */}

      <input type="text" 
      name="name"
      placeholder="Product name"
      value={newProduct.name}
      onChange={handleInputChange}
      />
      <input type="number"
      name="price"
      placeholder="Product price"
      value={newProduct.price}
      onChange={handleInputChange}
      />
      <button onClick={handleAddProduct}>Add New Product</button>

      {productList.map((product)=> (
        <Product
        name={product.name}
        price={product.price}
        id={product.id}
        />
      ))}
    </div>
  )
};

export default Store;