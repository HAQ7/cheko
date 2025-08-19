package com.sdaia.cheko.dish.service;

import com.sdaia.cheko.dish.entity.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IDishService {
    public Page<Dish> searchDishes(Long menuId, String name, String category, Pageable pageable);
    public Dish getSecondHighestCaloriesDish(Long menuId);
}
