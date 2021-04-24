package com.models;

import javax.persistence.*;

@Entity
@Table(name = "albums")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer year;

    public Album(Integer id, String title, Integer year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }

    public Album() { }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getYear() {
        return year;
    }
}
