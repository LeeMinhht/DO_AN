package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.model.Comment;
import poly.edu.responsitory.CommentReps;
import poly.edu.service.CommentService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentReps commentReps;

    @Override
    public List<Comment> findAll() {
        return commentReps.findAll();
    }

    @Override
    public List<Comment> findAll(Sort sort) {
        return commentReps.findAll(sort);
    }

    @Override
    public List<Comment> findAllById(Iterable<Integer> integers) {
        return commentReps.findAllById(integers);
    }

    @Override
    public <S extends Comment> List<S> saveAll(Iterable<S> entities) {
        return commentReps.saveAll(entities);
    }

    @Override
    public void flush() {
        commentReps.flush();
    }

    @Override
    public <S extends Comment> S saveAndFlush(S entity) {
        return commentReps.saveAndFlush(entity);
    }

    @Override
    public <S extends Comment> List<S> saveAllAndFlush(Iterable<S> entities) {
        return commentReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Comment> entities) {
        commentReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Comment> entities) {
        commentReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        commentReps.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        commentReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Comment getOne(Integer integer) {
        return commentReps.getOne(integer);
    }

    @Override
    @Deprecated
    public Comment getById(Integer integer) {
        return commentReps.getById(integer);
    }

    @Override
    public Comment getReferenceById(Integer integer) {
        return commentReps.getReferenceById(integer);
    }

    @Override
    public <S extends Comment> List<S> findAll(Example<S> example) {
        return commentReps.findAll(example);
    }

    @Override
    public <S extends Comment> List<S> findAll(Example<S> example, Sort sort) {
        return commentReps.findAll(example, sort);
    }

    @Override
    public Page<Comment> findAll(Pageable pageable) {
        return commentReps.findAll(pageable);
    }

    @Override
    public <S extends Comment> S save(S entity) {
        return commentReps.save(entity);
    }

    @Override
    public Optional<Comment> findById(Integer integer) {
        return commentReps.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return commentReps.existsById(integer);
    }

    @Override
    public long count() {
        return commentReps.count();
    }

    @Override
    public void deleteById(Integer integer) {
        commentReps.deleteById(integer);
    }

    @Override
    public void delete(Comment entity) {
        commentReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        commentReps.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Comment> entities) {
        commentReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        commentReps.deleteAll();
    }

    @Override
    public <S extends Comment> Optional<S> findOne(Example<S> example) {
        return commentReps.findOne(example);
    }

    @Override
    public <S extends Comment> Page<S> findAll(Example<S> example, Pageable pageable) {
        return commentReps.findAll(example, pageable);
    }

    @Override
    public <S extends Comment> long count(Example<S> example) {
        return commentReps.count(example);
    }

    @Override
    public <S extends Comment> boolean exists(Example<S> example) {
        return commentReps.exists(example);
    }

    @Override
    public <S extends Comment, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return commentReps.findBy(example, queryFunction);
    }

    @Override
    @Query("select c from Comment c inner  join HireVehicle h on c.hireVehicle.hireId = h.hireId where h.vehicle.vehicleId = ?1")
    public List<Comment> findCommentByVehicleId(Integer VehicleId) {
        return commentReps.findCommentByVehicleId(VehicleId);
    }
}
