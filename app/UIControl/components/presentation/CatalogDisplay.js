import React, {Component} from 'react';
import DisplaySingleItem from '../DisplaySingleItem';


class CatalogDisplay extends Component{
  constructor(props){
    super(props);
    this.createRow = this.createRow.bind(this);
    this.hoverItem = this.hoverItem.bind(this);
    this.stopHoverItem = this.stopHoverItem.bind(this);

  }

      hoverItem(hoverID){
        event.preventDefault();
        const reset = null;
         this.props.dispatch(this.props.uiActions.hoverChange(reset) );
        return this.props.dispatch(this.props.uiActions.hoverChange(hoverID));

      }
      stopHoverItem(){
        const hoverID = null;
        return this.props.dispatch(this.props.uiActions.hoverChange(hoverID) );
      }

    createRow(itemsArr){
      let rows=[]
      for (let x = 0; x<itemsArr.length+1; x+=2){
        if(itemsArr[x+1] && itemsArr[x]){

            rows.push(<div key={Math.random()} style={{display:'flex', flex:1, height:'100%', flexDirection:'row'}}>
              <div style={{display:'flex', flex:1, height:'100%', position:'relative'}}>
                <DisplaySingleItem activeHover={this.props.hoveringID == x} handleMouseEnter={this.hoverItem.bind(this, x)} handleMouseLeave={this.stopHoverItem} fillColor={this.props.uiActions.getColorCategory(x)} displayItem={itemsArr[x]}/>
              </div>
              <div style={{display:'flex', flex:1, height:'100%', position:'relative'}}>
                <DisplaySingleItem activeHover={this.props.hoveringID == x+1} handleMouseEnter={this.hoverItem.bind(this, x+1)} handleMouseLeave={this.stopHoverItem} fillColor={this.props.uiActions.getColorCategory(x+1)} displayItem={itemsArr[x+1]}/>
              </div>
            </div>)
          }
          if(!itemsArr[x+1] && itemsArr[x]){

            rows.push(<div key={Math.random()} style={{display:'flex', height:'100%', flex:1, flexDirection:'row'}}>
              <div style={{display:'flex', flex:1, position:'relative', height:'100%', backgroundColor:this.props.uiActions.getColorCategory(x)}}>
                <DisplaySingleItem activeHover={this.props.hoveringID == x} handleMouseEnter={this.hoverItem.bind(this, x)} handleMouseLeave={this.stopHoverItem} fillColor={this.props.uiActions.getColorCategory(x)} displayItem={itemsArr[x]}/>
              </div>
            </div>)
          }
      }

      return rows;
    }
    render(){
        return (  <div style={{
            display:"flex",
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center'

          }}>

{this.props.categories? this.createRow(this.props.categories): null}
          </div>)

        }
      }
    export default CatalogDisplay;
