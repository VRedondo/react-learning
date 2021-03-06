import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) =>{
	let input;
	return (
		<div>
			<form onSubmit={(e)=>{
				e.preventDefault();
				if(!input.value.trim()){
					return;
				}
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
				<input type="text" ref={node => {input = node;}}/>	
				<button type="submit">Add todo</button>
			</form>
		</div>
	);
};//AddTodo

AddTodo.propTypes = {
	dispatch : PropTypes.func.isRequired
};
export default connect()(AddTodo);