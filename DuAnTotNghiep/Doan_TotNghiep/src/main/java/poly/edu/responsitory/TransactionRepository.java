package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import poly.edu.model.Store;
import poly.edu.model.Transaction;

import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction,Integer> {

    @Query("select t from Transaction t where t.orderId = ?1 and t.requestId = ?2")
    public Optional<Transaction> findByOrderIdAndRequestId(String orderId, String requestId);
}
