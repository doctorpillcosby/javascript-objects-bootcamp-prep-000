var playlist = {Slowdive: 'Phil Ochs'}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 