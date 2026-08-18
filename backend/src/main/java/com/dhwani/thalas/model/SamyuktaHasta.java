package com.dhwani.thalas.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "samyukta_hasta")
public class SamyuktaHasta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 1000)
    private String description;

    @Column(name = "hasta_usage", length = 1000)
    private String usage;

    @Column(name = "image_url")
    private String imageUrl;

    public SamyuktaHasta() {
    }

    public SamyuktaHasta(String name, String description, String usage) {
        this.name = name;
        this.description = description;
        this.usage = usage;
    }

    public SamyuktaHasta(String name, String description, String usage, String imageUrl) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsage() {
        return usage;
    }

    public void setUsage(String usage) {
        this.usage = usage;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
