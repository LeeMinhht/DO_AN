package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.dto.VehicleDto;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.VehicleSerivce;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class VehicleServiceImpl implements VehicleSerivce {

    @Autowired
    private VehicleResp vehicleResp;

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId where v.vehicleType = ?1 and v.brand.brandId = ?2 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public List<VehicleDto> findByVehicleType(Boolean type, Integer bandId) {
        return vehicleResp.findByVehicleType(type, bandId);
    }

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public List<VehicleDto> findAllVehicleDto() {
        return vehicleResp.findAllVehicleDto();
    }

    @Override
    public List<Vehicle> findAllByVehicleNameContaining(String vehicleName) {
        return vehicleResp.findAllByVehicleNameContaining(vehicleName);
    }

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h on v.vehicleId=h.vehicle.vehicleId group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public List<VehicleDto> findTop8() {
        return vehicleResp.findTop8();
    }

    @Override
    public List<Vehicle> findByVehicleNameContaining(String key) {
        return vehicleResp.findByVehicleNameContaining(key);
    }

    @Override
    @Query("Select v from Vehicle v where v.address.addressId =  ?1")
    public List<Vehicle> searchByAddress(Integer addressId) {
        return vehicleResp.searchByAddress(addressId);
    }

    @Override
    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    public List<Vehicle> findByStore(Integer storeId) {
        return vehicleResp.findByStore(storeId);
    }

    @Override
    @Query("SELECT o FROM Vehicle o WHERE o.brand.brandId = ?1")
    public List<Vehicle> findVehiclesBybrandId(Integer brandId) {
        return vehicleResp.findVehiclesBybrandId(brandId);
    }

    @Override
    public List<Vehicle> findByAddressContaining(String address) {
        return vehicleResp.findByAddressContaining(address);
    }

    @Override
    @Query("select v from Vehicle v where v.address.addressId = ?1 and v.rentByDay between ?2 and ?3")
    public List<Vehicle> findByAddressAndPrice(Integer address, Double minPrice, Double maxPrice) {
        return vehicleResp.findByAddressAndPrice(address, minPrice, maxPrice);
    }

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))" +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.vehicleId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public VehicleDto findVehicleDtoById(Integer vehicleId) {
        return vehicleResp.findVehicleDtoById(vehicleId);
    }

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v inner join HireVehicle h    on v.vehicleId=h.vehicle.vehicleId where h.customer.cusUsername = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public List<VehicleDto> findVehicleByCustomerWasHire(String cusUsername) {
        return vehicleResp.findVehicleByCustomerWasHire(cusUsername);
    }

    @Override
    @Query("select new poly.edu.dto.VehicleDto(v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring," +
            "v.description,v.address,v.store,v.brand,count(h.vehicle.vehicleId))   " +
            "from Vehicle v left join HireVehicle h on v.vehicleId=h.vehicle.vehicleId  where v.store.storeId = ?1 group by v.vehicleId,v.vehicleName,v.rentByDay,v.image,v.image2,v.image3,v.statusHiring, v.description,v.address,v.store,v.brand")
    public List<VehicleDto> findByStoreId(Integer storeId) {
        return vehicleResp.findByStoreId(storeId);
    }

    @Override
    public List<Vehicle> findAll() {
        return vehicleResp.findAll();
    }

    @Override
    public List<Vehicle> findAll(Sort sort) {
        return vehicleResp.findAll(sort);
    }

    @Override
    public List<Vehicle> findAllById(Iterable<Integer> integers) {
        return vehicleResp.findAllById(integers);
    }

    @Override
    public <S extends Vehicle> List<S> saveAll(Iterable<S> entities) {
        return vehicleResp.saveAll(entities);
    }

    @Override
    public void flush() {
        vehicleResp.flush();
    }

    @Override
    public <S extends Vehicle> S saveAndFlush(S entity) {
        return vehicleResp.saveAndFlush(entity);
    }

    @Override
    public <S extends Vehicle> List<S> saveAllAndFlush(Iterable<S> entities) {
        return vehicleResp.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Vehicle> entities) {
        vehicleResp.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Vehicle> entities) {
        vehicleResp.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        vehicleResp.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        vehicleResp.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Vehicle getOne(Integer integer) {
        return vehicleResp.getOne(integer);
    }

    @Override
    @Deprecated
    public Vehicle getById(Integer integer) {
        return vehicleResp.getById(integer);
    }

    @Override
    public Vehicle getReferenceById(Integer integer) {
        return vehicleResp.getReferenceById(integer);
    }

    @Override
    public <S extends Vehicle> List<S> findAll(Example<S> example) {
        return vehicleResp.findAll(example);
    }

    @Override
    public <S extends Vehicle> List<S> findAll(Example<S> example, Sort sort) {
        return vehicleResp.findAll(example, sort);
    }

    @Override
    public Page<Vehicle> findAll(Pageable pageable) {
        return vehicleResp.findAll(pageable);
    }

    @Override
    public <S extends Vehicle> S save(S entity) {
        return vehicleResp.save(entity);
    }

    @Override
    public Optional<Vehicle> findById(Integer integer) {
        return vehicleResp.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return vehicleResp.existsById(integer);
    }

    @Override
    public long count() {
        return vehicleResp.count();
    }

    @Override
    public void deleteById(Integer integer) {
        vehicleResp.deleteById(integer);
    }

    @Override
    public void delete(Vehicle entity) {
        vehicleResp.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        vehicleResp.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Vehicle> entities) {
        vehicleResp.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        vehicleResp.deleteAll();
    }

    @Override
    public <S extends Vehicle> Optional<S> findOne(Example<S> example) {
        return vehicleResp.findOne(example);
    }

    @Override
    public <S extends Vehicle> Page<S> findAll(Example<S> example, Pageable pageable) {
        return vehicleResp.findAll(example, pageable);
    }

    @Override
    public <S extends Vehicle> long count(Example<S> example) {
        return vehicleResp.count(example);
    }

    @Override
    public <S extends Vehicle> boolean exists(Example<S> example) {
        return vehicleResp.exists(example);
    }

    @Override
    public <S extends Vehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return vehicleResp.findBy(example, queryFunction);
    }
}
