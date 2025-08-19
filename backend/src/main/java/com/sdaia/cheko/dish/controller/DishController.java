package com.sdaia.cheko.dish.controller;

import com.sdaia.cheko.dish.dto.DishResponseDto;
import com.sdaia.cheko.dish.dto.SearchDishesRequestDto;
import com.sdaia.cheko.dish.mapper.DishResponseMapper;
import com.sdaia.cheko.dish.service.IDishService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "dish")
public class DishController {

    private final IDishService dishService;
    private final DishResponseMapper dishResponseMapper;

    public DishController(IDishService dishService, DishResponseMapper dishResponseMapper) {
        this.dishService = dishService;
        this.dishResponseMapper = dishResponseMapper;
    }


    @PostMapping(path = "/search")
    public Page<DishResponseDto> searchDishes(
            @RequestBody SearchDishesRequestDto searchDishesRequestDto,
            @PageableDefault Pageable pageable) {

        return dishService.searchDishes(
                searchDishesRequestDto.getMenuId(),
                searchDishesRequestDto.getName(),
                searchDishesRequestDto.getCategory(),
                pageable)
                .map(dishResponseMapper::toDto);
    }

    @GetMapping("/{menuId}/second-highest-calories")
    public DishResponseDto getSecondHighestCaloriesDish(@PathVariable Long menuId) {
        return dishResponseMapper.toDto(
                dishService.getSecondHighestCaloriesDish(menuId)
        );
    }
}
