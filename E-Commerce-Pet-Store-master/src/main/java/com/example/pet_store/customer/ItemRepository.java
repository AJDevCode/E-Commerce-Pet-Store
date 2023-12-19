package com.example.pet_store.customer;

import com.example.pet_store.customer.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item,Integer> {}
