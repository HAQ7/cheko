package com.sdaia.cheko.restaurant.dto;

import com.sdaia.cheko.menu.entity.Menu;
import lombok.Data;

@Data
public class RestaurantResponseDto {

    private Long id;

    private String name;

    private String description;

    private Double latitude;

    private String location;

    private Double longitude;

    private Long menuId;

    private String imageURL;

}
