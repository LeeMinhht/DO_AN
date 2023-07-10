package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Notification;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface NotificationService {
    List<Notification> findAllByCustomer_CusUsername(String username);

    List<Notification> findAll();

    List<Notification> findAll(Sort sort);

    List<Notification> findAllById(Iterable<Integer> integers);

    <S extends Notification> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Notification> S saveAndFlush(S entity);

    <S extends Notification> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Notification> entities);

    void deleteAllInBatch(Iterable<Notification> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Notification getOne(Integer integer);

    @Deprecated
    Notification getById(Integer integer);

    Notification getReferenceById(Integer integer);

    <S extends Notification> List<S> findAll(Example<S> example);

    <S extends Notification> List<S> findAll(Example<S> example, Sort sort);

    Page<Notification> findAll(Pageable pageable);

    <S extends Notification> S save(S entity);

    Optional<Notification> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Notification entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Notification> entities);

    void deleteAll();

    <S extends Notification> Optional<S> findOne(Example<S> example);

    <S extends Notification> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Notification> long count(Example<S> example);

    <S extends Notification> boolean exists(Example<S> example);

    <S extends Notification, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);
}
