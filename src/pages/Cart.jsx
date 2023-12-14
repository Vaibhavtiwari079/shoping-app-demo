import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state)
  console.log("printing cart")
  console.log(cart)
  const [totalamount, setTotalamount] = useState(0);
  useEffect(( )=>
  setTotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))
  , [cart])
  return(  
  <div>{

    cart.length > 0  ?
    <div> 
      <div>
              {

            cart.map((item,index )=>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
            }


      </div>
      <div>
        <div>Your Summary
          <><span>Total Items:{cart.length}</span>
          
          </>
        </div>
          <div>
            <p>Total amount:${totalamount}</p>
          </div>
          <div> 
            <button>
               wishlist
            </button>
          </div>
      </div>
    
    </div>
    
    :
    <div>
     <p>NO items in cart</p>
     <div>
              <Link to="/">
                <button>
                  shop items
                </button>
              </Link>
      </div>

    </div>
      }

  </div>
  )
}

  export default Cart;