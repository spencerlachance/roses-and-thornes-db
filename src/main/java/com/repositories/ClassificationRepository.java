package com.repositories;

import com.models.Classification;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClassificationRepository
        extends CrudRepository<Classification, String> {
    @Query(value = "SELECT * FROM classifications", nativeQuery = true)
    List<Classification> findAllClassifications();
}
