import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AuthContext } from '../context/AuthContext';
import { handleCreateNewProduct } from '../services/productService';

const Create = () => {

  const { token } = useContext(AuthContext);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSumidHandler = async (e) => {
    e.preventDefault();
    try {
      const product = new FormData();
      product.append('name', name);
      product.append('description', description);
      product.append('price', Number(price));
      product.append('category', category);
      product.append('subCategory', subCategory);
      product.append('bestSeller', bestSeller);
      product.append('sizes', JSON.stringify(sizes));
      if (image1) product.append('image1', image1);
      if (image2) product.append('image2', image2);
      if (image3) product.append('image3', image3);
      if (image4) product.append('image4', image4);
      
      await handleCreateNewProduct(product, token);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSumidHandler} className='w-full flex flex-col items-start gap-3'>
      <div className='w-full'>
        <h3 className='mb-2 mt-2 font-medium'>Product Name</h3>
        <input onChange={(e)=> setName(e.target.value)} value={name} required placeholder='Type the name of the product here' type='text' className='w-full max-w-[500px] border border-gray-300 rounded-md px-3 py-2  outline-[#c586a5]' />
      </div>

      <div className='w-full'>
        <h3 className='mb-2 mt-2 font-medium'>Product Description</h3>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} required placeholder='Write the description for your product' type='text' className='w-full max-w-[500px] border  border-gray-300 rounded-md px-3 py-2  outline-[#c586a5]' />
      </div>
      
      <div className='flex flex-col justify-between sm:flex-row gap-2 w-full max-w-[500px] sm:gap-4'>
        <div>
          <h3 className='mb-2 mt-2'>Product Category</h3>
          <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded-md'>
            <option value=''>Select</option>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

         <div>
          <h3 className='mb-2 mt-2'>Sub Category</h3>
          <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded-md'>
            <option value=''>Select</option>
            <option value='Topwear'>Topwear</option>
            <option value='Bottonwear'>Bottonwear</option>
            <option value='Winterwear'>Winterwear</option>
          </select>
        </div>

        <div>
          <h3 className='mb-2 mt-2'>Product Price</h3>
          <input onChange={(e)=> setPrice(e.target.value)} value={price} type='number' placeholder='Enter the price of the product' className='w-full sm:w-[120px] border border-gray-300 rounded-md px-3 py-2  outline-[#c586a5]' />
        </div>
      </div>

      <div className=''>
        <h3 className='mb-2 mt-2 font-medium'>Upload Image</h3>
        <div className='flex gap-4'>
          <label htmlFor='image1'>
            <img src={image1 ? URL.createObjectURL(image1) : assets.upload_area } alt='Upload' className='w-20' />
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' className='' id='image1' hidden />
          </label>

          <label htmlFor='image2'>
            <img src={image2 ? URL.createObjectURL(image2) : assets.upload_area } alt='Upload' className='w-20' />
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' className='' id='image2' hidden />
          </label>

          <label htmlFor='image3'>
            <img src={image3 ? URL.createObjectURL(image3) : assets.upload_area } alt='Upload' className='w-20' />
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' className='' id='image3' hidden />
          </label>

          <label htmlFor='image4'>
            <img src={image4 ? URL.createObjectURL(image4) : assets.upload_area } alt='Upload' className='w-20' />
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' className='' id='image4' hidden />
          </label>
        </div>
      </div>

      <div>
        <h3 className='mb-2 mt-2'>Product Sizes</h3>
        <div className='flex gap-4 '>
          <div onClick={ () => setSizes(prev => (prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S']))}>
            <p className={` ${sizes.includes('S') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={ () => setSizes(prev => (prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M']))}>
            <p className={` ${sizes.includes('M') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={ () => setSizes(prev => (prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L']))}>
            <p className={` ${sizes.includes('L') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={ () => setSizes(prev => (prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL']))}>
            <p className={` ${sizes.includes('XL') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={ () => setSizes(prev => (prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL']))}>
            <p className={` ${sizes.includes('XXL') ? 'bg-pink-200' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestSeller(!bestSeller)} checked={bestSeller} type='checkbox' id='bestseller' className='' />
        <label htmlFor='bestseller' className='ml-2 cursor-pointer'>Mark as Best Seller</label>
      </div>

      <button type='submit' className='w-42 bg-black text-white px-2 py-3 rounded-md mt-4'>Create Product</button>
    </form >
  )
}

export default Create