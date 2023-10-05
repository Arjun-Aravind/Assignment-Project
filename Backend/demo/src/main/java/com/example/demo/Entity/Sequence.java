package com.example.demo.Entity;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Document(collection = "sequence")
public class Sequence {
    @Id
    private String id;
    private final long value;

    public Sequence(String id, long value){
        this.id = id;
        this.value = value;
    }

}
