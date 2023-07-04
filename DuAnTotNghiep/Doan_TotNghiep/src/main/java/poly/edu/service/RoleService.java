package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Role;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface RoleService {
    List<Role> findAll();

    List<Role> findAll(Sort sort);

    List<Role> findAllById(Iterable<String> strings);

    <S extends Role> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Role> S saveAndFlush(S entity);

    <S extends Role> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Role> entities);

    void deleteAllInBatch(Iterable<Role> entities);

    void deleteAllByIdInBatch(Iterable<String> strings);

    void deleteAllInBatch();

    @Deprecated
    Role getOne(String s);

    @Deprecated
    Role getById(String s);

    Role getReferenceById(String s);

    <S extends Role> List<S> findAll(Example<S> example);

    <S extends Role> List<S> findAll(Example<S> example, Sort sort);

    Page<Role> findAll(Pageable pageable);

    <S extends Role> S save(S entity);

    Optional<Role> findById(String s);

    boolean existsById(String s);

    long count();

    void deleteById(String s);

    void delete(Role entity);

    void deleteAllById(Iterable<? extends String> strings);

    void deleteAll(Iterable<? extends Role> entities);

    void deleteAll();

    <S extends Role> Optional<S> findOne(Example<S> example);

    <S extends Role> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Role> long count(Example<S> example);

    <S extends Role> boolean exists(Example<S> example);

    <S extends Role, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);
}
