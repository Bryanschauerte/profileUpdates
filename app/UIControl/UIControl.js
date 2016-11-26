import React, {Component} from 'react';
import {connect} from 'react-redux';
import ViewContainer from './components/ViewContainer';

class UIControl extends Component{
  render(){
    return (
      <div style={{
        display:'flex',
        position:'relative',
        height:'100%',
        width:'100%',
        justifyContents:'center',
        alignSelf:'center'}}>

        <ViewContainer/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, "state uicontroll")
  return{

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(UIControl)
