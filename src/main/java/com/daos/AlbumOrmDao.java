package com.daos;

import com.models.Album;
import com.repositories.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumOrmDao {
    @Autowired
    AlbumRepository albumRepository;

    @GetMapping("/api/albums")
    public List<Album> findAllAlbums() {
        return albumRepository.findAllAlbums();
    }

    @GetMapping("/api/albums/{albumId}")
    public Album findAlbumById(@PathVariable("albumId") Integer id) {
        return albumRepository.findAlbumById(id);
    }
}
