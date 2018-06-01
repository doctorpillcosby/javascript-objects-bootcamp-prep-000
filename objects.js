var playlist = {Phil Ochs: 'Chop Suey'}

function updatePlaylist (object, name, title){
  
  Object.assign({}, playlist, {[name]: title})
  
}

updatePlaylist() 