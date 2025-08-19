package com.sdaia.cheko.menu.dto;

import com.sdaia.cheko.category.dto.CategoryDto;
import com.sdaia.cheko.dish.dto.DishResponseDto;
import lombok.Data;

import java.util.Set;

@Data
public class MenuResponseDto {

    private Long id;

    private Set<CategoryDto> categories;

    private String restaurantName;

    private Set<DishResponseDto> dishes;
}
