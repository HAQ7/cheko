package com.sdaia.cheko.restaurant.service;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Set;

public interface IRestaurantService {
    Page<Restaurant> getAll(Pageable pageable);
    Page<Restaurant> searchRestaurants(String name, Set<Category> categories, Pageable pageable);
}
