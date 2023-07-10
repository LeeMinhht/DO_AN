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
@Table(name = "Transactions")
@Entity
public class Transaction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TransactionId")
    private Integer transactionId;
     private Double amount ;
    @Temporal(TemporalType.DATE)
    @Column(name = "CreateDate")
    Date createDate = new Date();

    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;

    @JsonIgnore
    @OneToMany(mappedBy = "transaction")
    List<Notification> notifications;


}
