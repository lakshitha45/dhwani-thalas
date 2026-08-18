package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.SamyuktaHasta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SamyuktaHastaRepository extends JpaRepository<SamyuktaHasta, Long> {
}
