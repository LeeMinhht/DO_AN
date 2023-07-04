package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.model.Role;
import poly.edu.responsitory.RoleReps;
import poly.edu.service.RoleService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleReps roleReps;

    @Override
    public List<Role> findAll() {
        return roleReps.findAll();
    }

    @Override
    public List<Role> findAll(Sort sort) {
        return roleReps.findAll(sort);
    }

    @Override
    public List<Role> findAllById(Iterable<String> strings) {
        return roleReps.findAllById(strings);
    }

    @Override
    public <S extends Role> List<S> saveAll(Iterable<S> entities) {
        return roleReps.saveAll(entities);
    }

    @Override
    public void flush() {
        roleReps.flush();
    }

    @Override
    public <S extends Role> S saveAndFlush(S entity) {
        return roleReps.saveAndFlush(entity);
    }

    @Override
    public <S extends Role> List<S> saveAllAndFlush(Iterable<S> entities) {
        return roleReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Role> entities) {
        roleReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Role> entities) {
        roleReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<String> strings) {
        roleReps.deleteAllByIdInBatch(strings);
    }

    @Override
    public void deleteAllInBatch() {
        roleReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Role getOne(String s) {
        return roleReps.getOne(s);
    }

    @Override
    @Deprecated
    public Role getById(String s) {
        return roleReps.getById(s);
    }

    @Override
    public Role getReferenceById(String s) {
        return roleReps.getReferenceById(s);
    }

    @Override
    public <S extends Role> List<S> findAll(Example<S> example) {
        return roleReps.findAll(example);
    }

    @Override
    public <S extends Role> List<S> findAll(Example<S> example, Sort sort) {
        return roleReps.findAll(example, sort);
    }

    @Override
    public Page<Role> findAll(Pageable pageable) {
        return roleReps.findAll(pageable);
    }

    @Override
    public <S extends Role> S save(S entity) {
        return roleReps.save(entity);
    }

    @Override
    public Optional<Role> findById(String s) {
        return roleReps.findById(s);
    }

    @Override
    public boolean existsById(String s) {
        return roleReps.existsById(s);
    }

    @Override
    public long count() {
        return roleReps.count();
    }

    @Override
    public void deleteById(String s) {
        roleReps.deleteById(s);
    }

    @Override
    public void delete(Role entity) {
        roleReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends String> strings) {
        roleReps.deleteAllById(strings);
    }

    @Override
    public void deleteAll(Iterable<? extends Role> entities) {
        roleReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        roleReps.deleteAll();
    }

    @Override
    public <S extends Role> Optional<S> findOne(Example<S> example) {
        return roleReps.findOne(example);
    }

    @Override
    public <S extends Role> Page<S> findAll(Example<S> example, Pageable pageable) {
        return roleReps.findAll(example, pageable);
    }

    @Override
    public <S extends Role> long count(Example<S> example) {
        return roleReps.count(example);
    }

    @Override
    public <S extends Role> boolean exists(Example<S> example) {
        return roleReps.exists(example);
    }

    @Override
    public <S extends Role, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return roleReps.findBy(example, queryFunction);
    }
}
