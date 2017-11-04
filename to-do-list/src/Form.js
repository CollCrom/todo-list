import React, { Component } from 'react';

class Form extends Component {
constructor(props) {
super(props)

this.state = {
	inputValue: "",
}

this.handleInput = (e) => {
const state = this.state
state[e.currentTarget.name] = e.currentTarget.value;
}

this.handleSubmit = (e) => {
e.preventDefault();
this.props.pushToList(this.state.inputValue)
this.refs.someName.value = '';
}
}
render () {
	return (
	<div>
	<form>
	<label>List Maker</label><br/>
	<textarea name="inputValue" type="text" ref="someName" placeholder='Add to the list' onChange={this.handleInput} /><br/>
	<button onClick={this.handleSubmit} value={this.state.inputValue}>Add</button> 
	</form>		
	</div>
	)
}

}

export default Form;