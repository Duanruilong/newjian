import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
// import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		// const { list, getMoreList, page } = this.props;
		return (
			<div>
				list
			</div>
		)
	}
}

const mapState = (state) => ({
	// list: state.getIn(['home', 'articleList']),
	// page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	// getMoreList(page) {
	// 	dispatch(actionCreators.getMoreList(page))
	// }
})

export default connect(mapState, mapDispatch)(List);