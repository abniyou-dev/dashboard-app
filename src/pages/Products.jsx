import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import axios from 'axios';

function Products() {

  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filtredProducts, setFilredProducts] = useState();

  const arrTest = [{name: 'bnx'}, {name: 'reda'},{name: 'mooohamed'},{name: 'is'},];

  function handleChange(e){
    const value = e.target.value;
    switch(value) {
      case "name" : {
          const sorted = [...data].sort((el1, el2) => el1.title.localeCompare(el2.title))
          setFilredProducts(sorted)
          break;
      }
      case "price" : {
          const sorted = [...data].sort((el1, el2) => el1.price - el2.price)
          setFilredProducts(sorted)
          break;
      }
      case "rating" : {
          const sorted = [...data].sort((el1, el2) => el1.rating.rat + el2.rating.rate)
          setFilredProducts(sorted)
          break;
      }
      default : {
        break;
      }

    }
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex">
      <div>
        <SideBar />
      </div>
      <div
        className='w-full p-5 space-y-5'>
        <h1
          className='text-3xl font-bold tracking-wider'>Products</h1>
        <div>
            
          {/* the Selectioon area  */}
          <div
            className='space-x-2'>
            <span className='text-neutral-400'>Filter Product by : </span>
            <select name="select" id=""
              onChange={(e) => handleChange(e)}
              className='px-3 py-2 bg-neutral-800 outline-none'>
              <option value="">Select</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">rate</option>
            </select>
        </div>


        {/* the products area  */}
        <div>

          {/* Loading progress  */}
          {isLoading === true && 
            <div
              className='w-full flex items-center justify-center mt-10'>
              <div
            className='size-7.5 border-3 border-red-400 rounded-full
              border-t-transparent animate-spin'> 
            </div>
          </div>}

          {/* error handling  */}
          {error && <span className='text-red-400'>
            {error}
            </span>}

          {/* the product items  */}
          <div
            className='space-y-5 my-5'>
            {filtredProducts && filtredProducts.map(product => 
              <div key={product.id}
                className='flex items-center justify-between  
                     bg-neutral-800 p-4 rounded w-full'>
                <div
                  className='flex gap-2 max-w-[80%]'> 
                  <img src={product.image} alt="" className='size-7.5'/>
                  <span>{product.title}</span>
                </div>
                <div
                  className='grid gap-2 max-w-[35%] text-center'> 
                  <span>{product.price}$</span>
                  <button
                    className='bg-neutral-900 px-2 py-1 rounded
                      cursor-pointer'>Open In Stock</button>
                </div>
              </div>
            )}
            {filtredProducts == null && data.map(product => 
              <div key={product.id}
                className='flex items-center justify-between  
                     bg-neutral-800 p-4 rounded w-full'>
                <div
                  className='flex gap-2 max-w-[80%]'> 
                  <img src={product.image} alt="" className='size-7.5'/>
                  <span>{product.title}</span>
                </div>
                <div
                  className='grid gap-2 max-w-[35%] text-center'> 
                  <span>{product.price}$</span>
                  <button
                    className='bg-neutral-900 px-2 py-1 rounded
                      cursor-pointer'>Open In Stock</button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Products