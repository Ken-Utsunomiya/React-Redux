import { combineReducers} from 'redux'

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'All', duration: '2:30'},
    { title: 'Every Start', duration: '1:00'},
    { title: 'I want', duration: '3:50'}
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
