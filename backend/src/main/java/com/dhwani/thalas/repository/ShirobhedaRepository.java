package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.Shirobheda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShirobhedaRepository extends JpaRepository<Shirobheda, Long> {
}
