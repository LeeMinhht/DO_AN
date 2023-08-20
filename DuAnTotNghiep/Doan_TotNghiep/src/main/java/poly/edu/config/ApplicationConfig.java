package poly.edu.config;

import lombok.RequiredArgsConstructor;
import org.hibernate.hql.internal.ast.tree.IsNotNullLogicOperatorNode;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import poly.edu.service.CustomerService;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final CustomerService customerService;

   /* @Bean
    public UserDetailsService userDetailsService(){
        return username -> customerService.findById(username).orElseThrow(() ->new UsernameNotFoundException(" "));
    }*/
}
