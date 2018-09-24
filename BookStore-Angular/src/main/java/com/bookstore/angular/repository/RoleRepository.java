package com.bookstore.angular.repository;

import org.springframework.data.repository.CrudRepository;

import com.bookstore.angular.Domain.security.Role;

public interface RoleRepository extends CrudRepository<Role,Long> {
	
	

}
