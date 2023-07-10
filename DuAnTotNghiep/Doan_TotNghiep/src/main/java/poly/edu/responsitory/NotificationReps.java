package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poly.edu.model.Notification;

import java.util.List;

@Repository
public interface NotificationReps extends JpaRepository<Notification,Integer> {

    List<Notification> findAllByCustomer_CusUsername(String username);

}
