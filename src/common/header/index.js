import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';

const Header = (props)=>{
    const { handleInputBlur, handleInputFocus} = props;
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
              in={props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={props.focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe782;</i>

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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);