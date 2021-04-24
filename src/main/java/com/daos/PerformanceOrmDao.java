package com.daos;

import com.models.Performance;
import com.repositories.PerformanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PerformanceOrmDao {
    @Autowired
    PerformanceRepository performanceRepository;

    @GetMapping("/api/performances")
    public List<Performance> findAllPerformances() {
        return performanceRepository.findAllPerformances();
    }

    @GetMapping("/api/performances/{performanceId}")
    public Performance findPerformanceById(
            @PathVariable("performanceId") Integer id) {
        return performanceRepository.findPerformanceById(id);
    }
}
