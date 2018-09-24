package com.bookstore.angular.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bookstore.angular.Domain.Book;

public interface BookRepository extends CrudRepository<Book, Long> {
	
	List<Book> findByTitleContaining(String keyword);

}