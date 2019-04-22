import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<div>
				Recommend
			</div>
		)
	}
}

const mapState = (state) => ({
	// list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);