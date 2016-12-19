export function getColorCategory(index, colorType='standard'){

  const standard = [
     "#0193b8", "#813772", "#b82601","#062f4f", "#01b826", "#0B1968"];
    const compl = [
       "#2cd0f9", "#a56f9a", "#ff562b","#0B1968", "#056819", "#062f4f"];
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
export function aboutAnimation(shouldAni){
  return {
    type:'ANIMATE_ABOUT',
    payload: shouldAni
  }
}
export function rotateItem(item){
  return {
    type:'ANIMATION_ROTATE',
    payload: item
  }
}
export function slideArray(arr){
  return {
    type:'ANIMATION_SLIDE_IN_ADD',
    payload: arr
  }
}
export function slideItemRemove(){
  return {
    type:'ANIMATION_SLIDE_IN_REMOVE'
  }
}
export function selectContentItem(index){
  return {
    type:'CONTENT_ITEM_SELECT',
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
export function justLanded(){
  return {
    type:'JUST_LANDED'
  }
}
export function notJustLanded(){
  return {
    type:'NOT_JUST_LANDED'
  }
}

export function showContact(){
  return {
    type:'SHOW_CONTACT'
  }
}
export function hideContact(){
  return {
    type:'HIDE_CONTACT'
  }
}
export function hoverChange(hoverID){

  return {
    type:'ANIMATION_HOVER',
    payload: hoverID
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

export function changeCategoryItems(itemsArr) {
  return {
    type:'CHANGE_CATEGORY_ITEMS',
    payload: itemsArr
  }
}
