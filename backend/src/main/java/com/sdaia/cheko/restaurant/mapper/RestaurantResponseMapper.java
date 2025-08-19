package com.sdaia.cheko.restaurant.mapper;

import com.sdaia.cheko.restaurant.dto.RestaurantResponseDto;
import com.sdaia.cheko.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RestaurantResponseMapper {

    @Mapping(target = "menuId", source = "menu.id") // maps Menu.id → menuId
    RestaurantResponseDto toDto(Restaurant restaurant);
}
