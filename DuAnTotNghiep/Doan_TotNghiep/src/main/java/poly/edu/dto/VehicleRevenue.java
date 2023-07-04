package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import poly.edu.model.Address;
import poly.edu.model.Store;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class VehicleRevenue {
    private Integer vehicleId;
    private String image;
    private Double rentByDay;
    private String description;
    private String vehicleName;
    private Long slThue;
    private Address address;
    private Store store;

    private Double totalMoney;

}
