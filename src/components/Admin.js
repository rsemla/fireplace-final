import React from 'react';


function Admin() {

	return (
		<div>
			<h1>Administration Page.</h1>

			<h2>Need to add a car?</h2>

			<input type="text" placeholder={"Car Name..."} />
			<input type="text" placeholder={"Price..."} />
			<input type="text" placeholder={"In Stock..."} />
			<input type="text" placeholder={"Image..."} />
			<button>Submit</button>


			<h5>I tried and tried to get the Admin page to work to allow the user
			to add a car, but I was getting an error for the map function,
			which I emailed you about without a response. I literally rebuilt the
			whole program after I got the map function to work and after adding everything else back
			it still had the same error. I researched online but could not find anything I spent far
			too much time on this.</h5>
		</div>
	)
}


export default Admin;