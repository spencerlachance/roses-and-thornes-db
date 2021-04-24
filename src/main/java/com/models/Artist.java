package com.models;

import javax.persistence.*;

@Entity
@Table(name = "artists")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public Artist(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Artist() { }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
