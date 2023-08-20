package poly.edu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication

@EnableJpaRepositories
public class DoanTotNghiepApplication {

    public static void main(String[] args) {
        SpringApplication.run(DoanTotNghiepApplication.class, args);
    }
/*    @Bean
    BCryptPasswordEncoder brBCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }*/
}
