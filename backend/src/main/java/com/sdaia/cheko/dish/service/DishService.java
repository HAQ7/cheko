package com.sdaia.cheko.dish.service;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.dish.entity.Dish;
import com.sdaia.cheko.dish.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@Service
public class DishService implements IDishService {

    private final DishRepository dishRepository;

    @Autowired
    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @Override
    public Page<Dish> searchDishes(Long menuId, String name, Category category, Pageable pageable) {
        // Validate that menuId is provided
        if (menuId == null) {
            throw new IllegalArgumentException("Menu ID is required");
        }

        boolean hasName = StringUtils.hasText(name);
        boolean hasCategory = category != null;

        if (hasName && hasCategory) {
            // MenuId + Name + Category
            return dishRepository.findByMenu_IdAndNameContainingIgnoreCaseAndCategory(menuId, name, category, pageable);
        }

        if (hasName) {
            // MenuId + Name only
            return dishRepository.findByMenu_IdAndNameContainingIgnoreCase(menuId, name, pageable);
        }
        if (hasCategory) {
            // MenuId + Category only
            return dishRepository.findByMenu_IdAndCategory(menuId, category, pageable);
        }

        // MenuId only
        return dishRepository.findByMenu_Id(menuId, pageable);

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
