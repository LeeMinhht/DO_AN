package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poly.edu.model.Role;

@Repository
public interface RoleReps extends JpaRepository<Role,String> {
}
