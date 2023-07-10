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
@Table(name = "Notifications")
@Entity
public class Notification implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NotificationId")
    private Integer notificationId;
    @Column(columnDefinition = "nvarchar(100)")
    private String content;

    @Temporal(TemporalType.DATE)
    @Column(name = "CreateDate")
    Date createDate = new Date();
    private Boolean isRead;

    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;

    @ManyToOne
    @JoinColumn(name = "hireId")
    HireVehicle hireVehicle;

    @ManyToOne
    @JoinColumn(name = "transactionId")
    Transaction transaction;


}
