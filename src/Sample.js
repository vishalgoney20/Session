import React, { Component } from 'react'


import InputText from './InputText/InputText'
import ButtonComponent from './buttonComponent/ButtonComponent'
import InputTextOutline from './InputTextOutline/InputTextOutline'
import SnackBar from './SnackBar/SnackBar'


class Sample extends Component {

	constructor(props) {
		super(props)
		this.state = {
			organizationName: '',
			contactName: '',
			mobileNumber: '',
			Email: '',
			link: 'some link to copy',
			requiredOrNot: false
		}
	}

	handleSubmit = event => {
		alert(` ${this.state.organizationName}  ${this.state.contactName}  ${this.state.mobileNumber}  ${this.state.Email} `)
		event.preventDefault()
	}

	render() {

		return (
			// <form onSubmit={this.handleSubmit} >
			// 	<br/><br/>

			// 	<InputText required={true} name={"organizationName"} value={this.state.organizationName}
			// 			 onChange= {(event,newValue) => this.setState({organizationName:newValue})} />
			// 	<br/><br/>
			//     <InputText required={true} name={"contactName"} value={this.state.contactName}
			// 			 onChange= {(event,newValue) => this.setState({contactName:newValue})} />
			// 	<br/><br/>
			//     <InputText required={false} name={"mobileNumber"} value={this.state.mobileNumber}
			// 			 onChange= {(event,newValue) => this.setState({mobileNumber:newValue})} />
			// 	<br/><br/>
			//     <InputText required={true} name={"Email"} value={this.state.Email}
			// 			 onChange= {(event,newValue) => this.setState({Email:newValue})} />
			// 	<br/><br/><br/>


			// 	<InputTextOutline name={"link"} value={this.state.link} 
			// 		 onChange= {(event,newValue) => this.setState({link:newValue})}/>
			// 	<br/><br/><br/>	
			// 	<ButtonComponent value="Share Link" type="submit"/>	
			// 	<br/><br/>	
			// 	<SnackBar />	
			// 	<br/><br/>	
			// 	<ButtonComponent value="Generate Link" type="submit"/>

			// </form>
			<InputText required={true} name={"Email"} value={this.state.Email}
				onChange={(event, newValue) => this.setState({ Email: newValue })} />
			
		)
	}
}

export default Sample