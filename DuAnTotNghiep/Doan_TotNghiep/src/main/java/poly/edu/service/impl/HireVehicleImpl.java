package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.dto.HireDto;
import poly.edu.dto.RevenueDto;
import poly.edu.dto.TopRentedVehicleDTO;
import poly.edu.dto.VehicleRevenue;
import poly.edu.model.HireVehicle;
import poly.edu.responsitory.HireVehicleReps;
import poly.edu.service.HireVehicleService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class HireVehicleImpl implements HireVehicleService {
    @Autowired
    private HireVehicleReps hireVehicleReps;

    @Override
    @Query(value = "SELECT new poly.edu.dto.TopRentedVehicleDTO(hv.vehicle.vehicleId,hv.vehicle.vehicleName, COUNT(*)) FROM HireVehicle hv GROUP BY hv.vehicle.vehicleId,hv.vehicle.vehicleName ORDER BY COUNT(*) DESC")
    public List<TopRentedVehicleDTO> findTopRentedVehicles() {
        return hireVehicleReps.findTopRentedVehicles();
    }

    @Override
    @Query("SELECT o FROM HireVehicle o WHERE o.statusAccept = ?1 and o.vehicle.store.storeId = ?2")
    public List<HireVehicle> getByStatusAcceptAndStoreId(boolean statusAccept, Integer storeId) {
        return hireVehicleReps.getByStatusAcceptAndStoreId(statusAccept, storeId);
    }

    @Override
    @Query("SELECT new poly.edu.dto.VehicleRevenue(v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,count(h.vehicle.vehicleId),v.address,v.store ,sum(h.totalMoney)) from Vehicle v left join HireVehicle h " +
            "on v.vehicleId= h.vehicle.vehicleId where v.store.storeId = ?1 group by v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,v.address,v.store order by sum(h.totalMoney) desc ")
    public List<VehicleRevenue> getRevenueVehicle(Integer storeId) {
        return hireVehicleReps.getRevenueVehicle(storeId);
    }

    @Override
    @Query("SELECT new poly.edu.dto.VehicleRevenue(v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,count(h.vehicle.vehicleId),v.address,v.store ,sum(h.totalMoney)) from Vehicle v left join HireVehicle h " +
            "on v.vehicleId= h.vehicle.vehicleId where month(h.hireDate) = ?1 and v.store.storeId = ?2 group by v.vehicleId,v.image,v.rentByDay,v.description,v.vehicleName,v.address,v.store ")
    public List<VehicleRevenue> getRevenueByMonth(Integer month, Integer storeId) {
        return hireVehicleReps.getRevenueByMonth(month, storeId);
    }

    @Override
    @Query("SELECT new poly.edu.dto.RevenueDto(month(h.hireDate),sum(h.totalMoney)) from  HireVehicle h group by month(h.hireDate)")
    public List<RevenueDto> getRevenueStatistics() {
        return hireVehicleReps.getRevenueStatistics();
    }

    @Override
    public List<HireVehicle> findAll() {
        return hireVehicleReps.findAll();
    }

    @Override
    public List<HireVehicle> findAll(Sort sort) {
        return hireVehicleReps.findAll(sort);
    }

    @Override
    public List<HireVehicle> findAllById(Iterable<Integer> integers) {
        return hireVehicleReps.findAllById(integers);
    }

    @Override
    public <S extends HireVehicle> List<S> saveAll(Iterable<S> entities) {
        return hireVehicleReps.saveAll(entities);
    }

    @Override
    public void flush() {
        hireVehicleReps.flush();
    }

    @Override
    public <S extends HireVehicle> S saveAndFlush(S entity) {
        return hireVehicleReps.saveAndFlush(entity);
    }

    @Override
    public <S extends HireVehicle> List<S> saveAllAndFlush(Iterable<S> entities) {
        return hireVehicleReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<HireVehicle> entities) {
        hireVehicleReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<HireVehicle> entities) {
        hireVehicleReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        hireVehicleReps.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        hireVehicleReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public HireVehicle getOne(Integer integer) {
        return hireVehicleReps.getOne(integer);
    }

    @Override
    @Deprecated
    public HireVehicle getById(Integer integer) {
        return hireVehicleReps.getById(integer);
    }

    @Override
    public HireVehicle getReferenceById(Integer integer) {
        return hireVehicleReps.getReferenceById(integer);
    }

    @Override
    public <S extends HireVehicle> List<S> findAll(Example<S> example) {
        return hireVehicleReps.findAll(example);
    }

    @Override
    public <S extends HireVehicle> List<S> findAll(Example<S> example, Sort sort) {
        return hireVehicleReps.findAll(example, sort);
    }

    @Override
    public Page<HireVehicle> findAll(Pageable pageable) {
        return hireVehicleReps.findAll(pageable);
    }

    @Override
    public <S extends HireVehicle> S save(S entity) {
        return hireVehicleReps.save(entity);
    }

    @Override
    public Optional<HireVehicle> findById(Integer integer) {
        return hireVehicleReps.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return hireVehicleReps.existsById(integer);
    }

    @Override
    public long count() {
        return hireVehicleReps.count();
    }

    @Override
    public void deleteById(Integer integer) {
        hireVehicleReps.deleteById(integer);
    }

    @Override
    public void delete(HireVehicle entity) {
        hireVehicleReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        hireVehicleReps.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends HireVehicle> entities) {
        hireVehicleReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        hireVehicleReps.deleteAll();
    }

    @Override
    public <S extends HireVehicle> Optional<S> findOne(Example<S> example) {
        return hireVehicleReps.findOne(example);
    }

    @Override
    public <S extends HireVehicle> Page<S> findAll(Example<S> example, Pageable pageable) {
        return hireVehicleReps.findAll(example, pageable);
    }

    @Override
    public <S extends HireVehicle> long count(Example<S> example) {
        return hireVehicleReps.count(example);
    }

    @Override
    public <S extends HireVehicle> boolean exists(Example<S> example) {
        return hireVehicleReps.exists(example);
    }

    @Override
    public <S extends HireVehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return hireVehicleReps.findBy(example, queryFunction);
    }

    @Override
    @Query("SELECT o FROM HireVehicle o WHERE o.customer.cusUsername like ?1")
    public List<HireVehicle> findHireVehicleBycusUsername(String username) {
        return hireVehicleReps.findHireVehicleBycusUsername(username);
    }

    @Override
    @Query("select new poly.edu.dto.HireDto(h.hireId,h.status,h.totalMoney,h.hireDate,h.returnDate,h.vehicle." +
            "vehicleId,h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,v.address,v.store) from HireVehicle h inner join Vehicle v " +
            "on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2" +
            " group by h.hireId,h.status,h.totalMoney,h.hireDate,h.returnDate,h.vehicle.vehicleId," +
            "h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,v.address,v.store")
    public List<HireDto> findHistoryHireByCusUsername(String cusUsername, Boolean status) {
        return hireVehicleReps.findHistoryHireByCusUsername(cusUsername, status);
    }


}
