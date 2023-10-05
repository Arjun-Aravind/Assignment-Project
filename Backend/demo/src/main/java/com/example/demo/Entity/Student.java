package com.example.demo.Entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Student")
public class Student {


    @Id
    private String id;

    @NotBlank(message = "Name is required")
    @Pattern(regexp = "^[A-Za-z ]+$", message = "Name should contain only letters and spaces")
    private String name;

    @NotBlank(message = "Date of Birth is required")
    private String dob;

    @NotBlank(message = "Class is required")
    private String classValue;

    @NotBlank(message = "Division is required")
    private String division;

    @NotBlank(message = "Gender is required")
    private String gender;

    private String admissionNumber;

    public void setAdmissionNumber(String admissionNumber) {
        this.admissionNumber = admissionNumber;
    }
}