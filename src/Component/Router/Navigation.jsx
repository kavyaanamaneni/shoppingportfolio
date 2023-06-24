
import { Link, Outlet } from 'react-router-dom';
import{ReactComponent as CrownLogo} from "../Router/crown.svg"
import { Fragment, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import { signOutUser } from '../../Utils/Firebase/FireBase';
import CartIconComponent from '../Cart-icon/CartIconComponent';
import CartDropdown from '../CartDropdown/CartDropdown';
const Navigation = () => {
  const{currentUser}=useContext(UserContext);
  const{isCartOpen}=useContext(CartContext);
  return (
    <Fragment>
    <div className='navigation'>
        
         <div className='logo-container'>
         <Link  to="/">
           <CrownLogo className="logo"/>
         </Link>
         </div>
          <div className='nav-link-cantainer'>
          <Link  className='link' to="/shop">shop</Link>
          {
            currentUser
            ?(<span className='link' onClick={signOutUser}>sign-out</span>)
            :( <Link className='link'  to="/auth">sign-in</Link>)
          }
          <CartIconComponent/>
          </div>
          {isCartOpen && <CartDropdown/> }
       
     </div>
      
    <Outlet/>
    </Fragment>
  )
}

export default Navigation;
