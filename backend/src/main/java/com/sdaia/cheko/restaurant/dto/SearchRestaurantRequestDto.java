package com.sdaia.cheko.restaurant.dto;
import lombok.Data;

import java.util.List;

@Data
public class SearchRestaurantRequestDto {
    private String name;
    private List<String> categories;
}
