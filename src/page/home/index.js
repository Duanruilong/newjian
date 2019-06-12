import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import { actionCreators } from './store';

class Home extends PureComponent {

  handleScrollTop(){
		window.scrollTo(0,0)
	}

  render() {
      return(
          <HomeWrapper>
              <HomeLeft>
                {/* <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" /> */}
                <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic></Topic>
                <List></List>
             </HomeLeft>
            <HomeRight>
                <Recommend></Recommend>
                <Writer />

            </HomeRight>
            {this.props.showScroll && <BackTop onClick={this.handleScrollTop}>顶部</BackTop>}
          </HomeWrapper>
      )   
  }

  componentDidMount() {
    this.props.changeHomeData();
		this.bindEvents()
	}

	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}

	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}

}



const mapState = (state) =>({
    showScroll: state.getIn(['home','showScroll'])   // 去home下的
})

const mapDispath = (dispath)=>({
    changeHomeData(){
			dispath(actionCreators.getHomeinfo())
		},
		changeScrollTopShow(){
			if (document.documentElement.scrollTop > 100) {
				// 滚动条超过100显示
				dispath(actionCreators.toggleTopShow(true)) 
			} else {
				dispath(actionCreators.toggleTopShow(false)) 
				
			}
		}
})

export default connect(mapState,mapDispath)(Home);