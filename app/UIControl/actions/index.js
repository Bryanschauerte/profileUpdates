export function getColorCategory(index, colorType='standard'){
  const standard = [
    "#01b826", "#0B1968", "#0193b8", "#813772", "#b82601","#062f4f"];
    const compl = [
      "#056819", "#062f4f", "#2cd0f9", "#a56f9a", "#ff562b","#0B1968"];
      if(!index){
        return '#062f4f'
      }
  return colorType === 'standard' ? standard[index] : compl[index];
}

export function changeViewIndex(index){
  return {
    type:'CHANGE_STAGE',
    payload: index
  }
}

export function animateId(index){
  return {
    type:'ANIMATE_ID',
    payload: index
  }
}

export function stopAnimateId(index){
  return {
    type:'STOP_ANIMATE_ID',
    payload: index
  }
}

export function categorySelect(index){
  return {
    type:'CATEGORY_SELECT',
    payload: index
  }
}
export function openMenu(){
  return {
    type:'OPEN_MENU'
  }
}
export function closeMenu(){
  return {
    type:'CLOSE_MENU'
  }
}

export function hoverChange(animations){

console.log(animations, "animations add acrion")
  return {
    type:'ANIMATION_HOVER',
    payload: animations
  }
}
