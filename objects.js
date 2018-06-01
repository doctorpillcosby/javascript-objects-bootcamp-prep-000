var playlist = {PhilOchis:}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 