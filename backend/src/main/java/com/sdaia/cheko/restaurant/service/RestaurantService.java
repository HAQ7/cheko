package com.sdaia.cheko.restaurant.service;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.restaurant.entity.Restaurant;
import com.sdaia.cheko.restaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Set;

@Service
public class RestaurantService implements IRestaurantService {

    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public Page<Restaurant> getAll(Pageable pageable) {
        return restaurantRepository.findAll(pageable);
    }

    @Override
    public Page<Restaurant> searchRestaurants(String name, Set<Category> categories, Pageable pageable) {
        Boolean hasName = StringUtils.hasText(name);
        Boolean hasCategories = categories != null && !categories.isEmpty();


        if (hasName && hasCategories) {
            // Both filters provided
            return restaurantRepository.findByNameContainingIgnoreCaseAndMenuCategoriesIn(name, categories, pageable);
        }

        if (hasName) {
            // Name only
            return restaurantRepository.findByNameContainingIgnoreCase(name, pageable);
        }

        if (hasCategories) {
            // Categories only
            return restaurantRepository.findByMenuCategoriesIn(categories, pageable);
        }

        return restaurantRepository.findAll(pageable);

    }
}