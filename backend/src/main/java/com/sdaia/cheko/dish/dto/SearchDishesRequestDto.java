package com.sdaia.cheko.dish.dto;

import lombok.Data;

@Data
public class SearchDishesRequestDto {

    private Long menuId;
    private String name;
    private String category;


}
