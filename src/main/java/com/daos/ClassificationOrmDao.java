package com.daos;

import com.models.Classification;
import com.repositories.ClassificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClassificationOrmDao {
    @Autowired
    ClassificationRepository classificationRepository;

    @GetMapping("/api/classifications")
    public List<Classification> findAllClassifications() {
        return classificationRepository.findAllClassifications();
    }
}
