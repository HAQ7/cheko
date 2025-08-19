package com.sdaia.cheko.category.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.NonNull;

@Data
public class CategoryDto {

    @NotNull(message = "Category ID is required")
    @Positive(message = "Category ID must be positive number")
    private Long id;

}
