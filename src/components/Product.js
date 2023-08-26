import React , {useContext}from 'react';
import {Link} from 'react-router-dom'
import {BsPlus , BsEyeFill} from 'react-icons/bs'
const Product = ({product}) => {

  console.log(product)
  const {id , image : {url} , name , price: { formatted_with_symbol }} = product;
  return( 
  <div>
    <div className='border border-[#e4e4e4] h-[250px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/*image*/}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[240px] group-hover:scale-110 transition duration-300'src={url} alt=''/>
        </div>
          {/**button*/}
        <div className='absolute top-6 -right-11 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-whilte w-12 h-12 bg-red-500'>
              <BsPlus className='text-3x1'/>
            </div>
          </button>
          <Link 
            to={`/product/${id}`} 
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow' >
              <BsEyeFill/>
          </Link>
        </div>
      </div>
    </div>
    {/*Name and price*/ }
    
    <div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibond mb-1'>{name}</h2>
      </Link>
      <div className='font-semibond'>{formatted_with_symbol}</div>
    </div>
  </div>
  );
};

export default Product;
