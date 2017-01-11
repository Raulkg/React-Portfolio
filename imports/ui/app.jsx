import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Education from './Education';
import Experience from './Experience';
import Project from './project';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';

const tempProject = 			{_id:1,
		name: "Portfolio Application",
		subtitle:"ReactJS Application",
		language:"ReactJS, MeteorJS , MaterialUI ,NodeJS",
		description:"This is a demonstration of my React Knowledge.",
		}



export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {curretProject:tempProject};
		this.updateCurrentProject = this.updateCurrentProject.bind(this);
	}

getProjects(){
	return [
		{_id:1,
		name: "Med Assist",
		subtitle:"IOS Mobile Application",
		language:"Xcode",
		description:"MedAssist - An application focused at patients who forget to take medicine on time We used Swift programming to design the application that is compatible with all IOS devices .Used Parse API to integrate the Database.Google Places APIMandrill API and Twilio API for notification over SMS and EMAIL.",
		},
		{_id:2,
		name: "FineDine",
		subtitle:"Android Mobile Application",
		language:"Android Programming , Geny Motion",
		description:"Android Mobile application with good material design. City based Restaurant search in the dynamic database.",
		},
		{_id:3,
		name: "Closed Captions - Youtube -  Web Application",
		subtitle:"Web Application",
		language:"JavaScript,MongoDB",
		description:"Worked on Creating a website for students to caption the existing youtube videos of lectures.",
		},
		{_id:4,
		name: "Portfolio Application",
		subtitle:"ReactJS Application",
		language:"ReactJS, MeteorJS ,MaterialUI",
		description:"This is a demonstration of my React Knowledge.",
		},
				{_id:5,
		name: "XML Parser",
		subtitle:"C++ Console Application",
		language:"C++ 11.0",
		description:"Developed an XML parsing facility that reads XML strings or text files, builds a Document object that can be queried for information about the XML contents, supports programmatic modification of the Document, and can write the revisions to another XML string or file. ",
		},
				{_id:6,
		name: "File Catalogue",
		subtitle:"Remote Console Application",
		language:"C++ 11.0",
		description:"Analyzed the directory structure on the local machine, looking for duplicate file names and searching for text in specified files. Constructed a catalog of all files in the file set, saving each file name only once and saving each path only once, while preserving all of the containment relationships between directories and their files by implementing in C++11.",
		},

	];
}

updateCurrentProject(project){
	this.setState({
		curretProject: project,

	});


}


renderProjects(){

	return this.getProjects().map((project) => (

			<Experience key={project._id} project = {project} updateCurrentProject= {this.updateCurrentProject}/>

		))
}


render(){

	return (
		<MuiThemeProvider>
			<div className ="container">
			<AppBar title="Rahulkumar Gaddam" iconClassNameRight="muidocs-icon-navigation-expand-more"  showMenuIconButton={false}/>
			<div className="row">
				<div className="col s12 m7"> <Project project = {this.state.curretProject} /> </div>
				<div className="col s12 m5">
				 <Divider/> 
					<List>
						{this.renderProjects()}

					</List>
				<Divider/>
				 </div>
			

			</div>
			</div>
	

		</MuiThemeProvider>

			)
		}
}