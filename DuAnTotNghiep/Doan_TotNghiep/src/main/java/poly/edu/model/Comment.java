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
@Table(name = "Comments")
@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentId;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String note;
    private long star;
    @Temporal(TemporalType.DATE)
    @Column(name = "CommentDate")
    Date commentDate ;

    @ManyToOne
    @JoinColumn(name = "hireId")
    HireVehicle hireVehicle;


    @ManyToOne
    @JoinColumn(name = "CusUsername")
    Customer customer;



}
