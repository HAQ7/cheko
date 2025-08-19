package com.sdaia.cheko.dish.dto;

import com.sdaia.cheko.category.dto.CategoryDto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.Data;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Data
public class SearchDishesRequestDto {

    @NotNull(message = "Menu ID is required")
    @Positive(message = "Menu ID must be positive number")
    private Long menuId;

    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;

    @Valid
    private CategoryDto category;

}
