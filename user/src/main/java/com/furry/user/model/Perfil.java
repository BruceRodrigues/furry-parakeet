package com.furry.user.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "TB_PERFIL")
public class Perfil {

    @Id
    @Column(name = "CO_PERFIL")
    private Long id;

    @Column(name = "NO_PERFIL")
    private String noPerfil;

    @Column(name = "DS_PERFIL")
    private String dsPerfil;

    @Column(name = "DS_ICON")
    private String dsIcon;

}
