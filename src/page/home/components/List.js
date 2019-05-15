import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {ListItem,ListInfo} from '../style';
// import { actionCreators } from '../store';
// import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item,index)=>{
						return(
							<ListItem key={index}>
								<img alt='' className='pic' src={item.get('imgUrl')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
				
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	// page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	// getMoreList(page) {
	// 	dispatch(actionCreators.getMoreList(page))
	// }
})

export default connect(mapState, mapDispatch)(List);