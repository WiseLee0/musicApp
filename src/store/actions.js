import *as types from './mutation-type'
import { shuffle } from 'common/js/util'
function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}
export const selectPlay = function ({ commit, state }, { list, index }) {
  commit(types.SET_SEQUENCELIST, list)
  if (state.mode === 2) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_CURRENTINDEX, index)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PlAYING, true)
}
export const randomPlay = function ({ commit }, { list }) {
  commit(types.SET_SEQUENCELIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_MODE, 2)
  commit(types.SET_CURRENTINDEX, 0)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PlAYING, true)
}