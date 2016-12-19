
const dataStatus = {

    isFetching: false,
    receivedData: false,
    error:null,
    allItems: [],
    aboutItems:[], //item.contentItems.type == 'about'
    blogItems:[],//item.contentItems.type == 'blog'
    bitsItems:[], //item.contentItems.type == 'bits'
    projectItems:[],//item.contentItems.type == 'project'
    descriptions:[],//item.contentItems.type == 'descriptions'
    otherItems:[]
}
export default function siteInfo(state = dataStatus, action){
  switch (action.type) {
    case 'REQUEST_PROFILE_DATA':
      return {...state, isFetching:true, error:null, receivedData:false, allItems:[]};
    case 'RECEIVE_PROFILE_DATA':
      let allItems = action.payload;
      let about=[];
      let blog=[];
      let bits =[];
      let project=[];
      let descriptions =[];
      let other = [];

      action.payload.map(item=>{

        switch (item.contentItems.type.toLowerCase()) {
          case 'about':
            return about.push(item);
            break;
          case 'bits':
            return bits.push(item);
            break;
          case 'blog':
            return blog.push(item);
            break;
          case 'project':
            return project.push(item);
            break;
          case 'descriptions':
            return descriptions.push(item);
            break;
          default:
            return other.push(item);
        }
      })

      return {
        ...state,
        allItems:allItems,
        aboutItems: about,
        blogItems: blog,
        bitsItems:bits,
        descriptions:descriptions,
        projectItems: project,
        otherItems: other,
        receivedData:true,
        isFetching:false
      }
    case 'INVALIDATE_DATA':
      return {...state, error: payload.error, isFetching:false, receivedData:false};
    default:
      return state
  }
}
