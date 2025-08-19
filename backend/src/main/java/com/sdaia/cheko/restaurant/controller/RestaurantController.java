package com.sdaia.cheko.restaurant.controller;


import com.sdaia.cheko.category.mapper.CategoryMapper;
import com.sdaia.cheko.restaurant.dto.RestaurantResponseDto;
import com.sdaia.cheko.restaurant.dto.SearchRestaurantRequestDto;
import com.sdaia.cheko.restaurant.mapper.RestaurantResponseMapper;
import com.sdaia.cheko.restaurant.service.IRestaurantService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/restaurant")
public class RestaurantController {

    private final IRestaurantService restaurantService;
    private final RestaurantResponseMapper restaurantResponseMapper;
    private final CategoryMapper categoryMapper;

    @Autowired
    public RestaurantController(IRestaurantService restaurantService,  RestaurantResponseMapper restaurantResponseMapper, CategoryMapper categoryMapper) {
        this.restaurantService = restaurantService;
        this.restaurantResponseMapper = restaurantResponseMapper;
        this.categoryMapper = categoryMapper;
    }

    @GetMapping(path = "/all")
    public Page<RestaurantResponseDto> getAllRestaurants(@PageableDefault Pageable pageable)     {

        return restaurantService
                .getAll(pageable)
                .map(restaurantResponseMapper::toDto);
    }

    @PostMapping("/search")
    public Page<RestaurantResponseDto> searchRestaurants(
            @Valid @RequestBody SearchRestaurantRequestDto searchRestaurantRequestDto,
            @PageableDefault Pageable pageable) {

        return restaurantService.searchRestaurants(
                searchRestaurantRequestDto.getName(),categoryMapper.toEntitySet(searchRestaurantRequestDto.getCategories()),
                pageable)
                .map(restaurantResponseMapper::toDto);
    }

}