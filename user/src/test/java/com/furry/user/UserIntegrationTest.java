package com.furry.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.furry.user.model.Endereco;
import com.furry.user.model.User;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@PropertySource("classpath:application.yml")
@ActiveProfiles("test")
public class UserIntegrationTest {

	@Autowired
	private UserRepository repository;

	@Autowired
	private MockMvc mockMvc;

	@Before
	public void inserts() {
        User user = new User();
        user.setId(1L);
        user.setName("Name");
        user.setPassword("secret");
        user.setUsername("username");
        Endereco endereco = new Endereco();
        endereco.setCoMunicipio("4205407");
        endereco.setNoMunicipio("Florianópolis");
        endereco.setNuCep("88034000");
        endereco.setDsLogradouro("Logradouro");
        endereco.setDsBairro("Bairro");
        endereco.setDsComplemento("Complemento");
        endereco.setDsNumero("123");
        endereco.setSgUf("SC");
        user.setEndereco(endereco);
        this.repository.save(user);
	}

//	@Test
//	public void testGet() throws Exception {
//		this.mockMvc.perform(get("/user/1"))
//			.andExpect(status().isOk())
//			.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
//            ;
//	}

	@Test
    public void testAdd() throws Exception {

	    User test = new User();
	    test.setId(3L);
        test.setName("Test");
        test.setPassword("secret2");
        test.setUsername("username2");

	    //Test request
	    this.mockMvc.perform(post("/user/add")
            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
            .content(asJsonString(test)))
        .andExpect(status().isOk())
        .andExpect(content().string("Usuário salvo com sucesso"));
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
