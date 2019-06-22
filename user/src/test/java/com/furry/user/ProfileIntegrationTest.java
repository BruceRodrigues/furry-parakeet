package com.furry.user;

import com.furry.user.model.Perfil;
import com.furry.user.repository.PerfilRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ProfileIntegrationTest {

    @Autowired
    private PerfilRepository perfilRepository;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void before() {
        Perfil admin = new Perfil();
        admin.setId(0L);
        admin.setDsIcon("AdminIcon");
        admin.setDsPerfil("Admin");
        this.perfilRepository.save(admin);

        Perfil tecnico = new Perfil();
        tecnico.setId(1L);
        tecnico.setDsIcon("TecnicoIcon");
        tecnico.setDsPerfil("Tecnico");
        this.perfilRepository.save(tecnico);
    }

    @Test
    public void getAll() throws Exception {
        this.mockMvc.perform(get("/profile/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(content().string("[" +
                        "{" +
                            "\"id\":0," +
                            "\"dsPerfil\":\"Admin\"," +
                            "\"dsIcon\":\"AdminIcon\"" +
                        "}," +
                        "{" +
                            "\"id\":1," +
                            "\"dsPerfil\":\"Tecnico\"," +
                            "\"dsIcon\":\"TecnicoIcon\"" +
                        "}" +
                "]"));
    }
}
