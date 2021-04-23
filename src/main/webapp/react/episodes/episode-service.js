const EPISODES_URL = "http://localhost:8080/api/episodes"

export const findAllEpisodes = () =>
    fetch(EPISODES_URL)
        .then(response => response.json())

export const findEpisodeById = (season, episode) =>
    fetch(`${EPISODES_URL}/${season}/${episode}`)
        .then(response => response.json())

export const deleteEpisode = (season, episode) =>
    fetch(`${EPISODES_URL}/${season}/${episode}`, {method: "DELETE"})

export const createEpisode = (season, episodeNum, episode) =>
    fetch(`${EPISODES_URL}/${season}/${episodeNum}`, {
        method: 'PUT',
        body: JSON.stringify(episode),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const updateEpisode = (season, episodeNum, episode) =>
    fetch(`${EPISODES_URL}/${season}/${episodeNum}`, {
        method: 'PUT',
        body: JSON.stringify(episode),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export default {
    findAllEpisodes,
    findEpisodeById,
    deleteEpisode,
    createEpisode,
    updateEpisode
}
