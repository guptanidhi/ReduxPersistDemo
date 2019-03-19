/*  
  QuestionPage

  The main page for question and answers in the app

*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { appendUser } from "../../actions/actionMain";
import './style.css'

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: ''
		}
	}

	renderData = () => {
		let data = []
		this.props.sampleData.map((user, i) => {
			data.push(
				<div key={i}>
					<p> S.No.: {i} | Name : {user.name} |</p>
				</div>
			)
		}
		)
		return <div> {data} </div>
	}

	addUser = () => {
		this.props.appendUser({name: this.state.userName});
		this.setState({ userName: '' });
	}

	render() {
		return (
			<div>
				<h2>Add User</h2>
				<input type="text" placeholder="Enter Name" value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })}></input>
				<button onClick={this.addUser}>Add User</button>
				<br />
				<br />
				{this.renderData()}
			</div>
		)
	}
}

const propTypes = {};

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => {
	return {
		sampleData: state.sample.sampleData || []
	};
}

export default connect(
	mapStateToProps,
	{ appendUser }
)(MainPage);
