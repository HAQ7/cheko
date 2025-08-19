package com.sdaia.cheko.category.service;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.category.repository.CategoryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class CategoryService implements ICategoryService {

    private final CategoryRepository categoryRepository;
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Page<Category> searchCategories(String category, Pageable pageable) {
        return categoryRepository.findByNameContainingIgnoreCase(category, pageable);
    }
}
