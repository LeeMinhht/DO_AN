package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.dto.MonthlyRevenue;
import poly.edu.dto.StoreDto;
import poly.edu.dto.VehicleRevenue;
import poly.edu.model.Brand;
import poly.edu.model.Customer;
import poly.edu.model.Store;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface StoreReps extends JpaRepository<Store,Integer> {
    public List<Store> findByNameStoreContaining(String key);
    @Query("SELECT o FROM Store o WHERE o.customer.cusUsername like ?1")
    List<Store> findByCusUsername(String username);

    @Query("SELECT new poly.edu.dto.StoreDto(s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer,count(v.store.storeId)) " +
            "from Store s inner join Vehicle v on s.storeId=v.store.storeId where s.customer.cusUsername like ?1 group by s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer")
    List<StoreDto> findStoreAndSLVehicleByCustomer(String username);

    @Query("select v.store from Vehicle v where v.vehicleId = ?1")
    Store findStoreByVehicleId(Integer vehicleId);


    @Query("SELECT NEW poly.edu.dto.MonthlyRevenue(YEAR(s.createDate), MONTH(s.createDate), SUM(s.cartStore)) " +
            "FROM Store s " +
            "GROUP BY YEAR(s.createDate), MONTH(s.createDate) " +
            "ORDER BY YEAR(s.createDate), MONTH(s.createDate)")
    List<MonthlyRevenue> getMonthlyRevenues();



}
