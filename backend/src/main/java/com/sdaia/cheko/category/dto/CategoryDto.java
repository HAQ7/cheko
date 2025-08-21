package com.sdaia.cheko.category.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CategoryDto {

    @NotNull(message = "Category ID is required")
    @Positive(message = "Category ID must be positive number")
    private Long id;

    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;

}
