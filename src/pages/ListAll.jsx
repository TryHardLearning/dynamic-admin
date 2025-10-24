import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { handleListAllProducts, handleRemoveFromStock } from '../services/productService';
import { currency } from '../App';
import { AuthContext } from '../context/AuthContext';

const ListAll = () => {

  const { token } = useContext(AuthContext);

  const [productList, setProductList] = useState([]);
  
  const fetchList = async () => {
    try {
        const response = await handleListAllProducts();
        setProductList(response);
        console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const remoteProductFromStock = async (productId) => {
    console.log(productId);
    const response = await handleRemoveFromStock(productId, token);
    console.log(response);
  }

  useEffect(() => {
    fetchList();
  },[])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <table className='table-auto w-full border-collapse border border-gray-200 text-sm'>
        <thead className='bg-slate-100'>
          <tr>
            <th className='border border-gray-200 p-2'>Image</th>
            <th className='border border-gray-200 p-2'>Name</th>
            <th className='border border-gray-200 p-2'>Category</th>
            <th className='border border-gray-200 p-2'>Price</th>
            <th className='border border-gray-200 p-2 text-center'>Remover</th>
          </tr>
        </thead>
        <tbody>
          {productList && productList.map((product, index) => (
            <tr key={index} className='hover:bg-gray-100 text-center'>
              <td className='border border-gray-200 p-2 text-center'>
                <img src={product.image[0]} className='w-16 h-16 object-cover mx-auto' alt={product.name} />
              </td>
              <td className='border border-gray-200 p-2'>{product.name}</td>
              <td className='border border-gray-200 p-2'>{product.category}</td>
              <td className='border border-gray-200 p-2'>{currency} {product.price}</td>
              <td className='border border-gray-200 p-2 text-center'>
                <button onClick={() => remoteProductFromStock(product._id)} className='cursor-pointer text-lg'>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListAll