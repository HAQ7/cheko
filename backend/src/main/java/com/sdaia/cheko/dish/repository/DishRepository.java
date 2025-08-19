package com.sdaia.cheko.dish.repository;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.dish.entity.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {

    // All filters (menuId is required)
    Page<Dish> findByMenu_IdAndNameContainingIgnoreCaseAndCategory(
            Long menuId, String name, Category category, Pageable pageable);

    // MenuId + Name only
    Page<Dish> findByMenu_IdAndNameContainingIgnoreCase(
            Long menuId, String name, Pageable pageable);

    // MenuId + Category only
    Page<Dish> findByMenu_IdAndCategory(Long menuId, Category category, Pageable pageable);

    // MenuId only (when name and category are null)
    Page<Dish> findByMenu_Id(Long menuId, Pageable pageable);

    List<Dish> findTop2ByMenu_IdOrderByCaloriesDesc(Long menuId);

}