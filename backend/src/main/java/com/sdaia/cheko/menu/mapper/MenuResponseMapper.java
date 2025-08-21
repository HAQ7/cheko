package com.sdaia.cheko.menu.mapper;


import com.sdaia.cheko.category.mapper.CategoryMapper;
import com.sdaia.cheko.dish.mapper.DishResponseMapper;
import com.sdaia.cheko.menu.dto.MenuResponseDto;
import com.sdaia.cheko.menu.entity.Menu;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",
        uses = {CategoryMapper.class, DishResponseMapper.class})
public interface MenuResponseMapper {

    MenuResponseDto toDto(Menu menu);
}
