package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.DrishtiBheda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrishtiBhedaRepository extends JpaRepository<DrishtiBheda, Long> {
}
