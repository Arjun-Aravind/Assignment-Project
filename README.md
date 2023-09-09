# Assignment-Project

# Student Registration System

A simple web application for student registration, built using React.js for the frontend and Spring Boot with MongoDB for the backend.

Frontend Part - https://arjun-aravind.github.io/Assignment-Project/

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)


## Description

This project is designed to demonstrate a student registration system where users can register students with their information such as name, date of birth, class, division, and gender. The frontend is built using React.js, and the backend is implemented using Spring Boot with MongoDB as the database.

## Features

- Register new students with their details.
- View a list of registered students with their information.
- Validation and error handling for input data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Java Development Kit (JDK)
- MongoDB

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Arjun-Aravind/Assignment-Project.git
   cd Assignment-Project


## Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the frontend server:
   ```bash
   npm start

Access the frontend application at: http://localhost:3000

<br>


## Backend

1. Create an Account in Atlas Mongodb.
2. Create an Organization and create a Project.
3. Create a deployment and choose the free cluster in any cloud services.
4. Create an User and add your IP Address to the access list.
5. Click the connection method and choose connect using Compass and copy the connection string.
6. Create a new file named .env in the backend/demo/src/main/resources directory and copy the connection details in this format:
   ```bash
   MONGO_DATABASE="name of database you created"
   MONGO_USER="Your username"
   MONGO_PASSWORD="Password you created"
   MONGO_CLUSTER="Last part of the connection string you copied earlier. eg:"cluster0.abcdefg.mongodb.net""
7. Open a new terminal window.
8. Navigate to the backend directory and run the Spring Boot application:
   ```bash
   cd backend/demo
   ./mvnw spring-boot:run

The backend is accessible at: http://localhost:8080 - If Whitelabel errorpage appears it means that server is running.

Backend API - GET request to http://localhost:8080/api/v1/students
