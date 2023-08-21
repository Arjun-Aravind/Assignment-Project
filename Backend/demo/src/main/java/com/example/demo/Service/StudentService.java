package com.example.demo.Service;

import com.example.demo.Entity.Student;
import com.example.demo.Repo.StudentRepo;
import com.example.demo.Repo.SequenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepo repo;
    private final DbSequenceGenerator sequenceGenerator;

    @Autowired
    public StudentService(StudentRepo repo, DbSequenceGenerator sequenceGenerator) {
        this.repo = repo;
        this.sequenceGenerator = sequenceGenerator;
    }

    public Student addStudent(Student student) {
        String admissionNumber = sequenceGenerator.generateAdmissionNumber();
        student.setAdmissionNumber(admissionNumber);
        repo.save(student);
        return student;
    }

    public List<Student> getAllStudents() {

        return this.repo.findAll();
    }
}
