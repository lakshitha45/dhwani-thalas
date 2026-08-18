package com.dhwani.thalas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Rhythm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private SaptaTala saptatala;

    @ManyToOne
    private Saputala saputala;

    private int counting;

    private String notation;

    public Rhythm() {
    }

    public Rhythm(SaptaTala saptaTala, Saputala saputala,
                  int counting, String notation) {
        this.saptatala = saptaTala;
        this.saputala = saputala;
        this.counting = counting;
        this.notation = notation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SaptaTala getSaptatala() {
        return saptatala;
    }

    public void setSaptatala(SaptaTala saptatala) {
        this.saptatala = saptatala;
    }

    public Saputala getSaputala() {
        return saputala;
    }

    public void setSaputala(Saputala saputala) {
        this.saputala = saputala;
    }

    public int getCounting() {
        return counting;
    }

    public void setCounting(int counting) {
        this.counting = counting;
    }

    public String getNotation() {
        return notation;
    }

    public void setNotation(String notation) {
        this.notation = notation;
    }
}