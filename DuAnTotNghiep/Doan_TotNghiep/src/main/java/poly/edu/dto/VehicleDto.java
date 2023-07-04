package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import poly.edu.model.Address;
import poly.edu.model.Brand;
import poly.edu.model.Store;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleDto {
    private Integer vehicleId;
    private String vehicleName;
    private Double rentByDay;
    private String image;
    private String image2;
    private String image3;
    private Boolean statusHiring; //trạng thái đã được thuê hay chưa
    private String description;
    Address address;
    Store store;
    Brand brand;
    Long slThue;
}
