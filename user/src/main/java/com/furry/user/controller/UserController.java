package com.furry.user.controller;

import com.furry.user.dto.LoginDto;
import com.furry.user.model.User;
import com.furry.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/user")
@AllArgsConstructor
public class UserController {

    private UserRepository repository;

    @GetMapping(path = "/{id}")
    public ResponseEntity<User> get(@PathVariable("id") Long id) {
        return new ResponseEntity<>(this.repository.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping(path = "/login", consumes = "application/json")
    public ResponseEntity<String> login(@RequestBody LoginDto dto) {
        boolean exists = this.repository.existsUserByUsernameAndPassword(dto.getUsername(), dto.getPassword());
        if  (exists) {
            return new ResponseEntity<>("Possui usuário", HttpStatus.OK);
        }
        return new ResponseEntity<>("Usuário não encontrado", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping(path = "/add", consumes = "application/json")
    public ResponseEntity<String> add(@RequestBody User user) {
        this.repository.save(user);
        return new ResponseEntity<>("Usuário salvo com sucesso", HttpStatus.OK);
    }




}
