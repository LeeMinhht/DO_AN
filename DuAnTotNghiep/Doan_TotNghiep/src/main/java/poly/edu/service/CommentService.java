package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Comment;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface CommentService {
    List<Comment> findAll();

    List<Comment> findAll(Sort sort);

    List<Comment> findAllById(Iterable<Integer> integers);

    <S extends Comment> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Comment> S saveAndFlush(S entity);

    <S extends Comment> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Comment> entities);

    void deleteAllInBatch(Iterable<Comment> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Comment getOne(Integer integer);

    @Deprecated
    Comment getById(Integer integer);

    Comment getReferenceById(Integer integer);

    <S extends Comment> List<S> findAll(Example<S> example);

    <S extends Comment> List<S> findAll(Example<S> example, Sort sort);

    Page<Comment> findAll(Pageable pageable);

    <S extends Comment> S save(S entity);

    Optional<Comment> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Comment entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Comment> entities);

    void deleteAll();

    <S extends Comment> Optional<S> findOne(Example<S> example);

    <S extends Comment> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Comment> long count(Example<S> example);

    <S extends Comment> boolean exists(Example<S> example);

    <S extends Comment, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);

    @Query("select c from Comment c inner  join HireVehicle h on c.hireVehicle.hireId = h.hireId where h.vehicle.vehicleId = ?1")
    List<Comment> findCommentByVehicleId(Integer VehicleId);
}
