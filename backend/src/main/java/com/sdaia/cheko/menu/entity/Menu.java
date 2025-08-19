package com.sdaia.cheko.menu.entity;


import com.sdaia.cheko.dish.entity.Dish;
import com.sdaia.cheko.restaurant.entity.Restaurant;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
public class Menu {

    @Id
    private Long id;

    private List<String> categories;

    @OneToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL)
    private List<Dish> dishes;

}
