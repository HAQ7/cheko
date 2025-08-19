package com.sdaia.cheko.dish.mapper;

import com.sdaia.cheko.dish.dto.DishResponseDto;
import com.sdaia.cheko.dish.entity.Dish;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DishResponseMapper {
    DishResponseDto toDto(Dish dish);
}
