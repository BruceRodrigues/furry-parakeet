package com.furry.user.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
public class UserSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .cors().configurationSource(req -> new CorsConfiguration().applyPermitDefaultValues()).and()
                .authorizeRequests()
                .antMatchers("user/add").permitAll()
                .antMatchers("/profile/all").permitAll()
                .antMatchers("/user/login").permitAll()
//                .anyRequest()
//                .authenticated()
                ;
//            .and()
//                .formLogin().loginPage("/user/login").permitAll();
    }

}
