package com.example.coviddata;

import java.util.Date;

//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.IdClass;

//@Entity
//@IdClass(CaseId.class)
public class NewCases {
    //@Id
    private Date day;

    //@Id
    private String countyStateCountry;

    private Float normalizedAveNewCases;

    public Float getNormalizedAveNewCases(
        String day, String normalizedAveNewCases) {

        return this.normalizedAveNewCases;

    }

    


    
}
