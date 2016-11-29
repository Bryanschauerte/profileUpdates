import React from 'react';
import * as HPVActions from './actions/index';
import {connect} from 'react-redux';
import Products from './components/Products'

class HorizPreView extends React.Component {
    constructor(props){
        super(props);

        this.forwardIndex = this.forwardIndex.bind(this);
        this.backIndex = this.backIndex.bind(this);
        this.selectIndex = this.selectIndex.bind(this);
        this.addStyleObj = this.addStyleObj.bind(this);

    }

    forwardIndex(){
      return this.props.dispatch(HPVActions.forwardIndex())
    }
    selectIndex(index){
      return this.props.dispatch(HPVActions.selectIndex(index))
    }
    backIndex(){
      return this.props.dispatch(HPVActions.backIndex())
    }
    addStyleObj(){
      return this.props.dispatch(HPVActions.addStyleObj());
    }

    render() {

        return (
            <div
              style={{
                display: 'flex',
                flex:1,
                justifyContent:'center'
              }}
              id='productContainer'>

                  <Products
                    testFun={this.selectIndex}
                    selectIndex = {HPVActions.selectIndex}
                    dispatch = {this.props.dispatch}
                    activeIndex={this.props.activeIndex}
                    productArray= {this.props.productArray}/>
                </div>

        )
    }
}


const mapStateToProps = (state) => {

    return {
      activeIndex: state.horizontalPView.index,
      productArray: state.horizontalPView.productArray
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HorizPreView);
