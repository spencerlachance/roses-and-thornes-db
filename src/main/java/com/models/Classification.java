package com.models;

import javax.persistence.*;

@Entity
@Table(name = "classifications")
public class Classification {
    @Id
    @Enumerated(EnumType.STRING)
    private ClassificationEnum classification;

    public Classification(String classification) {
        this.classification = ClassificationEnum.valueOf(classification);
    }

    public Classification() { }

    public String getClassification() {
        return classification.toString();
    }

    public void setClassification(String classification) {
        this.classification = ClassificationEnum.valueOf(classification);
    }
}
