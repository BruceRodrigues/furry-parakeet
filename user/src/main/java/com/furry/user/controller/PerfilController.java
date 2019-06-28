package com.furry.user.controller;

import com.furry.user.model.Perfil;
import com.furry.user.repository.PerfilRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/profile")
@AllArgsConstructor
public class PerfilController {

    PerfilRepository perfilRepository;

    @GetMapping("/all")
    public Iterable<Perfil> getAll() {
        return this.perfilRepository.findAll();
    }
}


