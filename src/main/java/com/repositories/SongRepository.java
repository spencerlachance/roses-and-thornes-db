package com.repositories;

import com.models.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SongRepository extends CrudRepository<Song, Integer> {
    @Query(value = "SELECT * FROM songs", nativeQuery = true)
    List<Song> findAllSongs();

    @Query(value = "SELECT * FROM songs WHERE id=:songId", nativeQuery = true)
    Song findSongById(@Param("songId") Integer id);
}
