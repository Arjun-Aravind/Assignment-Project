package com.example.demo.Service;

import com.example.demo.Entity.Sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

//import javax.sound.midi.Sequence;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
public class DbSequenceGenerator {

    private final MongoOperations mongoOperations;
    private Sequence sequence;

    @Autowired
    public DbSequenceGenerator(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public String generateAdmissionNumber() {
        long nextValue = getNextSequence();
        return "R-" + String.format("%03d", nextValue);
    }

    private long getNextSequence(){
        Query query = new Query(Criteria.where("_id").is("admission"));
        Update update = new Update().inc("value", 1);
        FindAndModifyOptions options = FindAndModifyOptions.options().returnNew(true).upsert(true);

        Sequence sequence = mongoOperations.findAndModify(query, update, options, Sequence.class, "sequence");

        return (sequence != null) ? sequence.getValue() : 0L;
    }

}