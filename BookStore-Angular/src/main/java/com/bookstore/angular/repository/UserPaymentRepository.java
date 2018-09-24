package com.bookstore.angular.repository;

import org.springframework.data.repository.CrudRepository;

import com.bookstore.angular.Domain.UserPayment;

public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {

}

