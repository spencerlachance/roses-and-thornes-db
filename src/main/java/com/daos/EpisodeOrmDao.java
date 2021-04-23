package com.daos;

import com.models.Episode;
import com.repositories.EpisodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EpisodeOrmDao {
    @Autowired
    EpisodeRepository episodeRepository;

    @PostMapping("/api/episodes")
    public Episode creatEpisode(@RequestBody Episode episode) {
        return episodeRepository.save(episode);
    }
    
    @GetMapping("/api/episodes")
    public List<Episode> findAllEpisodes() {
        return episodeRepository.findAllEpisodes();
    }
    
    @GetMapping("/api/episodes/{season}/{episode}")
    public Episode findEpisode(
            @PathVariable("season") Integer season,
            @PathVariable("episode") Integer episode) {
        return episodeRepository.findEpisodeById(episode, season);
    }
    
    @PutMapping("/api/episodes/{season}/{episode}")
    public Episode updateEpisode(
            @PathVariable("season") Integer season,
            @PathVariable("episode") Integer episode,
            @RequestBody Episode episodeUpdates) {
        Episode newEpisode = episodeRepository.findEpisodeById(episode,season);
        if(newEpisode == null){
            newEpisode = new Episode();
        }
        newEpisode.setSeason(episodeUpdates.getSeason());
        newEpisode.setEpisode(episodeUpdates.getEpisode());
        newEpisode.setDate(episodeUpdates.getDate());
        newEpisode.setIsFinale(episodeUpdates.getIsFinale());
        newEpisode.setIsSpecial(episodeUpdates.getIsSpecial());
        return episodeRepository.save(newEpisode);
    }
    
    @DeleteMapping("/api/episodes/{season}/{episode}")
    public void deleteEpisode(
        @PathVariable("season") Integer season,
        @PathVariable("episode") Integer episode) {
        episodeRepository.delete(episodeRepository.findEpisodeById(episode,season));
    }
}