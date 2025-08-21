package com.sdaia.cheko.dish.repository;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.dish.entity.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {

    // All filters (menuId is required)
    @Query("""
            select d from Dish d
            where d.menu.id = ?1 and d.category = ?2 and upper(d.name) like upper(concat('%', ?3, '%')) or upper(d.description) like upper(concat('%', ?4, '%'))""")
    Page<Dish> findByMenu_IdAndCategory_AndNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
            Long menuId, Category category, String name, String description, Pageable pageable);

    // Search in name OR description only
    Page<Dish> findByMenu_IdAndNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
            Long menuId, String name, String description, Pageable pageable);

    // MenuId + Category only
    Page<Dish> findByMenu_IdAndCategory(Long menuId, Category category, Pageable pageable);

    // MenuId only (when name and category are null)
    Page<Dish> findByMenu_Id(Long menuId, Pageable pageable);

    List<Dish> findTop2ByMenu_IdOrderByCaloriesDesc(Long menuId);

}