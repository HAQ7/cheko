package com.sdaia.cheko.restaurant.service;

import com.sdaia.cheko.restaurant.entity.Restaurant;
import com.sdaia.cheko.restaurant.repository.RestaurantRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class RestaurantService implements IRestaurantService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public Page<Restaurant> getAll(Pageable pageable) {
        return restaurantRepository.findAll(pageable);
    }

    @Override
    public Page<Restaurant> searchRestaurants(String name, List<String> categories, Pageable pageable) {
        return restaurantRepository.findByNameContainingIgnoreCaseAndMenuCategoriesIn(name, categories, pageable);
    }

}
