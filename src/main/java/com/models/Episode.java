package com.models;

import java.util.Date;
import javax.persistence.*;
import java.io.Serializable;


@Entity
@IdClass(EpisodeId  .class)
@Table(name="episodes")
public class Episode {
    @Id
    private Integer season;
    @Id
    private Integer episode;
    private Date date;
    private Boolean isFinale;
    private Boolean isSpecial;

    public Integer getSeason() { return season; }
    public void setSeason(Integer season) { this.season = season; }
    public Integer getEpisode() { return episode; }
    public void setEpisode(Integer episode) { this.episode = episode; }
    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }
    public Boolean getIsFinale() { return isFinale; }
    public void setIsFinale(Boolean isFinale) { this.isFinale = isFinale; }
    public Boolean getIsSpecial() { return isSpecial; }
    public void setIsSpecial(Boolean isSpecial) { this.isSpecial = isSpecial; }

    public Episode(Integer season, Integer episode, Date date, Boolean isFinale, Boolean isSpecial) {
        this.season = season;
        this.episode = episode;
        this.date = date;
        this.isFinale = isFinale;
        this.isSpecial = isSpecial;
    }

    public Episode() {}
}
