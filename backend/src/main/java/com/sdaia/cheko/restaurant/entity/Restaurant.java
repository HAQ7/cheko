package com.sdaia.cheko.restaurant.entity;

import com.sdaia.cheko.menu.entity.Menu;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Restaurant {

    @Id
    private Long id;

    private String name;

    private String description;

    private String location;

    private Double latitude;

    private Double longitude;

    @OneToOne(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private Menu menu;

    private String imageURL;

}
