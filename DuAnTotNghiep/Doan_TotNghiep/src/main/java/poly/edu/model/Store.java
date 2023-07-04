package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Stores")
@Entity
public class Store implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer storeId;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String nameStore;

    @ManyToOne
    @JoinColumn(name = "addressId")
    Address address;
    private String image;
    private Long cartStore;
    private String phone;
    private String identityCard;
    @Temporal(TemporalType.DATE)
    @Column(name = "CreateDate")
    Date createDate = new Date();

    @JsonIgnore
    @OneToMany(mappedBy = "store")
    List<Vehicle> vehicles;

    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;

}
