package com.sdaia.cheko.menu.dto;

import com.sdaia.cheko.dish.dto.DishResponseDto;
import lombok.Data;

import java.util.List;

@Data
public class MenuResponseDto {

    private Long id;

    private List<String> categories;

    private String restaurantName;

    private List<DishResponseDto> dishes;
}
