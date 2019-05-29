package com.furry.user;

import com.furry.user.model.Endereco;
import com.furry.user.model.User;
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

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserIntegrationTest {

	@Autowired
	private UserRepository repository;

	@Autowired
	private MockMvc mockMvc;

	@Before
	public void inserts() {
        User user = new User();
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

	@Test
	public void testGet() throws Exception {
		this.mockMvc.perform(get("/user/1"))
			.andExpect(status().isOk())
			.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
            .andExpect(content().string(
                    "{" +
                    "\"id\":1," +
                    "\"name\":\"Name\"," +
                    "\"password\":\"secret\"," +
                    "\"username\":\"username\"," +
                    "\"endereco\":{" +
                        "\"id\":1," +
                        "\"coMunicipio\":\"4205407\"," +
                        "\"noMunicipio\":\"Florianópolis\"," +
                        "\"sgUf\":\"SC\"," +
                        "\"nuCep\":\"88034000\"," +
                        "\"dsLogradouro\":\"Logradouro\"," +
                        "\"dsComplemento\":\"Complemento\"," +
                        "\"dsBairro\":\"Bairro\"," +
                        "\"dsNumero\":\"123\"" +
                        "}" +
                    "}"));
	}

	@Test
    public void testAdd() throws Exception {
	    //Test request
	    this.mockMvc.perform(post("/user/add")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{" +
                    "\"name\": \"postman\"," +
                    "\"password\": \"pass\"," +
                    "\"username\": \"post\"," +
                    "\"endereco\": {" +
                        "\"coMunicipio\": \"123123\"," +
                        "\"noMunicipio\": \"Florianópolis\"," +
                        "\"sgUf\": \"SC\"," +
                        "\"nuCep\": \"36880000\"," +
                        "\"dsLogradouro\": \"Logr\"," +
                        "\"dsComplemento\": \"Complemento\"," +
                        "\"dsBairro\": \"Bairro\"," +
                        "\"dsNumero\": \"123\"" +
                        "}" +
                    "}"))
        .andExpect(status().isOk())
        .andExpect(content().string("Usuário salvo com sucesso"));

        Optional<User> user = this.repository.findById(2L);
        assertThat(user.get()).isNotNull();
        assertThat(user.get().getName()).isEqualTo("postman");
        assertThat(user.get().getPassword()).isEqualTo("pass");
        assertThat(user.get().getUsername()).isEqualTo("post");
        assertThat(user.get().getEndereco().getCoMunicipio()).isEqualTo("123123");
        assertThat(user.get().getEndereco().getNoMunicipio()).isEqualTo("Florianópolis");
        assertThat(user.get().getEndereco().getSgUf()).isEqualTo("SC");
        assertThat(user.get().getEndereco().getNuCep()).isEqualTo("36880000");
        assertThat(user.get().getEndereco().getDsLogradouro()).isEqualTo("Logr");
        assertThat(user.get().getEndereco().getDsComplemento()).isEqualTo("Complemento");
        assertThat(user.get().getEndereco().getDsBairro()).isEqualTo("Bairro");
        assertThat(user.get().getEndereco().getDsNumero()).isEqualTo("123");
    }

}
