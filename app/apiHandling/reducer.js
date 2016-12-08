
const dataStatus = {

    isFetching: false,
    receivedData: false,
    error:null,
    allItems: [],
    aboutItems:[], //item.contentItems.type == 'About'
    blogItems:[],//item.contentItems.type == 'Blog'
    demoItems:[], //item.contentItems.type == 'Demo'
    projectItems:[],//item.contentItems.type == 'Project'
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
      let demo =[];
      let project=[];
      let other =[];

      action.payload.map(item=>{

        switch (item.contentItems.type.toLowerCase()) {
          case 'about':
            return about.push(item);
            break;
          case 'demo':
            return blog.push(item);
            break;
          case 'blog':
            return demo.push(item);
            break;
          case 'project':
            return project.push(item);
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
        demoItems:demo,
        otherItems:other,
        projectItems: project,
        receivedData:true,
        isFetching:false
      }
    case 'INVALIDATE_DATA':
      return {...state, error: payload.error, isFetching:false, receivedData:false};
    default:
      return state
  }
}
