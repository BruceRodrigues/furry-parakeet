package com.furry.user.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "TB_ENDERECO")
public class Endereco {

    @Id
    @Column(name = "CO_SEQ_ENDERECO")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CO_MUNICIPIO")
    private String coMunicipio;

    @Column(name = "NO_MUNICIPIO")
    private String noMunicipio;

    @Column(name = "SG_UF")
    private String sgUf;

    @Column(name = "NU_CEP")
    private String nuCep;

    @Column(name = "DS_LOGRADOURO")
    private String dsLogradouro;

    @Column(name = "DS_COMPLEMENTO")
    private String dsComplemento;

    @Column(name = "DS_BAIRRO")
    private String dsBairro;

    @Column(name = "DS_NUMERO")
    private String dsNumero;

}
