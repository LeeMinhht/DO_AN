package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.dto.StoreDto;
import poly.edu.model.Customer;
import poly.edu.model.Store;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface StoreService {
    List<Store> findByNameStoreContaining(String key);

    List<Store> getAll();

    Store getStoreById(Integer storeId);

    Store createStore(Store store);

    Store updateStore(Integer storeId, Store updatedStore);

    void deleteStore(Integer storeId);

    List<Store> findAll();

    List<Store> findAll(Sort sort);

    List<Store> findAllById(Iterable<Integer> integers);

    <S extends Store> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Store> S saveAndFlush(S entity);

    <S extends Store> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Store> entities);

    void deleteAllInBatch(Iterable<Store> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Store getOne(Integer integer);

    @Deprecated
    Store getById(Integer integer);

    Store getReferenceById(Integer integer);

    <S extends Store> List<S> findAll(Example<S> example);

    <S extends Store> List<S> findAll(Example<S> example, Sort sort);

    Page<Store> findAll(Pageable pageable);

    <S extends Store> S save(S entity);

    Optional<Store> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Store entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Store> entities);

    void deleteAll();

    <S extends Store> Optional<S> findOne(Example<S> example);

    <S extends Store> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Store> long count(Example<S> example);

    <S extends Store> boolean exists(Example<S> example);

    <S extends Store, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);


    @Query("SELECT o FROM Store o WHERE o.customer.cusUsername like ?1")
    List<Store> findByCusUsername(String username);


    @Query("SELECT new poly.edu.dto.StoreDto(s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer,count(v.store.storeId)) " +
            "from Store s inner join Vehicle v on s.storeId=v.store.storeId where s.customer.cusUsername like ?1 group by s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer")
    List<StoreDto> findStoreAndSLVehicleByCustomer(String username);

    @Query("select v.store from Vehicle v where v.vehicleId = ?1")
    Store findStoreByVehicleId(Integer vehicleId);
}
