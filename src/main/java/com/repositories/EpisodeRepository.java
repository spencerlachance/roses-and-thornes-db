package com.repositories;

import java.util.List;

import com.models.Episode;
import com.models.EpisodeId;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface EpisodeRepository
    extends CrudRepository<Episode, EpisodeId> {
        
    @Query(value = "SELECT * FROM episodes", nativeQuery = true)
    List<Episode> findAllEpisodes();
    @Query(value = "SELECT * FROM episodes WHERE episode=:episodeNum AND season=:seasonNum", nativeQuery = true)
    Episode findEpisodeById(@Param("episodeNum") Integer e, @Param("seasonNum") Integer s);
}
