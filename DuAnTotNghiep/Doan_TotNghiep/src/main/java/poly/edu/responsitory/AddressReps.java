package poly.edu.responsitory;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.dto.AddressDto;
import poly.edu.model.Address;
import poly.edu.model.Brand;

import java.util.List;

@Repository
public interface AddressReps extends JpaRepository<Address,Integer> {
    @Query("SELECT new poly.edu.dto.AddressDto(a.addressId, a.addressName,a.image, COUNT(v.address.addressId)) from Address a inner join Vehicle v \n" +
            "on a.addressId = v.address.addressId group by a.addressId, a.addressName,a.image ")
    public List<AddressDto> findTop4Address(Pageable pageable);


}
