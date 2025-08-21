package com.sdaia.cheko.menu.service;


import com.sdaia.cheko.menu.entity.Menu;
import com.sdaia.cheko.menu.repository.MenuRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class MenuService implements IMenuService {

    private final MenuRepository menuRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @Override
    @Transactional
    public Menu getMenu(Long id) {
        return menuRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Menu not found"));
    }



}
