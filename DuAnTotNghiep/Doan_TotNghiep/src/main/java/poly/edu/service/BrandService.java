package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Brand;
import poly.edu.model.Vehicle;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface BrandService {


    Brand getBrandById(Integer brandId);



    List<Brand> findByNameBrandContaining(String key);

    List<Brand> findAll();

    List<Brand> findAll(Sort sort);

    List<Brand> findAllById(Iterable<Integer> integers);

    <S extends Brand> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Brand> S saveAndFlush(S entity);

    <S extends Brand> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Brand> entities);

    void deleteAllInBatch(Iterable<Brand> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Brand getOne(Integer integer);

    @Deprecated
    Brand getById(Integer integer);

    Brand getReferenceById(Integer integer);

    <S extends Brand> List<S> findAll(Example<S> example);

    <S extends Brand> List<S> findAll(Example<S> example, Sort sort);

    Page<Brand> findAll(Pageable pageable);

    <S extends Brand> S save(S entity);

    Optional<Brand> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Brand entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Brand> entities);

    void deleteAll();

    <S extends Brand> Optional<S> findOne(Example<S> example);

    <S extends Brand> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Brand> long count(Example<S> example);

    <S extends Brand> boolean exists(Example<S> example);

    <S extends Brand, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);

    @Query("SELECT o.brand.brandId FROM Vehicle o WHERE o.vehicleId = ?1")
    String findBrandIdByVehicleId(Integer vehicleId);
}
