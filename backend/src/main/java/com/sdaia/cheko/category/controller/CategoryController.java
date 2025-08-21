package com.sdaia.cheko.category.controller;

import com.sdaia.cheko.category.dto.CategoryDto;
import com.sdaia.cheko.category.mapper.CategoryMapper;
import com.sdaia.cheko.category.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "category")
public class CategoryController {

    private final ICategoryService categoryService;
    private final CategoryMapper categoryMapper;

    @Autowired
    public CategoryController(ICategoryService categoryService, CategoryMapper categoryMapper) {
        this.categoryService = categoryService;
        this.categoryMapper = categoryMapper;
    }

    @GetMapping(path = "/search")
    public Page<CategoryDto> searchCategorise(@RequestParam(required = false) String category, @PageableDefault(size = 5) Pageable pageable) {
        return categoryService.searchCategories(category, pageable).map(categoryMapper::toDto);
    }
}
