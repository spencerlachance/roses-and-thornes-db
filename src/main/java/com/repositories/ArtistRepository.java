package com.repositories;

import com.models.Artist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArtistRepository extends CrudRepository<Artist, Integer> {
    @Query(value = "SELECT * FROM artists", nativeQuery = true)
    List<Artist> findAllArtists();
    
    @Query(value = "SELECT * FROM artists WHERE id=:artistId",
            nativeQuery = true)
    Artist findArtistById(@Param("artistId") Integer id);
}
