package com.sdaia.cheko.restaurant.repository;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    // All filters
    Page<Restaurant> findByNameContainingIgnoreCaseAndMenuCategoriesIn(
            String name, Set<Category> categories, Pageable pageable);

    // Name only
    Page<Restaurant> findByNameContainingIgnoreCase(String name, Pageable pageable);

    // Categories only
    Page<Restaurant> findByMenuCategoriesIn(Set<Category> categories, Pageable pageable);
}