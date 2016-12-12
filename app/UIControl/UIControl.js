import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as uiActions from './actions/index';
import Menu from './components/Menu';
import Footer from './components/presentation/Footer';
import Header from './components/presentation/Header';
import Landing from './components/presentation/Landing';
import ContactDisplay from './components/presentation/ContactDisplay';


class UIControl extends Component{
  constructor(props){
    super(props);



    this.delayDispatch = this.delayDispatch.bind(this);
    this.handleFooterClick = this.delayDispatch.bind(this);
    this.handleLandingClick = this.handleLandingClick.bind(this);
    this.hideContact = this.hideContact.bind(this);


  }

  hideContact(){
    return this.props.dispatch(uiActions.hideContact());
  }

  delayDispatch(action, payload, delayTime=300){
    setTimeout(
      () => {
        return this.props.dispatch(uiActions[action](payload));
      }, delayTime);

  }
  handleLandingClick(){

      event.preventDefault();
      return this.props.dispatch(uiActions.notJustLanded());


  }


  render(){

    return(

        <div id = 'Uicontrol' className= 'uiControlCont'>


            {
              this.props.justLanded? <Landing handleClick={this.handleLandingClick}/>:
            <div><Header />
              {this.props.showContact? <ContactDisplay hideContact={this.hideContact}/>:<Menu/>}

            {this.props.showContact? null:<Footer />}

          </div>}


            </div>


    )
  }
}

const mapStateToProps = (state)=>{

  return{
    stageIndex: state.uIState.uiStructure.stageIndex,
    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    itemIndexSelected: state.uIState.uiStructure.itemIndexSelected,
    previewIndex: state.uIState.uiStructure.previewIndex,
    dataBaseContents:state.uIState.uiStructure.dataBaseContents,
    mainContentIndex:state.uIState.uiStructure.mainContentIndex,
    justLanded:state.uIState.uiStructure.justLanded,
    showContact:state.uIState.uiStructure.showContact
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIControl)
