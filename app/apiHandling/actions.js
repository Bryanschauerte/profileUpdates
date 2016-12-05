export function requestData(){
  return {
    type:'REQUEST_DATA'
  }
}
export function receivedData(data){
  return {
    type: 'RECEIVE_DATA',
    data: data,
    receivedAt: Date.now()
  }
}

export function receivedError(error){
  return {
    type:'INVALIDATE_DATA',
    payload:error
  }
}
//will also be needing to add the adim reducer/actions
