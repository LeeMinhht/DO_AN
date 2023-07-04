package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.dto.StoreDto;
import poly.edu.model.Store;
import poly.edu.responsitory.StoreReps;
import poly.edu.service.StoreService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class StoreServiceImpl implements StoreService {
    @Autowired
    private StoreReps storeReps;

    @Override
    public List<Store> findByNameStoreContaining(String key) {
        return storeReps.findByNameStoreContaining(key);
    }

    @Override
    public List<Store> getAll(){
        return storeReps.findAll();
    }

    @Override
    public Store getStoreById(Integer storeId){
        return storeReps.findById(storeId).orElse(null);
    }

    @Override
    public Store createStore(Store store){
        return storeReps.save(store);
    }
    @Override
    public Store updateStore(Integer storeId, Store updatedStore) {
        Store existingStore = storeReps.findById(storeId).orElse(null);
        if (existingStore != null) {
            existingStore.setAddress(updatedStore.getAddress());
            existingStore.setCartStore(updatedStore.getCartStore());
            existingStore.setPhone(updatedStore.getPhone());
            existingStore.setCustomer(updatedStore.getCustomer());
            existingStore.setVehicles(updatedStore.getVehicles());
            return storeReps.save(existingStore);
        } else {
            return null; // or throw an exception, depending on your requirements
        }
    }
    @Override
    public void deleteStore(Integer storeId){
        storeReps.deleteById(storeId);
    }


    @Override
    public List<Store> findAll() {
        return storeReps.findAll();
    }

    @Override
    public List<Store> findAll(Sort sort) {
        return storeReps.findAll(sort);
    }

    @Override
    public List<Store> findAllById(Iterable<Integer> integers) {
        return storeReps.findAllById(integers);
    }

    @Override
    public <S extends Store> List<S> saveAll(Iterable<S> entities) {
        return storeReps.saveAll(entities);
    }

    @Override
    public void flush() {
        storeReps.flush();
    }

    @Override
    public <S extends Store> S saveAndFlush(S entity) {
        return storeReps.saveAndFlush(entity);
    }

    @Override
    public <S extends Store> List<S> saveAllAndFlush(Iterable<S> entities) {
        return storeReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Store> entities) {
        storeReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Store> entities) {
        storeReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        storeReps.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        storeReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Store getOne(Integer integer) {
        return storeReps.getOne(integer);
    }

    @Override
    @Deprecated
    public Store getById(Integer integer) {
        return storeReps.getById(integer);
    }

    @Override
    public Store getReferenceById(Integer integer) {
        return storeReps.getReferenceById(integer);
    }

    @Override
    public <S extends Store> List<S> findAll(Example<S> example) {
        return storeReps.findAll(example);
    }

    @Override
    public <S extends Store> List<S> findAll(Example<S> example, Sort sort) {
        return storeReps.findAll(example, sort);
    }

    @Override
    public Page<Store> findAll(Pageable pageable) {
        return storeReps.findAll(pageable);
    }

    @Override
    public <S extends Store> S save(S entity) {
        return storeReps.save(entity);
    }

    @Override
    public Optional<Store> findById(Integer integer) {
        return storeReps.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return storeReps.existsById(integer);
    }

    @Override
    public long count() {
        return storeReps.count();
    }

    @Override
    public void deleteById(Integer integer) {
        storeReps.deleteById(integer);
    }

    @Override
    public void delete(Store entity) {
        storeReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        storeReps.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Store> entities) {
        storeReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        storeReps.deleteAll();
    }

    @Override
    public <S extends Store> Optional<S> findOne(Example<S> example) {
        return storeReps.findOne(example);
    }

    @Override
    public <S extends Store> Page<S> findAll(Example<S> example, Pageable pageable) {
        return storeReps.findAll(example, pageable);
    }

    @Override
    public <S extends Store> long count(Example<S> example) {
        return storeReps.count(example);
    }

    @Override
    public <S extends Store> boolean exists(Example<S> example) {
        return storeReps.exists(example);
    }

    @Override
    public <S extends Store, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return storeReps.findBy(example, queryFunction);
    }

    @Override
    @Query("SELECT o FROM Store o WHERE o.customer.cusUsername like ?1")
    public List<Store> findByCusUsername(String username) {
        return storeReps.findByCusUsername(username);
    }

    @Override
    @Query("SELECT new poly.edu.dto.StoreDto(s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer,count(v.store.storeId)) " +
            "from Store s inner join Vehicle v on s.storeId=v.store.storeId where s.customer.cusUsername like ?1 group by s.storeId,s.nameStore,s.address,s.image,s.cartStore,s.phone,s.customer")
    public List<StoreDto> findStoreAndSLVehicleByCustomer(String username) {
        return storeReps.findStoreAndSLVehicleByCustomer(username);
    }

    @Override
    @Query("select v.store from Vehicle v where v.vehicleId = ?1")
    public Store findStoreByVehicleId(Integer vehicleId) {
        return storeReps.findStoreByVehicleId(vehicleId);
    }
}
