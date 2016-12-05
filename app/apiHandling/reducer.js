

function siteInfo(state = {
  isFetching: false,
  receivedData: false,
  error:null,
  items: []
}, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {...state, isFetching:true}
    case 'RECEIVE_DATA':
      return {...state, items:action.payload, isFetching:false}
    case 'INVALIDATE_DATA':
      return {...state, error: payload.error}
    default:
      return state
  }
}


export default siteInfo
