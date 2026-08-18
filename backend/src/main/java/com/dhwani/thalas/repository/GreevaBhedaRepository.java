package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.GreevaBheda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GreevaBhedaRepository extends JpaRepository<GreevaBheda, Long> {
}
