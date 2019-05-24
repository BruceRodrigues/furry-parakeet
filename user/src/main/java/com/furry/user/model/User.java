package com.furry.user.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "TB_USUARIO", schema = "USUARIO")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "CO_SEQ_USUARIO")
    private Long id;

    @Column(name = "NO_USUARIO")
    private String name;

    @Column(name = "DS_SENHA")
    private String password;

    @Column(name = "DS_USUARIO")
    private String username;

}