package com.furry.user;

import com.furry.user.model.User;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/user")
@AllArgsConstructor
public class UserController {

    private UserRepository repository;

    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable("id") Long id) {
        return new ResponseEntity<>(this.repository.findById(id).get(), HttpStatus.OK);
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void add(@ModelAttribute("user") User user) {
        this.repository.save(user);
    }




}
