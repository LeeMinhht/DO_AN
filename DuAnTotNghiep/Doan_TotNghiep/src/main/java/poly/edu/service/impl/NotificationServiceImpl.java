package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.model.Notification;
import poly.edu.responsitory.NotificationReps;
import poly.edu.service.NotificationService;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    NotificationReps notificationReps;

    @Override
    public List<Notification> findAllByCustomer_CusUsername(String username) {
        return notificationReps.findAllByCustomer_CusUsername(username);
    }

    @Override
    public List<Notification> findAll() {
        return notificationReps.findAll();
    }

    @Override
    public List<Notification> findAll(Sort sort) {
        return notificationReps.findAll(sort);
    }

    @Override
    public List<Notification> findAllById(Iterable<Integer> integers) {
        return notificationReps.findAllById(integers);
    }

    @Override
    public <S extends Notification> List<S> saveAll(Iterable<S> entities) {
        return notificationReps.saveAll(entities);
    }

    @Override
    public void flush() {
        notificationReps.flush();
    }

    @Override
    public <S extends Notification> S saveAndFlush(S entity) {
        return notificationReps.saveAndFlush(entity);
    }

    @Override
    public <S extends Notification> List<S> saveAllAndFlush(Iterable<S> entities) {
        return notificationReps.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Notification> entities) {
        notificationReps.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Notification> entities) {
        notificationReps.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        notificationReps.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        notificationReps.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Notification getOne(Integer integer) {
        return notificationReps.getOne(integer);
    }

    @Override
    @Deprecated
    public Notification getById(Integer integer) {
        return notificationReps.getById(integer);
    }

    @Override
    public Notification getReferenceById(Integer integer) {
        return notificationReps.getReferenceById(integer);
    }

    @Override
    public <S extends Notification> List<S> findAll(Example<S> example) {
        return notificationReps.findAll(example);
    }

    @Override
    public <S extends Notification> List<S> findAll(Example<S> example, Sort sort) {
        return notificationReps.findAll(example, sort);
    }

    @Override
    public Page<Notification> findAll(Pageable pageable) {
        return notificationReps.findAll(pageable);
    }

    @Override
    public <S extends Notification> S save(S entity) {
        return notificationReps.save(entity);
    }

    @Override
    public Optional<Notification> findById(Integer integer) {
        return notificationReps.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return notificationReps.existsById(integer);
    }

    @Override
    public long count() {
        return notificationReps.count();
    }

    @Override
    public void deleteById(Integer integer) {
        notificationReps.deleteById(integer);
    }

    @Override
    public void delete(Notification entity) {
        notificationReps.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        notificationReps.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Notification> entities) {
        notificationReps.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        notificationReps.deleteAll();
    }

    @Override
    public <S extends Notification> Optional<S> findOne(Example<S> example) {
        return notificationReps.findOne(example);
    }

    @Override
    public <S extends Notification> Page<S> findAll(Example<S> example, Pageable pageable) {
        return notificationReps.findAll(example, pageable);
    }

    @Override
    public <S extends Notification> long count(Example<S> example) {
        return notificationReps.count(example);
    }

    @Override
    public <S extends Notification> boolean exists(Example<S> example) {
        return notificationReps.exists(example);
    }

    @Override
    public <S extends Notification, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return notificationReps.findBy(example, queryFunction);
    }
}
