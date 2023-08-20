package poly.edu.configuration.common;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import poly.edu.model.Role;

@Data
@Getter
@Setter
public class UserDetailsDto {
    private String username;
    private String fullname;
    private Role role;

    public UserDetailsDto(String username, String fullName, String roleName) {

    }
}
