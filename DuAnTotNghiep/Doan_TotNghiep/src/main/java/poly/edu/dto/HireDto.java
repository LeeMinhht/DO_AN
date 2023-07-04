package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import poly.edu.model.Address;
import poly.edu.model.Customer;
import poly.edu.model.Store;
import poly.edu.model.Vehicle;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HireDto {
    private Integer hireId;
    private Boolean status;
    private Double totalMoney;
    @Temporal(TemporalType.DATE)
    Date hireDate = new Date();
    @Temporal(TemporalType.DATE)
    Date returnDate = new Date();
    private Integer vehicleId;
    private String vehicleName;
    private Double rentByDay;
    private String image;
    Address address;
    Store store;
}
