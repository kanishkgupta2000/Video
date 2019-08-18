import React from 'react';

class SearchBar extends React.Component{
	state={term:''};
onInputChange=(event)=>{
this.setState({term:event.target.value});
};
onFormSubmit=(event)=>{
	event.preventDefault();
	this.props.onFormSubmit(this.state.term);
};
	render(){
		return(
		<div className="ui search segment" style={{backgroundColor:"blue"}}>
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
				<label ><h1><strong style={{color:"white"}}>VideoFind</strong><i className="film icon" style={{color:"white"}}></i>
</h1></label>
					<input 
						value={this.state.term}
						type="text"
						onChange={this.onInputChange}
						/>

				</div>
				</form>
			
			</div>
			);
	}
}
export default SearchBar;