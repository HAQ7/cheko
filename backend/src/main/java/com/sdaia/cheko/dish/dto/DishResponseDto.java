package com.sdaia.cheko.dish.dto;

import com.sdaia.cheko.category.dto.CategoryDto;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DishResponseDto {
    private Long id;

    private String name;

    private String description;

    private Integer calories;

    private Integer price;

    private Boolean bestSeller;

    private CategoryDto category;
}
