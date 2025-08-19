package com.sdaia.cheko.menu.repository;

import com.sdaia.cheko.dish.entity.Dish;
import com.sdaia.cheko.menu.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository  extends JpaRepository<Menu,Long> {



}
