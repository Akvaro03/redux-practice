import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './features/products/productSlice';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  
  const [product, SetProduct] = useState({
    tittle: "",
    price: 0
  })
  const handleChance = ({target: {name, value}}) => {
    SetProduct({
      ...product,
      [name]: value
    });

  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct({
      ...product,
      id: uuid()
    }));
  }

  const handleDelete = e => {
    dispatch(removeProduct(e));
    console.log(products)
  }

  return (
    <div className="bg-zinc-900 h-100 text-white">
      <div className="flex flex-col items-center justify-center h-full" >
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2 h-1/4">
        <input type="text" name='tittle' className="tittle text-black rounded-lg my-4 py-2 px-2 text-sm" placeholder="tittle" onChange={handleChance}/>
        <input type="number" name='price' className="price text-black rounded-lg my-2 py-2 px-2 text-sm" placeholder="price" onChange={handleChance}/>
        <button className='bg-indigo-600 px-4  py-1 rounded-lg text-lg'>Submit</button>
      </form>

      <div className="w-2/3 h-3/4 flex flex-center flex-col">
      <h1 className='text-lg'>List of products</h1>
      <div className="products grid grid-cols-3 gap-4 content-center  gap-5">
        {products.map(product => (
          <div key={product.id} className="product flex flex-center flex-col m-2 p-4 rounded-lg bg-indigo-600"> 
          <h3 >{product.tittle}</h3>
          <p > {product.price}</p>
          <button onClick={() => handleDelete(product.id)}>Remove Product</button>
          </div> 
        ))}
      </div>

      </div>
      </div>
    </div>
  );
}

export default App;
