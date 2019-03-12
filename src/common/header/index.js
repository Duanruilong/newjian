import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';

class Header extends Component {

    render() {
      const { handleInputBlur, handleInputFocus, list} = this.props;
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

              <NavSearch 
                className={'focused'}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
              <i className="iconfont zoom">&#xe782;</i>

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

// const mapStateToProps = (state) => {
//   return {
//     list: state.getIn(['header', 'list']),
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleInputFocus: (list) => {

//       dispatch(actionCreator)
//     }
//   }
// }
export default Header;