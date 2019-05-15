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
} from './style';

class Home extends PureComponent {

  render() {
      return(
          <HomeWrapper>
              <HomeLeft>
                <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic></Topic>
                <List></List>
             </HomeLeft>
            <HomeRight>
                <Recommend></Recommend>
            </HomeRight>

          </HomeWrapper>
      )   
  }
}

const mapState = (state) =>({

})

export default connect(mapState,null)(Home);