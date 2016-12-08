export function requestProfileData(){
  return {
    type:'REQUEST_PROFILE_DATA'
  }
}
export function receivedProfileData(profileItems){
  return {
    type: 'RECEIVE_PROFILE_DATA',
    payload: profileItems
  }
}

export function receivedError(error){
  return {
    type:'INVALIDATE_DATA',
    payload:error
  }
}
//will also be needing to add the adim reducer/actions
