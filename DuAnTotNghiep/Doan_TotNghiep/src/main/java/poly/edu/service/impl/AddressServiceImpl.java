package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.dto.AddressDto;
import poly.edu.model.Address;
import poly.edu.responsitory.AddressReps;
import poly.edu.service.AddressService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    AddressReps addressReps;

    @Override
    @Query("SELECT new poly.edu.dto.AddressDto(a.addressId, a.addressName,a.image, COUNT(v.address.addressId)) from Address a inner join Vehicle v \n" +
            "on a.addressId = v.address.addressId group by a.addressId, a.addressName,a.image ")
    public List<AddressDto> findTop4Address(Pageable pageable) {
        return addressReps.findTop4Address(pageable);
    }

    @Override
    public List<Address> findAll() {
        return addressReps.findAll();
    }

    @Override
    public List<Address> findAll(Sort sort) {
        return addressReps.findAll(sort);
    }

    @Override
    public List<Address> findAllById(Iterable<Integer> integers) {
        return addressReps.findAllById(integers);
    }

    @Override
    public <S extends Address> List<S> saveAll(Iterable<S> entities) {
        return addressReps.saveAll(entities);
    }

    @Override
    public void flush() {
        addressReps.flush();
    }

    @Override
    public <S extends Address> S saveAndFlush(S entity) {
        return addressReps.saveAndFlush(entity);
    }

    @Override
    public <S extends Address> List<S> saveAllAndFlush(Iterable<S> entities) {
        return addressReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Address> entities) {
        addressReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Address> entities) {
        addressReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        addressReps.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        addressReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Address getOne(Integer integer) {
        return addressReps.getOne(integer);
    }

    @Override
    @Deprecated
    public Address getById(Integer integer) {
        return addressReps.getById(integer);
    }

    @Override
    public Address getReferenceById(Integer integer) {
        return addressReps.getReferenceById(integer);
    }

    @Override
    public <S extends Address> List<S> findAll(Example<S> example) {
        return addressReps.findAll(example);
    }

    @Override
    public <S extends Address> List<S> findAll(Example<S> example, Sort sort) {
        return addressReps.findAll(example, sort);
    }

    @Override
    public Page<Address> findAll(Pageable pageable) {
        return addressReps.findAll(pageable);
    }

    @Override
    public <S extends Address> S save(S entity) {
        return addressReps.save(entity);
    }

    @Override
    public Optional<Address> findById(Integer integer) {
        return addressReps.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return addressReps.existsById(integer);
    }

    @Override
    public long count() {
        return addressReps.count();
    }

    @Override
    public void deleteById(Integer integer) {
        addressReps.deleteById(integer);
    }

    @Override
    public void delete(Address entity) {
        addressReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        addressReps.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Address> entities) {
        addressReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        addressReps.deleteAll();
    }

    @Override
    public <S extends Address> Optional<S> findOne(Example<S> example) {
        return addressReps.findOne(example);
    }

    @Override
    public <S extends Address> Page<S> findAll(Example<S> example, Pageable pageable) {
        return addressReps.findAll(example, pageable);
    }

    @Override
    public <S extends Address> long count(Example<S> example) {
        return addressReps.count(example);
    }

    @Override
    public <S extends Address> boolean exists(Example<S> example) {
        return addressReps.exists(example);
    }

    @Override
    public <S extends Address, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return addressReps.findBy(example, queryFunction);
    }
}
