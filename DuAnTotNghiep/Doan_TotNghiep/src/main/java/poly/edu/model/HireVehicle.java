package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "HireVehicles")
@Entity
public class HireVehicle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hireid")
    private Integer hireId;
    private Boolean status;
    private Double totalMoney;

    @Temporal(TemporalType.DATE)
    @Column(name = "HireDate")
    Date hireDate = new Date();
    @Temporal(TemporalType.DATE)
    @Column(name = "ReturnDate")
    Date returnDate = new Date();


    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;
    @ManyToOne
    @JoinColumn(name = "VehicleId")
    Vehicle vehicle;
    @JsonIgnore
    @OneToMany(mappedBy = "hireVehicle")
    List<Comment> comments;

    @JsonIgnore
    @OneToMany(mappedBy = "hireVehicle")
    List<Notification> notifications;

 }
