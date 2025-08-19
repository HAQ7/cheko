package com.sdaia.cheko.dish.service;

import com.sdaia.cheko.dish.entity.Dish;
import com.sdaia.cheko.dish.repository.DishRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@Service
public class DishService implements IDishService {

    private final DishRepository dishRepository;
    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @Override
    public Page<Dish> searchDishes(Long menuId, String name, String category, Pageable pageable) {
        return dishRepository.findByMenu_IdAndNameContainingIgnoreCaseAndCategoryContainingIgnoreCase(menuId, name, category, pageable);
    }

    @Override
    public Dish getSecondHighestCaloriesDish(Long menuId) {
        List<Dish> top2 = dishRepository.findTop2ByMenu_IdOrderByCaloriesDesc(menuId);

        if (top2.size() != 2) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu only has 2 dishes");
        }

        return top2.get(1);
    }
}
