import episodeService from "./episode-service";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const EpisodeEditor = () => {
    const {season, episodeNum} = useParams();
    const [episode, setEpisode] = useState([]);
    const history = useHistory();
    var isNew = false;
    if(season == "new"){
        isNew = true;
    }
    useEffect(() => {
        if (season !== "new" && episodeNum !== "new") {
            findEpisodeById(season, episodeNum);
        }
    }, []);
    const findEpisodeById = (season, episode) =>
        episodeService.findEpisodeById(season, episode)
            .then(episodeNum => setEpisode(episodeNum));
    const deleteEpisode = (season, episode) =>
        episodeService.deleteEpisode(season, episode)
            .then(() => history.goBack());
    const createEpisode = (season, episode) =>
        episodeService.createEpisode(season, episode)
            .then(() => history.goBack());
    const updateEpisode = (season, episode, newEpisode) =>
        episodeService.updateEpisode(season, episode, newEpisode)
            .then(() => history.goBack());
    console.log(episode)
    return (
        <div>
            <h2>Episodes Editor</h2>

            <label>Season</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, season: e.target.value}))
                }
                value={episode.season ? episode.season : ""}
            />
            <br/>

            <label>Episode</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, episode: e.target.value}))
                }
                value={episode.episode ? episode.episode : ""}
            />
            <br/>

            <label>Date</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, date: e.target.value}))
                }
                value={episode.date ? formatDate(episode.date) : ""}
            />
            <br/>

            <label>isSpecial</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, isSpecial: e.target.value}))
                }
                value={episode.isSpecial}
            />
            <br/>

            <label>isFinale</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, isFinale: e.target.value}))
                }
                value={episode.isFinale}
            />
            <button
                className="btn btn-warning"
                onClick={() => history.goBack()}
            >
                Cancel
            </button>

            {!isNew &&
                [
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteEpisode(episode.season, episode.episodeNum)}
                    >
                        Delete
                    </button>,
                    <button
                        className="btn btn-primary"
                        onClick={() => updateEpisode(episode.season, episode.episodeNum)}
                    >
                        Save
                    </button>
                ]
            }

            {isNew &&
                <button
                    className="btn btn-success"
                    onClick={() => createEpisode(episode)}
                >
                    Create
                </button>
            }

        </div>
    )
}

export default EpisodeEditor