package com.dhwani.thalas.repository;

import com.dhwani.thalas.model.BhruBheda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BhruBhedaRepository extends JpaRepository<BhruBheda, Long> {
}
