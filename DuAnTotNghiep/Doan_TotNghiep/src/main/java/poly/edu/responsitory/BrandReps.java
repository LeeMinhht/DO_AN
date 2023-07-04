package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;

import java.util.List;
import java.util.Optional;

@Repository
public interface BrandReps extends JpaRepository<Brand,Integer> {
    public List<Brand> findByNameBrandContaining(String key);
//    @Query("SELECT o FROM Brand o WHERE o..brandId = ?1")
//    public Optional<Brand> findBrandByVehicleId(Integer vehicleId);

    @Query("SELECT o.brand.brandId FROM Vehicle o WHERE o.vehicleId = ?1")
    public String findBrandIdByVehicleId(Integer vehicleId);


}
