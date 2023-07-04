package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Roles")
@Entity
public class Role {
    @Id
    private String roleId;
    private String roleName;

    @JsonIgnore
    @OneToMany(mappedBy = "role")
    List<Customer> customers;
    @JsonIgnore
    @OneToMany(mappedBy = "role")
    List<User> users;


}
