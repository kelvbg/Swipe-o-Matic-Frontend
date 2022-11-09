import React from 'react';
import JsonDataDisplay from './components/table';
import "../index.css"

const Dashborard = () => {
return (
	<div>
		<div className='dash'>
			<h1>Welcome Back, User!</h1>
			<h2> Here's your data from past events!</h2>
		</div>
		<JsonDataDisplay/>
	</div>
	
	
);
};

export default Dashborard;