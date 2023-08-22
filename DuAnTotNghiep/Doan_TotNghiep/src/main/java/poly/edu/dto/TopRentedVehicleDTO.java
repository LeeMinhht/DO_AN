package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TopRentedVehicleDTO {
    private Integer vehicleId;
    private String vehicleName;
    private Long totalRentals;
}
