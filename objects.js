var playlist = {Slowdive: 'Phil Ochs', 'My Bloody Valentine'}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 