package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Customers")
@Entity
public class Customer implements Serializable {
    @Id
    private String cusUsername;
    private String password;
    private String email;
    private String phone;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String fullname;
    private String image;
    private Boolean gender;
    private String identityCard; // Số chứng minh nhân dân
    private String license;  //Bằng lái xe
    private Boolean lockAccount = false;
    @ManyToOne
    @JoinColumn(name = "addressId")
    Address address;
    private Long cart;  //ví tiền

    @ManyToOne
    @JoinColumn(name = "Roleid")
    Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<HireVehicle> hireVehicles;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<Store> stores;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<Comment> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<Report> reports;
    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<Transaction> transactions;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    List<Notification> notifications;



}
