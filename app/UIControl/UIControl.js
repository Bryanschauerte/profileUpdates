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
    this._handleLandingClick = this._handleLandingClick.bind(this);
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
  _handleLandingClick(){
      event.preventDefault();
      return this.props.dispatch(uiActions.notJustLanded());
  }


  render(){

    const height = this.props.height;
    const width = this.props.width;
    return(

        <div
          id = 'Uicontrol'
          style={{
            height:this.props.height,
            width: this.props.width,
            overflowY:"scroll",

            position: 'relative'
          }}
          >

        {
          this.props.justLanded? <Landing handleClick={this._handleLandingClick}/>:
            <div>
              <Header height={height*.07} />
              {
                this.props.showContact? <ContactDisplay hideContact={this.hideContact}/>:
                <Menu
                  height={height*.86}
                  width={width}
                />
              }
            {this.props.showContact ? null:<Footer height={height*.07} width={width}/>}
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
