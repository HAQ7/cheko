package com.sdaia.cheko.restaurant.service;

import com.sdaia.cheko.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IRestaurantService {
    Page<Restaurant> getAll(Pageable pageable);
    public Page<Restaurant> searchRestaurants(String name, List<String> categories, Pageable pageable);
}
