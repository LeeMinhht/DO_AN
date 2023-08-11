package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.dto.VehicleDto;
import poly.edu.model.Brand;
import poly.edu.model.HireVehicle;
import poly.edu.model.Store;
import poly.edu.model.Vehicle;

import java.util.List;
import java.util.Optional;

@Repository
public interface VehicleResp extends JpaRepository<Vehicle,Integer> {

    //tìm kiếm theo tên xe
    List<Vehicle> findAllByVehicleNameContaining(String vehicleName);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId where v.vehicleType = ?1 and v.brand.brandId = ?2 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findByVehicleType(Boolean type,Integer bandId);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findTop8();

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findAllVehicleDto();
    public List<Vehicle> findByVehicleNameContaining(String key);

    @Query(value = "Select v from Vehicle v where v.address.addressId =  ?1")
    public  List<Vehicle> searchByAddress(Integer addressId);


    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    List<Vehicle> findByStore(Integer storeId);

    @Query("SELECT o FROM Vehicle o WHERE o.brand.brandId = ?1")
    List<Vehicle> findVehiclesBybrandId(Integer brandId);


    List<Vehicle> findByAddressContaining(String address);

    @Query("select v from Vehicle v where v.address.addressId = ?1 and v.rentByDay between ?2 and ?3")
    List<Vehicle> findByAddressAndPrice(Integer address,Double minPrice,Double maxPrice);


    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))" +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.vehicleId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    VehicleDto findVehicleDtoById(Integer vehicleId);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h    on v.vehicleId=h.vehicle.vehicleId where h.customer.cusUsername = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findVehicleByCustomerWasHire(String cusUsername);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.store.storeId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findByStoreId(Integer storeId);



}
