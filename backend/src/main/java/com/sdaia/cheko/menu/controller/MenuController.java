package com.sdaia.cheko.menu.controller;

import com.sdaia.cheko.menu.dto.MenuResponseDto;
import com.sdaia.cheko.menu.mapper.MenuResponseMapper;
import com.sdaia.cheko.menu.service.IMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "menu")
public class MenuController {

    private final IMenuService menuService;
    private final MenuResponseMapper menuResponseMapper;

    @Autowired
    public MenuController(IMenuService menuService, MenuResponseMapper menuResponseMapper) {
        this.menuService = menuService;
        this.menuResponseMapper = menuResponseMapper;

    }

    @GetMapping(path = "/{menuId}")
    public MenuResponseDto getMenu(@PathVariable Long menuId) {
        return menuResponseMapper.toDto(menuService.getMenu(menuId));
    }
}


