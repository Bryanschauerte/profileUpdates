import React from 'react';


class ImageSlider extends React.Component{
constructor(props){
  super(props);
  this.state = {
    currentIndex:0,
    imageHovering: false,
    isLoaded:null
  }
  this._handleLeftClick = this._handleLeftClick.bind(this);
  this._handleRightClick = this._handleRightClick.bind(this);
  this._changeLoadState = this._changeLoadState.bind(this);
}


_handleLeftClick(){
  let index = this.state.currentIndex;
  index == 0?
    this.setState({currentIndex:this.props.images.length-1})
    :this.setState({currentIndex:index-=1})
}
_handleRightClick(){
  let index = this.state.currentIndex;
  index == this.props.images.length-1?
    this.setState({currentIndex:0})
    :this.setState({currentIndex:index+=1})
}
_changeLoadState(){
  this.setState({ isLoaded: true });
}


  render(){


    return( <div className="imageSliderContainer" >


            <img
              className="sliderArrow"
              onClick={this._handleRightClick}
              src='/arrow-left.png'/>


            <img
              className="sliderImage"
              onLoad={this._changeLoadState}
              src={this.props.images[this.state.currentIndex]} />


             <img
               className="sliderArrow"
               onClick={this._handleRightClick}
               src='/arrow-right.png'/>

           </div>
     )
  }
}
export default ImageSlider;
