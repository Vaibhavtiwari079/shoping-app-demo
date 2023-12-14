import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import {add,remove} from "../redux/Slices/CartSlice"
const Product = ({post}) => {
    const {cart}=useSelector((state)=>state)
    console.log("posting")

  const dispatch= useDispatch();
    const addToCart=()=>{
        dispatch(add(post))
        toast.success("Item added to cart")

    }
    const removeFromCart=()=>{
        dispatch(remove(post))
        toast.success("Item removed from cart")

    }
  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
        <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</div>
        <div>
            <p  className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description}</p>
        </div>
        <div className="h-[180px]">
            <img src={post.image} className='w-100 h-36'></img>
        </div>
        <div className="flex justify-between gap-12 text-green-600 items-center w-full mt-5">
           $ {post.price}
        </div>
        <div>
                        
            
                {
                    cart.some((p)=>p.id===post.id)?
     
                        
                        
                        <button onClick={removeFromCart}  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                        text-[12px] p-1 px-3 uppercase 
                        hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in">
                            <p>remove item</p>
                        </button>:
                   <button onClick={addToCart}  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                   text-[12px] p-1 px-3 uppercase 
                   hover:bg-gray-700
                   hover:text-white transition duration-300 ease-in"> <p>add to cart</p></button>

                }
           
        </div>
    </div>
  )
}

export default Product