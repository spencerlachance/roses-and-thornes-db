package com.repositories;

import com.models.Performance;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PerformanceRepository
        extends CrudRepository<Performance, Integer> {
    @Query(value = "SELECT * FROM performances", nativeQuery = true)
    List<Performance> findAllPerformances();

    @Query(value = "SELECT * FROM performances WHERE id=:performanceId",
            nativeQuery = true)
    Performance findPerformanceById(@Param("performanceId") Integer id);
}
