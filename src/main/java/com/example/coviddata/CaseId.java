package com.example.coviddata;

import java.io.Serializable;

public class CaseId implements Serializable {
    private String day;

    private String countyStateCountry;

    // default constructor

    public CaseId(String day, String countyStateCountry) {
        this.day = day;
        this.countyStateCountry = countyStateCountry;
    }

    // equals() and hashCode()
}
