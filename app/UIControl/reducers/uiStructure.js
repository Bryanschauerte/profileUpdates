
const defaultState = {
  stages:[],
  stageIndex:0,
  categorySelected:null,
  previewIndex:null,
  catItemSelectedIndex:null,
  itemsForView:[],
  categories:[ 'about me', 'blogs', 'demos', 'projects', 'other', 'everything'],
  justLanded: true,
  showContact:false,
  navReduce:false,
  animations:{
    hover:null,
    rotate:null
  }
}

export default function uiStructure(state = defaultState, action){
   switch (action.type) {
    case "CHANGE_STAGE":

      return {...state, stageIndex:action.payload};
    case "CHANGE_CATEGORY_ITEMS":

      return {...state, itemsForView:action.payload};

    case "CONTENT_ITEM_PREVIEW":

      return {...state, previewIndex:action.payload};

    // case 'SELECT_MAIN_CONTENT_INDEX':
    //   return {...state, mainContentIndex:action.payload};

    case "CONTENT_ITEM_SELECT":

      return {...state, catItemSelectedIndex:action.payload};

    case "CONTENT_ITEM_RESET":

      return {...state, catItemSelectedIndex:null};

    case "CATEGORY_SELECT":

      return {...state, categorySelected:action.payload};

    case "ANIMATION_HOVER":

      let animations = state.animations;
      animations.hover = action.payload;
      return {...state, animations:animations};

    case "ANIMATION_ROTATE":

      let rotate = state.animations;
      rotate.rotate = action.payload;
      return {...state, animations:rotate};


    case "TOGGLE_NAV_REDUCE":
      return {...state, navReduce: !state.navReduce}

    case "GET_STAGE":
      return state;

    case "ADD_STAGE":
      let stateStages =state.stages;
      stateStages.push(action.payload)
      return {...state, stages: stateStages};

    case "REMOVE_STAGE":
      let changedStages =state.stages;
      if(changedStages.indexOf(action.payload) != -1){
          changedStages.splice(changedStages.indexOf(action.payload), 1);
      }
      return {...state, stages: changedStages};

    case "RESET_STAGES":
      return {...state, stages:[]};

    case "NOT_JUST_LANDED":

      return {...state, justLanded: false};

    case "JUST_LANDED":
      return {...state, justLanded:true};

    case "SHOW_CONTACT":

      return {...state, showContact: true};

    case "HIDE_CONTACT":
      return {...state, showContact:false};

    default:
      return state;

  }
}
