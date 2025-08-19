package com.sdaia.cheko.category.entity;

import com.sdaia.cheko.dish.entity.Dish;
import com.sdaia.cheko.menu.entity.Menu;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "categories")
    private Set<Menu> menu;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Dish> dishes;


}
