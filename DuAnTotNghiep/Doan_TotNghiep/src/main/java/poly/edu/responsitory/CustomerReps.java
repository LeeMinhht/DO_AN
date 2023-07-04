package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poly.edu.model.Customer;

@Repository
public interface CustomerReps extends JpaRepository<Customer, String> {

}
