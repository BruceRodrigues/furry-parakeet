package com.furry.user.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "TB_USUARIO")
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CO_SEQ_USUARIO")
    private Long id;

    @Column(name = "NO_USUARIO")
    private String name;

    @Column(name = "DS_SENHA")
    private String password;

    @Column(name = "DS_USUARIO")
    private String username;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "CO_ENDERECO")
    private Endereco endereco;

    @ManyToMany
    @JoinTable(name = "RL_PERFIL_USUARIO",
        joinColumns = {@JoinColumn(name="CO_USUARIO")},
        inverseJoinColumns = {@JoinColumn(name = "CO_PERFIL")})
    private List<Perfil> perfis = new ArrayList<>();



}
