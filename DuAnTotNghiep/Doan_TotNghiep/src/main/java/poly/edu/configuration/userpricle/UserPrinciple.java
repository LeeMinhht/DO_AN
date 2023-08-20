package poly.edu.configuration.userpricle;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import poly.edu.model.Customer;
import poly.edu.model.User;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

public class UserPrinciple implements UserDetails {



    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }

    public UserPrinciple(Integer id, String username, String password, Collection<? extends GrantedAuthority> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public UserPrinciple() {
    }

    private String viewName;
    private Integer id;
    private String username;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> roles;

    private String[] roleArr;

    public String getViewName() {
        return this.viewName;
    }

    public static UserPrinciple build(Optional<Customer> user, Optional<User> admin, Set<GrantedAuthority> roles) {
        String id = "1";
        String name;
        if (user != null) {
            id = user.get().getCusUsername();
            name = user.get().getFullname();
        } else{
            id = admin.get().getUsername();
            name = admin.get().getUsername();
        }

        UserPrinciple u = new UserPrinciple(Math.toIntExact(Long.parseLong(id)), name,
                "Hide", roles);
        u.setRoles(roles);
        return u;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.id + "";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
