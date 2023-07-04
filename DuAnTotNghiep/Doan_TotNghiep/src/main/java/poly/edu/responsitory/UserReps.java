package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;
import poly.edu.model.User;

@Repository
public interface UserReps extends JpaRepository<User,String> {
}
