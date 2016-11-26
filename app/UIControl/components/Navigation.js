import React,{Component} from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import Menu from './presentation/Menu';
import Reset from './presentation/Reset';
import * as uiActions from '../actions/index';

class Navigation extends Component{
  constructor(props){
    super(props);
    this.renderMenu = this.renderMenu.bind(this);

    this.openMenu = this.openMenu.bind(this);
    this.resetIt = this.resetIt.bind(this);
    this.changeView = this.changeView.bind(this);
    this.categorySelect = this.categorySelect.bind(this);
    this.renderIcon = this.renderIcon.bind(this);

  }
    categorySelect(index){
      this.props.dispatch(uiActions.categorySelect(null));
      this.props.dispatch(uiActions.changeViewIndex(1));
      this.props.delayDispatch('categorySelect', index);
    }
    renderIcon(index){
      const fileName= ['infoIcon', 'blog', 'demo', 'projects', 'about'];
      return (<img
        height='32px'
        width='32px'
        src = {'../../../resources/'+fileName[index]+ '.png'}/>)
    }
    changeView(indexNum){
      this.props.resetAnim('stageIndex');
      return this.props.dispatch(uiActions.changeViewIndex(indexNum));
    }

    closeMenu(){
          return this.props.dispatch(uiActions.closeMenu());
    }

  openMenu(){
        return this.props.dispatch(uiActions.openMenu());
  }

  resetIt(){
    this.props.dispatch(uiActions.categorySelect(0));
    this.props.dispatch(uiActions.changeViewIndex(0));
    this.props.dispatch(uiActions.changeViewIndex(0));
    this.props.dispatch(uiActions.openMenu() );
  }

  renderMenu(){



    return(
        <div style={{
          width:'100%',
          height:'100%',
          display:"flex",
          flexDirection:'row'}}>


          <div style={{
            display:'flex',
            flexDirection:'row',
            flex:'1',
            width:'100%',
            height:'100%',
            justifyContent:'space-between'}}>




            {this.props.categories.map(
              (cat, index)=><div
                onClick={()=>this.categorySelect(index)}
                style={{
                  // background:`radial-gradient( ${uiActions.getColorCategory(index)}, ${uiActions.getColorCategory(index,'complColors')}`,
                  display:'flex',
                  flexDirection:'row',
                  flex:'1',
                  justifyContent:'space-around',
                  textAlign: 'center',
                  border: `1px solid ${uiActions.getColorCategory(index)}`,
                  borderRadius: '.5em',
                  color: index== this.props.categorySelected? '#fff': uiActions.getColorCategory(index),

                  backgroundColor: index== this.props.categorySelected? uiActions.getColorCategory(index):null,
                  overflow:'hidden'

                }}
                key={Math.random()}>
                    {this.props.menuOpen ? cat.toUpperCase(): this.renderIcon(index)}
              </div>
            )}

          </div>
          <div style={{
            display:"flex",
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
          }}>
            <img
              height='32px'
              width='32px'
              src='../../../resources/mail-envelope.png'/>
            <img
              height='32px'
              width='32px'
              src='../../../resources/github.png'/>
              <img
                height='32px'
                width='32px'
                src='../../../resources/linkedin.png'/>

            </div>
      </div>)

        }

    render(){
      console.log(this.props, "n props")
      const {menuOpen, stageIndex}= this.props;
          return(<Motion style={{x: spring(menuOpen ? 20 : 5)}}>
                  {({x}) =>
                    // children is a callback which should accept the current value of
                    // `style`

                      <div style={{
                        display:'flex',
                        flex:1,
                        flexDirection:'row',
                        height:'100%'

                      }} >
                      {this.renderMenu()}


                    </div>
                  }
                </Motion>

          )
        }
      }

export default Navigation;
