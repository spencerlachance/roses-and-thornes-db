package com.daos;

import com.models.Song;
import com.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongOrmDao {
    @Autowired
    SongRepository songRepository;

    @GetMapping("/api/songs")
    public List<Song> findAllSongs() {
        return songRepository.findAllSongs();
    }

    @GetMapping("/api/songs/{songId}")
    public Song findSongById(@PathVariable("songId") Integer id) {
        return songRepository.findSongById(id);
    }
}
