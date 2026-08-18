package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.AsamyuktaHasta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsamyuktaHastaRepository extends JpaRepository<AsamyuktaHasta, Long> {
}
