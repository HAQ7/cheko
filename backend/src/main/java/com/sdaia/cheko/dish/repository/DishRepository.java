package com.sdaia.cheko.dish.repository;

import com.sdaia.cheko.dish.entity.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish,Long> {

    public Page<Dish> findByMenu_IdAndNameContainingIgnoreCaseAndCategoryContainingIgnoreCase(Long menuId, String name, String category, Pageable pageable);

    public List<Dish> findTop2ByMenu_IdOrderByCaloriesDesc(Long menuId);
}
