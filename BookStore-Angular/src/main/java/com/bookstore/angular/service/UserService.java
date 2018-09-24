package com.bookstore.angular.service;

import java.util.Set;

import com.bookstore.angular.Domain.User;
import com.bookstore.angular.Domain.UserBilling;
import com.bookstore.angular.Domain.UserPayment;
import com.bookstore.angular.Domain.security.UserRole;

public interface UserService {

	User createUser(User user, Set<UserRole> userRoles);
	
	User findByUsername(String username);
	
	User findByEmail (String email);
	
	User save(User user);
	
	User findById(Long id);
	
    void updateUserPaymentInfo(UserBilling userBilling, UserPayment userPayment, User user);
	
	void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user);
	
	void setUserDefaultPayment(Long userPaymentId, User user);

}
