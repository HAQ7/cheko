package com.sdaia.cheko.restaurant.dto;

import com.sdaia.cheko.menu.entity.Menu;
import lombok.Data;

@Data
public class RestaurantResponseDto {

    private Long id;

    private String name;

    private String description;

    private String location;

    private Long menuId;
}
