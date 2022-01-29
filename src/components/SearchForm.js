import React from 'react';
import {Form, Field} from 'react-final-form';

const SearchForm = (props) => {
  	const renderError = ({ error, submitFailed }) => {
    	if (submitFailed && error) {
	      	return (
	        	<div className="ui mini red error message err-msg">
	          		<div className="header" style={{fontSize: '15px', fontWeight: 'bold'}}>{error}</div>
	        	</div>
	      	);
    	};
  	};
 
  	const renderInput = ({ input, meta }) => {
    	const className = `field ${meta.error && meta.submitFailed ? "error" : ""} todo-form`;
    	let autofocus = false;

    	if (props.initialValues) {
    		autofocus = true;
    	};

		return (			
  			<div className={className} style={{paddingBottom: '50px'}}>
      			<div className="ui action input">
        			<input {...input} autoFocus={autofocus} className="todo-input" placeholder="Search..." autoComplete="off" style={{fontSize: '20px'}} />
        			<button className="ui compact button green todo-input" style={{fontSize: '17px'}}>Search</button>
        		</div>
        		{renderError(meta)}	
  			</div>
		);
  	};
 
  	const onSubmit = (formValues, form) => {
    	props.onSubmit(formValues);
    	form.reset();
  	};
 
  	return (
    	<Form
	    	initialValues={props.initialValues}
	    	onSubmit={onSubmit}
	    	validate={formValues => {
        		const errors = {};
 
        		if (!formValues.term) {
          			errors.term = "Search valid term";
        		}

        		return errors;
      		}}
      		render={({ handleSubmit }) => (
        		<form onSubmit={handleSubmit} spellCheck="false" className="ui form error">     			
          			<Field name="term" component={renderInput}/> 
        		</form>
      		)}
    	/>
  	);
};

export default SearchForm;