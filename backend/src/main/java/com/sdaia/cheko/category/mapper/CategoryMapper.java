package com.sdaia.cheko.category.mapper;

import com.sdaia.cheko.category.dto.CategoryDto;
import com.sdaia.cheko.category.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    CategoryDto toDto(Category category);

    @Mapping(target = "menu", ignore = true)
    @Mapping(target = "dishes", ignore = true)
    Category toEntity(CategoryDto categoryDto);

    Set<Category> toEntitySet(Set<CategoryDto> categoryDtos);
}
