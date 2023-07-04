package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Brand;
import poly.edu.model.User;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface UserService {

    User saveUser(User user);

    User getUserByUsername(String username);

    List<User> getAllUsers();

    void deleteUser(String username);

    User updateUser(String username, User updatedUser);

    List<User> findAll();

    List<User> findAll(Sort sort);

    List<User> findAllById(Iterable<String> strings);

    <S extends User> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends User> S saveAndFlush(S entity);

    <S extends User> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<User> entities);

    void deleteAllInBatch(Iterable<User> entities);

    void deleteAllByIdInBatch(Iterable<String> strings);

    void deleteAllInBatch();

    @Deprecated
    User getOne(String s);

    @Deprecated
    User getById(String s);

    User getReferenceById(String s);

    <S extends User> List<S> findAll(Example<S> example);

    <S extends User> List<S> findAll(Example<S> example, Sort sort);

    Page<User> findAll(Pageable pageable);

    <S extends User> S save(S entity);

    Optional<User> findById(String s);

    boolean existsById(String s);

    long count();

    void deleteById(String s);

    void delete(User entity);

    void deleteAllById(Iterable<? extends String> strings);

    void deleteAll(Iterable<? extends User> entities);

    void deleteAll();

    <S extends User> Optional<S> findOne(Example<S> example);

    <S extends User> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends User> long count(Example<S> example);

    <S extends User> boolean exists(Example<S> example);

    <S extends User, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);
}
