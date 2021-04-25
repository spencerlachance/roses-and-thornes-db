package com.repositories;

import com.models.Selection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SelectionRepository
        extends CrudRepository<Selection, Integer> {
    @Query(value = "SELECT * FROM selections", nativeQuery = true)
    List<Selection> findAllSelections();

    @Query(value = "SELECT * FROM selections WHERE id=:selectionId",
            nativeQuery = true)
    Selection findSelectionById(@Param("selectionId") Integer id);

    @Query(value = "SELECT * FROM selections WHERE season=:seasonId AND episode=:episodeId", nativeQuery = true)
    List<Selection> findSelectionsBySeasonEpisode(@Param("seasonId") Integer season, @Param("episodeId") Integer episode);
}
