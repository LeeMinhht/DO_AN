package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.model.Brand;
import poly.edu.responsitory.BrandReps;
import poly.edu.service.BrandService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class BrandServiceImpl implements BrandService {
    @Autowired
    private BrandReps brandRepository;


    @Override
    public Brand getBrandById(Integer brandId) {
        return brandRepository.findById(brandId).orElse(null);
    }



    @Override
    public List<Brand> findByNameBrandContaining(String key) {
        return brandRepository.findByNameBrandContaining(key);
    }

    @Override
    public List<Brand> findAll() {
        return brandRepository.findAll();
    }

    @Override
    public List<Brand> findAll(Sort sort) {
        return brandRepository.findAll(sort);
    }

    @Override
    public List<Brand> findAllById(Iterable<Integer> integers) {
        return brandRepository.findAllById(integers);
    }

    @Override
    public <S extends Brand> List<S> saveAll(Iterable<S> entities) {
        return brandRepository.saveAll(entities);
    }

    @Override
    public void flush() {
        brandRepository.flush();
    }

    @Override
    public <S extends Brand> S saveAndFlush(S entity) {
        return brandRepository.saveAndFlush(entity);
    }

    @Override
    public <S extends Brand> List<S> saveAllAndFlush(Iterable<S> entities) {
        return brandRepository.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Brand> entities) {
        brandRepository.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Brand> entities) {
        brandRepository.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        brandRepository.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        brandRepository.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Brand getOne(Integer integer) {
        return brandRepository.getOne(integer);
    }

    @Override
    @Deprecated
    public Brand getById(Integer integer) {
        return brandRepository.getById(integer);
    }

    @Override
    public Brand getReferenceById(Integer integer) {
        return brandRepository.getReferenceById(integer);
    }

    @Override
    public <S extends Brand> List<S> findAll(Example<S> example) {
        return brandRepository.findAll(example);
    }

    @Override
    public <S extends Brand> List<S> findAll(Example<S> example, Sort sort) {
        return brandRepository.findAll(example, sort);
    }

    @Override
    public Page<Brand> findAll(Pageable pageable) {
        return brandRepository.findAll(pageable);
    }

    @Override
    public <S extends Brand> S save(S entity) {
        return brandRepository.save(entity);
    }

    @Override
    public Optional<Brand> findById(Integer integer) {
        return brandRepository.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return brandRepository.existsById(integer);
    }

    @Override
    public long count() {
        return brandRepository.count();
    }

    @Override
    public void deleteById(Integer integer) {
        brandRepository.deleteById(integer);
    }

    @Override
    public void delete(Brand entity) {
        brandRepository.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        brandRepository.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Brand> entities) {
        brandRepository.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        brandRepository.deleteAll();
    }

    @Override
    public <S extends Brand> Optional<S> findOne(Example<S> example) {
        return brandRepository.findOne(example);
    }

    @Override
    public <S extends Brand> Page<S> findAll(Example<S> example, Pageable pageable) {
        return brandRepository.findAll(example, pageable);
    }

    @Override
    public <S extends Brand> long count(Example<S> example) {
        return brandRepository.count(example);
    }

    @Override
    public <S extends Brand> boolean exists(Example<S> example) {
        return brandRepository.exists(example);
    }

    @Override
    public <S extends Brand, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return brandRepository.findBy(example, queryFunction);
    }

    @Override
    @Query("SELECT o.brand.brandId FROM Vehicle o WHERE o.vehicleId = ?1")
    public String findBrandIdByVehicleId(Integer vehicleId) {
        return brandRepository.findBrandIdByVehicleId(vehicleId);

    }

}
