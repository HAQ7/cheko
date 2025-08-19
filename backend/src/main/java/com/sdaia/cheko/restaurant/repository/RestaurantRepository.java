package com.sdaia.cheko.restaurant.repository;

import com.sdaia.cheko.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Page<Restaurant> findByNameContainingIgnoreCaseAndMenuCategoriesIn(
            String name,
            List<String> categoryNames,
            Pageable pageable);}
