import episodeService from "./episode-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear()

    return [year, month, day].join('-')
}

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        episodeService.findAllEpisodes()
            .then(episodes => setEpisodes(episodes))
    }, []);
    const history = useHistory();

    return (
        <div>
            <h2>Episodes List</h2>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/episodes/new/new")}
            >
                Add Episode
            </button>
            <table>
                <thead>
                <tr>
                    <th>Season</th>
                    <th>Episode</th>
                    <th>Date</th>
                    <th>isSpecial</th>
                    <th>isFinale</th>
                </tr>
                </thead>
                <tbody>
                {
                    episodes.map(episode =>
                        <tr>
                            <td>{episode.season}</td>
                            <td>{episode.episode}</td>
                            <td>{formatDate(episode.date)}</td>
                            <td>{episode.isSpecial ? "true" : "false"}</td>
                            <td>{episode.isFinale ? "true" : "false"}</td>
                            <td>
                                <Link to={`/episodes/${episode.season}/${episode.episode}`}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default EpisodeList;