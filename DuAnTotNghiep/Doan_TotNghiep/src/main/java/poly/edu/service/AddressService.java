package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.dto.AddressDto;
import poly.edu.model.Address;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface AddressService {


    @Query("SELECT new poly.edu.dto.AddressDto(a.addressId, a.addressName,a.image, COUNT(v.address.addressId)) from Address a inner join Vehicle v \n" +
            "on a.addressId = v.address.addressId group by a.addressId, a.addressName,a.image ")
    List<AddressDto> findTop4Address(Pageable pageable);

    List<Address> findAll();

    List<Address> findAll(Sort sort);

    List<Address> findAllById(Iterable<Integer> integers);

    <S extends Address> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Address> S saveAndFlush(S entity);

    <S extends Address> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Address> entities);

    void deleteAllInBatch(Iterable<Address> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Address getOne(Integer integer);

    @Deprecated
    Address getById(Integer integer);

    Address getReferenceById(Integer integer);

    <S extends Address> List<S> findAll(Example<S> example);

    <S extends Address> List<S> findAll(Example<S> example, Sort sort);

    Page<Address> findAll(Pageable pageable);

    <S extends Address> S save(S entity);

    Optional<Address> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Address entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Address> entities);

    void deleteAll();

    <S extends Address> Optional<S> findOne(Example<S> example);

    <S extends Address> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Address> long count(Example<S> example);

    <S extends Address> boolean exists(Example<S> example);

    <S extends Address, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);
}
