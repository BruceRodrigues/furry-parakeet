package com.furry.user.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginDto {

    private String username;

    private String password;
}
