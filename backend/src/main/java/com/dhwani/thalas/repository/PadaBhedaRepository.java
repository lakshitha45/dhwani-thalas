package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.PadaBheda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PadaBhedaRepository extends JpaRepository<PadaBheda, Long> {
}
