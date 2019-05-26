package com.furry.user;

import com.furry.user.model.User;
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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

}
