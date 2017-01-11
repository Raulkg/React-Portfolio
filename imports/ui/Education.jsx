
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


export default class Education extends Component{
render(){

	return (
		<MuiThemeProvider>
			<RaisedButton  label="Education"/>
		</MuiThemeProvider>

			)
		}
}