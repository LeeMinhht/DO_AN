package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Address")
@Entity
public class Address implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String addressName;
    private String image;

    @JsonIgnore
    @OneToMany(mappedBy = "address")
    List<Vehicle> vehicles;

    @JsonIgnore
    @OneToMany(mappedBy = "address")
    List<Customer> customers;

    @JsonIgnore
    @OneToMany(mappedBy = "address")
    List<Store> stores;


}
