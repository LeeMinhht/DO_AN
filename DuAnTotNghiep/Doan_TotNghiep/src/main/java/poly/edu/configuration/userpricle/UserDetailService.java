package poly.edu.configuration.userpricle;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import poly.edu.model.Customer;
import poly.edu.model.User;
import poly.edu.service.CustomerService;
import poly.edu.service.UserService;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    UserService adminService;

    @Autowired
    CustomerService userService;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        if(username.contains("admin")){
            Optional<User> admin = adminService.findById(username);
            grantedAuthorities.add(new SimpleGrantedAuthority("ADMIN"));
            UserPrinciple userPrinciple = UserPrinciple.build(null, admin,grantedAuthorities);
            return userPrinciple;
        }
        else{
            Optional<Customer> user = userService.findById(username);
            grantedAuthorities.add(new SimpleGrantedAuthority("USER"));
            UserPrinciple userPrinciple = UserPrinciple.build(user,null, grantedAuthorities);
            return userPrinciple;
        }


    }
}