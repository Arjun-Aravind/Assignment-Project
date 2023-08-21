package com.example.demo.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.Entity.Sequence;
//import javax.sound.midi.Sequence;

public interface SequenceRepo extends MongoRepository<Sequence, String> {
}
