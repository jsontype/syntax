export default {
  addShowCommit (state, data) {
    state.showList.push(data)
    localStorage.setItem('showList', JSON.stringify(state))
  },
  removeShowCommit (state, data) {
    const show = state.showList.find(showList => showList.id === data.id)
    if (show !== undefined) {
      state.showList.splice(state.showList.indexOf(data), 1)
    }
  },
  updateShowCommit (state, data) {
    const record = state.showList.find(showList => showList.id === data.id)
    state.showList[record] = data
  },
  addEpisodeCommit (state, data) {
    state.showList = state.showList.map((show) => {
      if (show.id === data.showId) {
        show.episodes.push(data.episodes)
      }
      return show
    })
  },
  removeEpisodeCommit (state, data) {
    state.showList = state.showList.map((show) => {
      const showdata = show.episodes.find(showList => showList.id === data.id)
      if (showdata !== undefined) {
        show.episodes.splice(show.episodes.indexOf(data.episodes))
      }
    })
  },
  updateEpisodeCommit (state, data) {
    const selectedShow = state.showList.findIndex((show) => show.id === data.showId)
    const selectedEp = state.showList[selectedShow].episodes.findIndex((ep) => ep.id === data.episodes.id)
    state.showList[selectedShow].episodes[selectedEp] = data.episodes
  }
}
