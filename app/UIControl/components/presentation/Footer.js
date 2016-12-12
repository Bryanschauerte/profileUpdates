import React,{Component, PropTypes} from 'react';
import DisplaySingleItem from './DisplaySingleItem';
import * as uiActions from '../../actions/index';
import {connect} from 'react-redux';
import { Motion, StaggeredMotion, spring } from 'react-motion';


class Footer extends Component {


  constructor(props){
    super(props);

    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);
    this.showContact = this.showContact.bind(this);

  }
  showContact(){
    return this.props.dispatch(uiActions.showContact());
  }
      hoverItem(hoverID){
        event.preventDefault();
        const reset = 'footer reset';
         this.props.dispatch(uiActions.hoverChange('footer reset') );
        return this.props.dispatch(uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        const hoverID = null;
        console.log('stop hover')
        return this.props.dispatch(uiActions.hoverChange(hoverID) );
      }




      render(){

        return (<div id='footer'
          onClick={this.showContact}>
          <ul className='list'>


                <Motion
                  defaultStyle={{
                    fontSpace:window.innerWidth * .045,
                    r:0
                    }}
                  style={{

                  fontSpace: spring(this.props.animations == 'footer'? window.innerWidth * .025 : 2),
                  r:spring(this.props.animations == 'footer'? 100:0)


                }}>



                        {({ fontSize, fontSpace, r}) =><div className='listContainer' >

                        <li
                          className='listItem'
                          onMouseEnter={this.hoverItem.bind(null, 'footer')}
                          onMouseLeave={this.stopHoverItem}
                          style={{
                            marginTop:'2%',
                          color: this.props.animations == 'footer'? uiActions.getColorCategory(this.props.categorySelected):'#e5e5e5',
                          letterSpacing: `${fontSpace}px`
                        }}>
                        <h4 className='contact'>CONTACT</h4>
                        <div className='anaContain' >
                          <svg key ={Math.random()} id="TopSVGCirles" height="100%" width="100%">
                            <circle key ={Math.random()} cx='50%' cy='50%' r={r+'%'} fillOpacity='.5' fill={'#000'} />
                            {/* <text x="0%" y="50%"  stroke="none" fill="#242424"  opacity=".4" fontSize="127px" fontFamily="Garamond"><tspan dy="0%">{this.props.displayItem}</tspan></text> */}
                          </svg>
                        </div>

                      </li>


                      </div>
                    }
                  </Motion>



      </ul>
    </div>)
      }


}

const mapStateToProps = (state)=>{

  return{

    categories: state.uIState.uiStructure.categories,
    categorySelected: state.uIState.uiStructure.categorySelected,
    dataBaseContents:state.uIState.uiStructure.dataBaseContents,
    mainContentIndex:state.uIState.uiStructure.mainContentIndex,
    animations: state.uIState.uiStructure.animations.hover
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
