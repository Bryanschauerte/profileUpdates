export function getColorCategory(index, colorType='standard'){

  const standard = [
    "#01b826", "#0B1968", "#0193b8", "#813772", "#b82601","#062f4f"];
    const compl = [
      "#056819", "#062f4f", "#2cd0f9", "#a56f9a", "#ff562b","#0B1968"];
      if(!index && index!==0){
        return '#062f4f'
      }
  return colorType === 'standard' ? standard[index] : compl[index];
}

export function changeStageIndex(index){
  return {
    type:'CHANGE_STAGE',
    payload: index
  }
}
export function selectContentItem(index){
  return {
    type:'CONTENT_ITEM_SELECT',
    payload: index
  }
}
selectMain
export function selectMain(index){
  return {
    type:'SELECT_MAIN_CONTENT_INDEX',
    payload: index
  }
}
export function contentItemReset(){
  return {
    type:'CONTENT_ITEM_RESET'
  }
}

export function previewItem(index){
  return {
    type:'CONTENT_ITEM_PREVIEW',
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

  return {
    type:'ANIMATION_HOVER',
    payload: animations
  }
}

export function toggleNavReduce(){

  return {
    type:'TOGGLE_NAV_REDUCE'
  }
}
export function addStage(){

  return {
    type:'ADD_STAGE'
  }
}
export function removeStage(stage){

  return {
    type:'REMOVE_STAGE',
    payload:stage
  }
}
export function resetStages(){

  return {
    type:'RESET_STAGES'
  }
}
