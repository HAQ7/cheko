package com.sdaia.cheko.dish.dto;

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

    private String category;
}
