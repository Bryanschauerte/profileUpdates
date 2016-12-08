import react, {Component} from 'react';
import {connect} from 'react-redux';
import * as restActions from './actions';
import axios from 'axios';

class RestComponent extends Component{
  constructor(props){
    super(props);
    this.requestProfileData = this.requestProfileData.bind(this);
  }
  requestProfileData(){

    this.props.dispatch(restActions.requestProfileData());

    axios.get('/getContents/profile')
        .then( (response)=> {
            let contents = response.data;
            this.props.dispatch(restActions.requestProfileData(contents));
            console.log(contents, 'contents');
          })
          .catch(function (error) {
            this.props.dispatch(restActions.receivedError(error));
            console.log(error);
          });

  }


}
const mapStateToProps= (state)=>{
  console.log(state)
  return {
    something:state
  }
}

const mapDispatchToProps= (dispatch)=>{
  return dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(RestComponent)
