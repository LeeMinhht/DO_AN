package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import poly.edu.model.Comment;

import java.util.List;

public interface CommentReps extends JpaRepository<Comment,Integer> {

    @Query("select c from Comment c inner  join HireVehicle h on c.hireVehicle.hireId = h.hireId where h.vehicle.vehicleId = ?1")
    List<Comment> findCommentByVehicleId(Integer VehicleId);

}
