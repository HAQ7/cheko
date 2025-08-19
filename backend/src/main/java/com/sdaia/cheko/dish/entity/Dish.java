package com.sdaia.cheko.dish.entity;

import com.sdaia.cheko.category.entity.Category;
import com.sdaia.cheko.menu.entity.Menu;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Dish {

    @Id
    private Long id;

    private String name;

    private String description;

    private Integer calories;

    private Integer price;

    private Boolean bestSeller;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;
}
