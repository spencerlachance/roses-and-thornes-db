import selectionService from "./selection-service"

const {Component} = React;

class SelectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: [],
            userIdToName: {},
            songIdToTitle: {},
            songIdToArtistIds: {},
            artistIdToName: {},
            ArtistIdToName: {},
            songIdToAlbumId: {},
            albumIdToTitle: {},
            albumIdToYear: {},
        }
    }

    componentDidMount() {
        selectionService.findAllSelections()
            .then(selections => this.setState({selections: selections}))
        selectionService.findAllUsers()
            .then(usersList => this.parseUsers(usersList))
        selectionService.findAllPerformances()
            .then(performancesList => this.parsePerformances(performancesList))
        selectionService.findAllArtists()
            .then(artistsList => this.parseArtists(artistsList))
        selectionService.findAllSongs()
            .then(songsList => this.parseSongs(songsList))
        selectionService.findAllAlbums()
            .then(albumsList => this.parseAlbums(albumsList))
    }

    parseUsers(usersList) {
        // Convert the list of users to a state object that maps IDs to user
        // first names
        let namesObj = {}
        for (let i = 0; i < usersList.length; i++) {
            let user = usersList[i]
            namesObj[user.id] = user.firstName
        }
        this.setState({userIdToName: namesObj})
    }

    parseSongs(songsList) {
        // Convert the list of songs to state objects that map song IDs to song
        // titles and album IDs
        let titlesObj = {}
        let albumsObj = {}
        for (let i = 0; i < songsList.length; i++) {
            let song = songsList[i]
            titlesObj[song.id] = song.title
            albumsObj[song.id] = song.albumId
        }
        this.setState({songIdToTitle: titlesObj, songIdToAlbumId: albumsObj})
    }

    parsePerformances(performancesList) {
        // Convert the list of performances to a state object that maps song IDs
        // to artist IDs
        let songArtistMapping = {}
        for (let i = 0; i < performancesList.length; i++) {
            let performance = performancesList[i]
            let mappingEntry = songArtistMapping[performance.songId]
            if (mappingEntry) {
                mappingEntry.push(performance.artistId)
                songArtistMapping[performance.songId] = mappingEntry
            } else {
                songArtistMapping[performance.songId] = [performance.artistId]
            }
        }
        this.setState({songIdToArtistIds: songArtistMapping})
    }

    parseArtists(artistsList) {
        // Convert the list of artist to a state object that maps artist IDs to
        // names
        let namesObj = {}
        for (let i = 0; i < artistsList.length; i++) {
            let artist = artistsList[i]
            namesObj[artist.id] = artist.name
        }
        this.setState({artistIdToName: namesObj})
    }

    parseAlbums(albumsList) {
        // Convert the list of albums to state objects that map album IDs to
        // album titles and years
        let titlesObj = {}
        let yearsObj = {}
        for (let i = 0; i < albumsList.length; i++) {
            let album = albumsList[i]
            titlesObj[album.id] = album.title
            yearsObj[album.id] = album.year
        }
        this.setState({albumIdToTitle: titlesObj, albumIdToYear: yearsObj})
    }

    getArtists(songId) {
        let artistIDs = this.state.songIdToArtistIds[songId]
        if (artistIDs) {
            let artists = artistIDs.map(artistId => this.state.artistIdToName[artistId])
            return artists.join(', ')
        } else {
            return ''
        }
    }

    getAlbumTitle(songId) {
        let albumId = this.state.songIdToAlbumId[songId]
        return this.state.albumIdToTitle[albumId]
    }

    getAlbumYear(songId) {
        let albumId = this.state.songIdToAlbumId[songId]
        return this.state.albumIdToYear[albumId]
    }

    render() {
        return (
            <div>
                <h2>Selection List</h2>
                <button
                    className="btn btn-primary"
                    // TODO: onClick={}
                >
                    Add Selection
                </button>
                <table style={{width: '100%'}}>
                    <thead>
                    <tr>
                        <th>Season</th>
                        <th>Episode</th>
                        <th>Artist(s)</th>
                        <th>Song</th>
                        <th>Album</th>
                        <th>Year</th>
                        <th>User</th>
                        <th>Classification</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.selections.map(selection =>
                                <tr key={selection.id}>
                                    <td>{selection.season}</td>
                                    <td>{selection.episode}</td>
                                    <td>{this.getArtists(selection.songId)}</td>
                                    <td>{this.state.songIdToTitle[selection.songId]}</td>
                                    <td>{this.getAlbumTitle(selection.songId)}</td>
                                    <td>{this.getAlbumYear(selection.songId)}</td>
                                    <td>{this.state.userIdToName[selection.userId]}</td>
                                    <td>{selection.classification}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SelectionList;