import episodeService from "./episode-service";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear()

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-')
}

const EpisodeEditor = () => {
    const {season, episodeNum} = useParams();
    const [episode, setEpisode] = useState([]);
    const history = useHistory();
    let isNew = false;
    if (season === "new") {
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
    const createEpisode = (season, episode, newEpisode) =>
        episodeService.createEpisode(season, episode, newEpisode)
            .then(() => history.goBack());
    const updateEpisode = (season, episode, newEpisode) =>
        episodeService.updateEpisode(season, episode, newEpisode)
            .then(() => history.goBack());

    return (
        <div>
            <h2>Episode Editor</h2>

            <label>Season</label>
            <input
                className="form-control"
                readOnly={!isNew}
                onChange={(e) =>
                    setEpisode(episode => ({...episode, season: e.target.value}))
                }
                value={episode.season ? episode.season : ""}
            />
            <br/>

            <label>Episode</label>
            <input
                className="form-control"
                readOnly={!isNew}
                onChange={(e) =>
                    setEpisode(episode => ({...episode, episode: e.target.value}))
                }
                value={episode.episode ? episode.episode : ""}
            />
            <br/>

            <label>Date (yyyy-mm-dd)</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, date: e.target.value}))
                }
                defaultValue={episode.date ? formatDate(episode.date) : ""}
            />
            <br/>

            <input
                type="checkbox"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, isSpecial: !episode.isSpecial}))
                }
                checked={episode.isSpecial}
            />
            <label style={{margin: '10px'}}>isSpecial</label>
            <br/>
            <br/>

            <input
                type="checkbox"
                onChange={(e) =>
                    setEpisode(episode => ({...episode, isFinale: !episode.isFinale}))
                }
                checked={episode.isFinale}
            />
            <label style={{margin: '10px'}}>isFinale</label>
            <br/>
            <br/>

            {episode.episode && [
                <a href={`${parentURL}/selections.html#/selections/${episode.season}/${episode.episode}`}>
                    This Episode's Selections
                </a>,
                <br/>
            ]}
            <br/>

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
                        onClick={() => deleteEpisode(episode.season, episode.episode)}
                    >
                        Delete
                    </button>,
                    <button
                        className="btn btn-primary"
                        onClick={() => updateEpisode(episode.season, episode.episode, episode)}
                    >
                        Save
                    </button>
                ]
            }

            {isNew &&
                <button
                    className="btn btn-success"
                    onClick={() => createEpisode(episode.season, episode.episode, episode)}
                >
                    Create
                </button>
            }

        </div>
    )
}

export default EpisodeEditor