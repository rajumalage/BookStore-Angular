package com.bookstore.angular.repository;

import org.springframework.data.repository.CrudRepository;

import com.bookstore.angular.Domain.UserBilling;

public interface UserBillingRepository extends CrudRepository<UserBilling, Long> {

}

