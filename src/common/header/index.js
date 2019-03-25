import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,} from './style';


class Header extends Component {

  getListArea(){
    if (this.props.focused) {
      console.log('this.props.list',this.props.list);
      
      return(
        <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {this.props.list.map((item)=>{
                return(
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })}
            </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

    render(){
      const { handleInputBlur, handleInputFocus} = this.props;

      return(
        <HeaderWrapper>
          <Logo></Logo>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames='slide'
              >
                <NavSearch 
                  className={this.props.focused ? 'focused' : ''}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe782;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            {/* <Link to='/write'>
              <Button className='writting'>
                <i className="iconfont">&#xe615;</i>
                写文章
              </Button>
            </Link> */}
            <Button className='writting'>
                <i className="iconfont">&#xe75a;</i>
                写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      ) 
    }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    // focused: state.get('header').get('focused'),
    list:state.getIn(['header','list'])
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getlist())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);