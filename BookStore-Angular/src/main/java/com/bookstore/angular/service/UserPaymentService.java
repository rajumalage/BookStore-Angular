package com.bookstore.angular.service;

import com.bookstore.angular.Domain.UserPayment;

public interface UserPaymentService {
	UserPayment findById(Long id);
	
	void removeById(Long id);
}

