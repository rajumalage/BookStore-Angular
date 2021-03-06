package com.bookstore.angular.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.angular.Domain.UserPayment;
import com.bookstore.angular.repository.UserPaymentRepository;
import com.bookstore.angular.service.UserPaymentService;

@Service
public class UserPaymentServiceImpl implements UserPaymentService{
	@Autowired
	private UserPaymentRepository userPaymentRepository;
	
	public UserPayment findById(Long id) {
		return userPaymentRepository.findOne(id);
	}
	
	public void removeById(Long id) {
		userPaymentRepository.delete(id);
	}
	
}