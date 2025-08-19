package com.sdaia.cheko.dish.service;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.dish.entity.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IDishService {
    Page<Dish> searchDishes(Long menuId, String name, Category category, Pageable pageable);
    Dish getSecondHighestCaloriesDish(Long menuId);
}
