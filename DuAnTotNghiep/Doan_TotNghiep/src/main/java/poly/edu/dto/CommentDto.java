package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import poly.edu.model.Customer;
import poly.edu.model.HireVehicle;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {
    private Integer commentId;
    private String note;
    private long star;
    Date Commentdate = new Date();
    HireVehicle hireVehicle;
    Customer customer;
}
