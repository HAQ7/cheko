package com.sdaia.cheko.category.service;

import com.sdaia.cheko.category.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    public Page<Category> searchCategories(String category, Pageable pageable);
}
