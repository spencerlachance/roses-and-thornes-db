package com.models;

import java.io.Serializable;

public class EpisodeId implements Serializable {

    private Integer season;
    private Integer episode;

    public EpisodeId(Integer season, Integer episode) {
        this.season = season;
        this.episode = episode;
    }

    public EpisodeId() {}
}