
import React from 'react';
import {connect} from 'react-redux';
import SvgGenerator from '../svgGenerator/SvgGenerator'
import UIControl from '../UIControl/UIControl';
import axios from 'axios';
import * as restActions from '../apiHandling/actions';




class Base extends React.Component{
  constructor(props){
    super(props);
    this.state={
      windowWidth: null,
      windowHeight: null
    }
    this._handleResize = this._handleResize.bind(this);
    this.requestProfileData = this.requestProfileData.bind(this);

    }
      requestProfileData(){

        this.props.dispatch(restActions.requestProfileData());

        axios.get('/getContents/profile')
            .then( (response)=> {
                let contents = response.data;
                this.props.dispatch(restActions.receivedProfileData(contents));

              })
              .catch(function (error) {
                this.props.dispatch(restActions.receivedError(error));

              });

      }
      _handleResize(e){
          this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
           })
      }


      componentDidMount(){
        window.addEventListener('resize', this._handleResize);
        this.requestProfileData();
        this._handleResize();

      }
      componentWillUnmount(){
        window.removeEventListener('resize', this._handleResize)
      }


      render(){
        let { children} = this.props;
        let windowWidth=this.state.windowWidth;
        let windowHeight = this.state.windowHeight;




        return( <div id='Base' style= {{
          position:'absolute',
          width:this.state.windowWidth,
          height:this.state.windowHeight
        }}>  <SvgGenerator
            windowHeight={windowHeight}
            showBackgAni={this.props.categorySelected ==null}
            windowWidth={windowWidth}/>
          <div style={{
            position:'absolute',
            width:this.state.windowWidth *.95,
            height:this.state.windowHeight *.95,
            top: "4.5%",
            left:'2.5%',
            overflow:'scroll'
          }}>
            <UIControl />
          </div>


            </div>)
      }

    }


    const mapStateToProps = (state) => {

        return {

          categorySelected: state.uIState.uiStructure.categorySelected
        }
    }

    const mapDispatchToProps = (dispatch) => {

        return {
            dispatch
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Base);
