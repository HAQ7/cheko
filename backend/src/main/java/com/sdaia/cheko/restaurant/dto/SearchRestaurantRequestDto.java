package com.sdaia.cheko.restaurant.dto;
import com.sdaia.cheko.category.dto.CategoryDto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Set;

@Data
public class SearchRestaurantRequestDto {
    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;

    @Valid
    private Set<CategoryDto> categories;
}
