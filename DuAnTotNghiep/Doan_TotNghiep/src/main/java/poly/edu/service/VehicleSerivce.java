package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.dto.VehicleDto;
import poly.edu.model.Vehicle;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface  VehicleSerivce {


    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId where v.vehicleType = ?1 and v.brand.brandId = ?2 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findByVehicleType(Boolean type, Integer bandId);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findAllVehicleDto();

    List<Vehicle> findAllByVehicleNameContaining(String vehicleName);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findTop8();

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId)) " +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.vehicleId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    VehicleDto findVehicleDtoById(Integer vehicleId);

    List<Vehicle> findByVehicleNameContaining(String key);

    @Query("Select v from Vehicle v where v.address.addressId =  ?1")
    List<Vehicle> searchByAddress(Integer addressId);

    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    List<Vehicle> findByStore(Integer storeId);

    @Query("SELECT o FROM Vehicle o WHERE o.brand.brandId = ?1")
    List<Vehicle> findVehiclesBybrandId(Integer brandId);

    List<Vehicle> findByAddressContaining(String address);

    @Query("select v from Vehicle v where v.address.addressId = ?1 and v.rentByDay between ?2 and ?3")
    List<Vehicle> findByAddressAndPrice(Integer address, Double minPrice, Double maxPrice);


    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h    on v.vehicleId=h.vehicle.vehicleId where h.customer.cusUsername = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findVehicleByCustomerWasHire(String cusUsername);

    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.store.storeId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    List<VehicleDto> findByStoreId(Integer storeId);

    List<Vehicle> findAll();

    List<Vehicle> findAll(Sort sort);

    List<Vehicle> findAllById(Iterable<Integer> integers);

    <S extends Vehicle> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Vehicle> S saveAndFlush(S entity);

    <S extends Vehicle> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Vehicle> entities);

    void deleteAllInBatch(Iterable<Vehicle> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Vehicle getOne(Integer integer);

    @Deprecated
    Vehicle getById(Integer integer);

    Vehicle getReferenceById(Integer integer);

    <S extends Vehicle> List<S> findAll(Example<S> example);

    <S extends Vehicle> List<S> findAll(Example<S> example, Sort sort);

    Page<Vehicle> findAll(Pageable pageable);

    <S extends Vehicle> S save(S entity);

    Optional<Vehicle> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Vehicle entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Vehicle> entities);

    void deleteAll();

    <S extends Vehicle> Optional<S> findOne(Example<S> example);

    <S extends Vehicle> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Vehicle> long count(Example<S> example);

    <S extends Vehicle> boolean exists(Example<S> example);

    <S extends Vehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);
}
