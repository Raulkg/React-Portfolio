import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem }  from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';



import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
const style = {margin: 5};

export default class Experience extends Component{

updateCurrentProject(project){

this.props.updateCurrentProject(project);

}





render(){

	return (
			<ListItem
			      leftAvatar={ <Avatar color={deepOrange300}
          backgroundColor={purple500}
          size={30}
          style={style}>
        
         {this.props.project.name.charAt(0)}
      </Avatar>}
			primaryText = {this.props.project.name}
			onClick = {this.updateCurrentProject.bind(this,this.props.project)}
			/>


			)
		}
}