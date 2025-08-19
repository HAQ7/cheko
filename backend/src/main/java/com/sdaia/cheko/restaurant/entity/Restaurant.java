package com.sdaia.cheko.restaurant.entity;

import com.sdaia.cheko.menu.entity.Menu;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Restaurant {

    @Id
    private Long id;

    private String name;

    private String description;

    private String location;

    @OneToOne(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private Menu menu;

}
