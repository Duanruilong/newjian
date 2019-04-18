import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,} from './style';


class Header extends Component {

  getListArea(){
  const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
  const newList = list.toJS(); // immutable对象 转换
  const pageList =[];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page*10; i++) {  // 取10条数据
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      console.log('list',list);
      
      return(
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch 
                onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe637;</i>

                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
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
                  onFocus={()=>{handleInputFocus(list)}}
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
    list:state.getIn(['header','list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(list){
      // 代码优化减少接口请求，没有数据时再请求
      (list.length === 0) && dispatch(actionCreators.getlist())  
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){ // 鼠标移入事件
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){ // 鼠标移入事件
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage, spin){
      // 搜索旋转动画
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle,10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);