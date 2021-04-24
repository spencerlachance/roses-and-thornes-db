package com.daos;

import com.models.Artist;
import com.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArtistOrmDao {
    @Autowired
    ArtistRepository artistRepository;

    @GetMapping("/api/artists")
    public List<Artist> findAllArtists() {
        return artistRepository.findAllArtists();
    }

    @GetMapping("/api/artists/{artistId}")
    public Artist findArtistById(@PathVariable("artistId") Integer id) {
        return artistRepository.findArtistById(id);
    }
}
