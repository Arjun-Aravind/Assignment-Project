package com.example.demo.Entity;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Document(collection = "sequence")
public class Sequence {
    @Id
    private String id;
    private long value;

    public Sequence(String id, long value){
        this.id = id;
        this.value = value;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setValue(long value) {
        this.value = value;
    }

}
