var playlist = {Phil_Ochs: 'Slowdive'}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 