package com.furry.user;

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
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(
		classes = UserApplication.class)
@AutoConfigureMockMvc
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
		this.repository.save(user);
	}

	@Test
	public void testGet() throws Exception {
		this.mockMvc.perform(get("/user/1"))
			.andExpect(status().isOk())
			.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("name").value("Name"))
			.andExpect(jsonPath("password").value("secret"))
			.andExpect(jsonPath("username").value("username"));
	}

	@Test
    public void testAdd() throws Exception {

	    //Test request
	    this.mockMvc.perform(post("/user/add")
            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
            .content(EntityUtils.toString(new UrlEncodedFormEntity(Arrays.asList(
                    new BasicNameValuePair("id", "2"),
                    new BasicNameValuePair("name", "Test"),
                    new BasicNameValuePair("password", "secret2"),
                    new BasicNameValuePair("username", "username2")
            )))))
        .andExpect(status().isOk())
        .andExpect(content().string("Usuário salvo com sucesso"));

	    //Test saved entity
        Optional<User> user = this.repository.findById(2L);
        assertThat(user.get().getId()).isEqualTo(2);
        assertThat(user.get().getName()).isEqualTo("Test");
        assertThat(user.get().getPassword()).isEqualTo("secret2");
        assertThat(user.get().getUsername()).isEqualTo("username2");
    }

}
