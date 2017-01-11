import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, redA200 } from 'material-ui/styles/colors';

const styles = {

	chip:{
		margin:4,
	},
	wrapper: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	button: {

		margin: 12,

	},

};

export default class Project extends Component{
render(){

	return (
  <Card>

    <CardMedia
      overlay={<CardTitle title={this.props.project.name} subtitle={this.props.project.subtitle} />}
    >
      <img src="appli.jpg" />
    </CardMedia>

    <CardText>
    <Chip style={styles.chip} backgroundColor={blue200}> {this.props.project.language} </Chip>
      {this.props.project.description}
    </CardText>

  </Card>

			)
		}
}