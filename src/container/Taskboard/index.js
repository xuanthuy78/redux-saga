import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export class Taskboard extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Button variant="contained" color="primary" >
					<AddIcon/> Thêm mới công việc
        </Button>
				<div className={this.props.classes.nam}>
					<div className={this.props.classes.hop} >Reactjs</div>
					<div className={this.props.classes.hop}>Angularjs</div>
					<div className={this.props.classes.hop}>Vuejs</div>
				</div>
			</div>
		)
	}
}

export default withStyles(style)(Taskboard)
