package com.models;

import javax.persistence.*;

@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer albumId;

    public Song(Integer id, String title, Integer albumId) {
        this.id = id;
        this.title = title;
        this.albumId = albumId;
    }

    public Song() { }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getAlbumId() {
        return albumId;
    }
}
