package poly.edu.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Reports")
@Entity
public class Report implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reportId;

    private Boolean status;

    @Temporal(TemporalType.DATE)
    @Column(name = "reportDate")
    Date reportDate = new Date();

    @ManyToOne
    @JoinColumn(name = "vehicleId")
    Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;


}
