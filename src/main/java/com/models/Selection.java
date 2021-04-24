package com.models;

import javax.persistence.*;

@Entity
@Table(name = "selections")
public class Selection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private Integer songId;
    private Integer season;
    private Integer episode;
    @Enumerated(EnumType.STRING)
    private Classification classification;

    public Selection(Integer userId, Integer songId, Integer season,
                     Integer episode, Classification classification) {
        this.userId = userId;
        this.songId = songId;
        this.season = season;
        this.episode = episode;
        this.classification = classification;
    }

    public Selection() { }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSongId() {
        return songId;
    }

    public void setSongId(Integer songId) {
        this.songId = songId;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public Integer getEpisode() {
        return episode;
    }

    public void setEpisode(Integer episode) {
        this.episode = episode;
    }

    public Classification getClassification() {
        return classification;
    }

    public void setClassification(Classification classification) {
        this.classification = classification;
    }
}
