import episodeService from "./episode-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

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
            <button className="btn btn-primary" onClick={() => history.push("/episodes/new/new")}>
                Add Episode
            </button>
            <ul className="list-group">
                {
                    episodes.map(episode =>
                        <li key={episode.season + "-" + episode.episode}>
                            <Link to={`/episodes/${episode.season}/${episode.episode}`}>
                                {episode.season} {episode.episode}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default EpisodeList;