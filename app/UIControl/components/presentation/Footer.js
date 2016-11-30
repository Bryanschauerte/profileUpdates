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
        const reset = null;
         this.props.dispatch(uiActions.hoverChange(reset) );
        return this.props.dispatch(uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        const hoverID = null;
        return this.props.dispatch(uiActions.hoverChange(hoverID) );
      }




      render(){

        return (<div
          onClick={()=>this.showContact()}
          onMouseLeave={this.stopHoverItem}
          style={{
            cursor:'pointer',
          display:'flex',
          justifyContent:'center',
          width:'100%',
          height:'20%',
          flexDirection:'column'
        }}>
          <ul

                   style={{
                          opacity:1,
                          listStyle:'none',
                          margin:'0',
                          padding:'0'

                        }}>


                <Motion
                  defaultStyle={{
                    fontSpace:window.innerWidth * .045,
                    r:0
                    }}
                  style={{

                  fontSpace: spring(this.props.animations == 'footer'? window.innerWidth * .025 : 2),
                  r:spring(this.props.animations == 'footer'? 100:0)


                }}>



                        {({ fontSize, fontSpace, r}) =><div style={{

                          display:"flex",
                          flexDirection:'row',
                          flex:1,
                          justifyContent:'center'

                        }} >

                        <li
                          onMouseEnter={this.hoverItem.bind(null, 'footer')}
                          onMouseLeave={this.stopHoverItem}
                          style={{
                          opacity:'1',
                          color: this.props.animations == 'footer'? uiActions.getColorCategory(this.props.categorySelected):'#e5e5e5',
                          letterSpacing: `${fontSpace}px`,
                          margin:'0',
                          alignSelf:'center',
                          width:'30%',
                          height:'100%',
                          display:'flex',
                          justifyContent:'center',
                          position:'relative',
                          borderRadius:'2em'
                        }}>
                        <h4 style={{textAlign:'center', opacity:'1', color:'#eee'}}>CONTACT</h4>
                        <div style={{position:'absolute', height:'100%', width:'100%', borderRadius:'2em', overflow:'hidden'}}>
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
