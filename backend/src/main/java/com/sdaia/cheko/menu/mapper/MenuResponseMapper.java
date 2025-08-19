package com.sdaia.cheko.menu.mapper;


import com.sdaia.cheko.dish.mapper.DishResponseMapper;
import com.sdaia.cheko.menu.dto.MenuResponseDto;
import com.sdaia.cheko.menu.entity.Menu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring",
        uses = {DishResponseMapper.class})
public interface MenuResponseMapper {

    @Mapping(source = "restaurant.name", target = "restaurantName")
    MenuResponseDto toDto(Menu menu);
}
