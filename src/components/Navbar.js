import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

function Navbar(props) {

	useEffect(() => {
		getNumbers();
	}, [])
	return(
		<header style={{height:"150px"}}>
	        <div className="overlay"></div>
	        <nav>
	          <h2 style={{color:"white"}}>Ferrari Store</h2>
	          <ul>
	            <li><Link to="/admin">Admin</Link></li>
	            <li><Link to="/">Store</Link></li>
	            <li className="cart"><Link to="/cart">
	              <ion-icon name="cart-outline"></ion-icon>
	              Cart <span>({props.cartProps.cartNumbers})</span></Link>
	            </li>
	          </ul>
	        </nav>
	     </header>

	)
}

const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
