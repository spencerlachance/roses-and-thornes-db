const SELECTIONS_URL = "http://localhost:8080/api/selections"
const USERS_URL = "http://localhost:8080/api/users"
const SONGS_URL = "http://localhost:8080/api/songs"
const ALBUMS_URL = "http://localhost:8080/api/albums"
const PERFORMANCES_URL = "http://localhost:8080/api/performances"
const ARTISTS_URL = "http://localhost:8080/api/artists"
const CLASSIFICATIONS_URL = "http://localhost:8080/api/classifications"

export const findAllSelections = () =>
    fetch(SELECTIONS_URL)
        .then(response => response.json())

export const findSelectionById = (id) =>
    fetch(`${SELECTIONS_URL}/${id}`)
        .then(response => response.json())

export const findSelectionBySeasonEpisode = (season, episode) =>
    fetch(`${SELECTIONS_URL}/${season}/${episode}`)
        .then(response => response.json())

export const findSelectionsByUserId = userId =>
    fetch(`${SELECTIONS_URL}/user/${userId}`)
        .then(response => response.json())

export const deleteSelection = (id) =>
    fetch(`${SELECTIONS_URL}/${id}`, {method: "DELETE"})

export const createSelection = (selection) =>
    fetch(SELECTIONS_URL, {
        method: 'POST',
        body: JSON.stringify(selection),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const updateSelection = (id, selection) =>
    fetch(`${SELECTIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(selection),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const findAllUsers = () =>
    fetch(USERS_URL).then(response => response.json())

export const findAllSongs = () =>
    fetch(SONGS_URL).then(response => response.json())

export const findAllPerformances = () =>
    fetch(PERFORMANCES_URL).then(response => response.json())

export const findAllArtists = () =>
    fetch(ARTISTS_URL).then(response => response.json())

export const findAllAlbums = () =>
    fetch(ALBUMS_URL).then(response => response.json())

export const findAllClassifications = () =>
    fetch(CLASSIFICATIONS_URL).then(response => response.json())

export default {
    findAllSelections,
    findSelectionById,
    findSelectionBySeasonEpisode,
    findSelectionsByUserId,
    deleteSelection,
    createSelection,
    updateSelection,
    findAllUsers,
    findAllSongs,
    findAllPerformances,
    findAllArtists,
    findAllAlbums,
    findAllClassifications
}
