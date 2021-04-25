package com.daos;

import com.models.Selection;
import com.repositories.SelectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SelectionOrmDao {
    @Autowired
    SelectionRepository selectionRepository;

    @PostMapping("/api/selections")
    public Selection createSelection(@RequestBody Selection selection) {
        return selectionRepository.save(selection);
    }

    @GetMapping("/api/selections")
    public List<Selection> findAllSelections() {
        return selectionRepository.findAllSelections();
    }

    @GetMapping("/api/selections/{selectionId}")
    public Selection findSelectionById(
            @PathVariable("selectionId") Integer id) {
        return selectionRepository.findSelectionById(id);
    }
    @GetMapping("/api/selections/{seasonId}/{episodeId}")
    public List<Selection> findSelectionBySeasonEpisode(
            @PathVariable("seasonId") Integer season, @PathVariable("episodeId") Integer episode) {
        return selectionRepository.findSelectionsBySeasonEpisode(season, episode);
    }

    @PutMapping("/api/selections/{selectionId}")
    public Selection updateSelection(
            @PathVariable("selectionId") Integer id,
            @RequestBody Selection selectionUpdates) {
        Selection newSelection = selectionRepository.findSelectionById(id);
        newSelection.setUserId(selectionUpdates.getUserId());
        newSelection.setSongId(selectionUpdates.getSongId());
        newSelection.setSeason(selectionUpdates.getSeason());
        newSelection.setEpisode(selectionUpdates.getEpisode());
        newSelection.setClassification(selectionUpdates.getClassification());
        return selectionRepository.save(newSelection);
    }

    @DeleteMapping("/api/selections/{selectionId}")
    public void deleteSelection(@PathVariable("selectionId") Integer id) {
        selectionRepository.deleteById(id);
    }
}
