package com.sdaia.cheko.dish.mapper;

import com.sdaia.cheko.category.mapper.CategoryMapper;
import com.sdaia.cheko.dish.dto.DishResponseDto;
import com.sdaia.cheko.dish.entity.Dish;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = CategoryMapper.class)
public interface DishResponseMapper {
    DishResponseDto toDto(Dish dish);
}
