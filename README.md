# CovidSpringDashboard

This project will incorporate the functionality of my spring-image-server and rebuild the client using Angular 16. I am also loading the full COVID county daily dataset onto a AWS RDS MySql instance which will be available through Spring Boot JPA services. Eventually I will be adding an interactive graphing capability.

## Phase 1 - *Complete*

Migrate dataset from to RDBMS. CovidDashboard Python code is modified to create a copy of the data in database table form using the Pandas DataFrame.stack() method. 

AWS RDS MySql instance is created.

JPA Model is created for the data,

## Phase 2a - *Complete*

Implement spring-image-server funtionality in Angular 16

## Phase 2b - *In Progress*

Build OAuth2 login window.

## Phase 3

Implement JPA queries and services.

Implement query screen in Angular 16.

## Phase 4

Implement interactive graph display of queried data.