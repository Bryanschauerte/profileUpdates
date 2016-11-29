
import React from 'react';
import {connect} from 'react-redux';
import SvgGenerator from '../svgGenerator/SvgGenerator'
import UIControl from '../UIControl/UIControl';
import Axios from 'axios';

class Base extends React.Component{
  constructor(props){
    super(props);
    this.state={
      windowWidth: null,
      windowHeight: null
    }
    this._handleResize = this._handleResize.bind(this);


    }

      _handleResize(e){
          this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
           })
      }


      componentDidMount(){


        window.addEventListener('resize', this._handleResize);
        this._handleResize()

      }
      componentWillUnmount(){
        window.removeEventListener('resize', this._handleResize)
      }


      render(){
        let { children} = this.props;
        const { pathname, search, hash } = window.location
        const location = `${pathname}${search}${hash}`
        let windowWidth=this.state.windowWidth;
        let windowHeight = this.state.windowHeight;




        return( <div style= {{
          position:'absolute',
          width:this.state.windowWidth,
          height:this.state.windowHeight
        }}>  <SvgGenerator
            windowHeight={windowHeight}
            showBackgAni={this.props.categorySelected ==null}
            windowWidth={windowWidth}/>
          <div style={{position:'absolute', width:this.state.windowWidth, height:this.state.windowHeight}}>
            <UIControl />
          </div>


            </div>)
      }

    }


    const mapStateToProps = (state) => {

        return {
          activeIndex: state.horizontalPView.index,
          productArray: state.horizontalPView.productArray,
          categorySelected: state.uIState.uiStructure.categorySelected
        }
    }

    const mapDispatchToProps = (dispatch) => {

        return {
            dispatch
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Base);
