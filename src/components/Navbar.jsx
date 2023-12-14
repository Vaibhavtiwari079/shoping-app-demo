import { FaCartPlus} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const cart=useSelector((state)=>state)
  return <div className="bg-black flex flex-col text-green">
   <nav>
   <div className="flex flex-row">
    <div><NavLink to="/">
        <img src="logo.png" className="h-14"></img>
       </NavLink></div>
      
      
       <div className="text-white flex items-center justify-between space-x-6">
        <NavLink to="/">
                   <p>Home</p>
        </NavLink>
        <NavLink to="/cart" >
          <div className="relative"><FaCartPlus/>
          {
            (cart.length>0 )&&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
            justify-center items-center Sanimate-bounce rounded-full text-white" >{cart.length}</span>
          }
          </div>
             
        </NavLink>
      
       </div>
    </div>

   </nav>

  </div>;
};

export default Navbar;
