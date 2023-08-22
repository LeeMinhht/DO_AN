package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import poly.edu.dto.HireDto;
import poly.edu.dto.RevenueDto;
import poly.edu.dto.TopRentedVehicleDTO;
import poly.edu.dto.VehicleRevenue;
import poly.edu.model.HireVehicle;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface HireVehicleReps extends JpaRepository<HireVehicle,Integer> {

    @Query(value = "SELECT new poly.edu.dto.TopRentedVehicleDTO(hv.vehicle.vehicleId,hv.vehicle.vehicleName, COUNT(*)) FROM HireVehicle hv GROUP BY hv.vehicle.vehicleId,hv.vehicle.vehicleName ORDER BY COUNT(*) DESC")
    List<TopRentedVehicleDTO> findTopRentedVehicles();


    @Query("SELECT o FROM HireVehicle o WHERE o.statusAccept = ?1 and o.vehicle.store.storeId = ?2")
    List<HireVehicle> getByStatusAcceptAndStoreId(boolean statusAccept,Integer storeId);


    @Query("SELECT new poly.edu.dto.VehicleRevenue(v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,count(h.vehicle.vehicleId),v.address,v.store ,sum(h.totalMoney)) from Vehicle v left join HireVehicle h " +
            "on v.vehicleId= h.vehicle.vehicleId where month(h.hireDate) = ?1 and v.store.storeId = ?2 group by v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,v.address,v.store ")
    List<VehicleRevenue> getRevenueByMonth(Integer month,Integer storeId);

    @Query("SELECT new poly.edu.dto.VehicleRevenue(v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,count(h.vehicle.vehicleId),v.address,v.store ,sum(h.totalMoney)) from Vehicle v left join HireVehicle h " +
            "on v.vehicleId= h.vehicle.vehicleId where v.store.storeId = ?1 group by v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,v.address,v.store order by sum(h.totalMoney) desc ")
    List<VehicleRevenue> getRevenueVehicle(Integer storeId);

    @Query("SELECT new poly.edu.dto.RevenueDto(month(h.hireDate),sum(h.totalMoney)) from  HireVehicle h group by month(h.hireDate)")
    List<RevenueDto> getRevenueStatistics();

    @Query("SELECT o FROM HireVehicle o WHERE o.customer.cusUsername like ?1")
    List<HireVehicle> findHireVehicleBycusUsername(String username);

    @Query("select new poly.edu.dto.HireDto(h.hireId,h.status,h.totalMoney,h.hireDate,h.returnDate,h.vehicle." +
            "vehicleId,h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,v.address,v.store) from HireVehicle h inner join Vehicle v " +
            "on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2" +
            " group by h.hireId,h.status,h.totalMoney,h.hireDate,h.returnDate,h.vehicle.vehicleId," +
            "h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,v.address,v.store")
    List<HireDto> findHistoryHireByCusUsername(String cusUsername, Boolean status);

//    @Query("select v.vehicleId ,v.vehicleName,v.rentByDay,v.image,v.address,h.hireDate, h.returnDate,h.TotalMoney\n" +
//            "from HireVehicle h inner join Vehicle v on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2\n" +
//            "group by v.vehicleId ,v.vehicleName,v.rentByDay,v.image,v.address,h.hireDate, h.returnDate,h.TotalMoney")
//    List<HireVehicle> findHistoryHireByCusUsername(String username);
}
