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
    	const className = `field ${meta.error && meta.submitFailed ? "error" : ""} term-form`;
    	let autofocus = false;

    	if (props.initialValues) {
    		autofocus = true;
    	};

		return (			
  			<div className={className} style={{paddingBottom: '30px'}}>
      			<div className="ui left icon input term-input">
      				<i className="search icon"></i>
        			<input {...input} autoFocus={autofocus} className="term-input" placeholder="Search for songs, artists, or albums" autoComplete="off" style={{fontSize: '17px'}}/>
        		</div>
        		{renderError(meta)}	
  			</div>
		);
  	};
 
  	const onSubmit = (formValues, form) => {
  		console.log(formValues)
    	props.onSubmit(formValues.term);
    	form.reset();

    	let term;
    	let track;
    	let artist;
    	let album;

    	if (localStorage.getItem("term") === null) {
    		term = [];
    	} else {
    		term = JSON.parse(localStorage.getItem("term"));
    	}

    	term.splice(0, 1, formValues.term);
    	localStorage.setItem("term", JSON.stringify(term));

    	if (localStorage.getItem("track") === null) {
    		track = [];
    	}
    	localStorage.setItem("track", JSON.stringify(track))

    	if (localStorage.getItem("artist") === null) {
    		artist = [];
    	}
    	localStorage.setItem("artist", JSON.stringify(artist))

    	if (localStorage.getItem("album") === null) {
    		album = [];
    	}
    	localStorage.setItem("album", JSON.stringify(album))
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
          			<Field name="term" type="search" component={renderInput}/> 
        		</form>
      		)}
    	/>
  	);
};

export default SearchForm;