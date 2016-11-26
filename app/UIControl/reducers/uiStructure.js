
const defaultState = {
  stages:['landing'],
  stageIndex:0,
  categorySelected:null,
  categories:[ 'blogs', 'demos', 'projects','about me'],
  menuOpen:true,
  animations:{
    hover:null
  },
  animateId: null
}

export default function uiStructure(state = defaultState, action){
   switch (action.type) {
    case "CHANGE_STAGE":

      return {...state, stageIndex:action.payload};

    case "OPEN_MENU":

      return {...state, menuOpen: true};



    case "CATEGORY_SELECT":

      return {...state, categorySelected:action.payload};

    case "ANIMATION_HOVER":
    console.log('add reducer', action.payload)
    let animations = state.animations;
    animations.hover = action.payload;

      return {...state, animations:animations};



    case "GET_STAGE":
      return state;
    case "CLOSE_MENU":
      return {...state, menuOpen:false};

    default:
      return state;

  }
}
