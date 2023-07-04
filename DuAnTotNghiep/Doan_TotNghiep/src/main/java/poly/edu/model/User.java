package poly.edu.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
@Entity
public class User {
    @Id
    private String username;
    private String password;
    private Boolean status ;
    private String imageUser;
    @ManyToOne
    @JoinColumn(name = "RoleId")
    Role role;


}
