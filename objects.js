var playlist = {PhilOchis: 'Slow Drive'}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 