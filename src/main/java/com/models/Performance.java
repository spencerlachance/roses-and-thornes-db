package com.models;

import javax.persistence.*;

@Entity
@Table(name = "performances")
public class Performance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer songId;
    private Integer artistId;

    public Performance(Integer id, Integer songId, Integer artistId) {
        this.id = id;
        this.songId = songId;
        this.artistId = artistId;
    }

    public Performance() { }

    public Integer getId() {
        return id;
    }

    public Integer getSongId() {
        return songId;
    }

    public Integer getArtistId() {
        return artistId;
    }
}
