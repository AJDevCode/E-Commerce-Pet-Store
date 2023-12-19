package com.example.pet_store.customer;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    private final ItemRepository itemRepository;

    //customer stuff
    public List<Customer> findAllCustomers() {
        return (List<Customer>) customerRepository.findAll();
    }

    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    public void deleteCustomerById(Integer id) {
        customerRepository.deleteById(id);
    }

    //item stuff
    public List<Item> findAllItems(){return (List<Item>) itemRepository.findAll();}

    public void saveItem(Item item) { itemRepository.save(item);}

    public Optional<Item> getItem(Integer id) { return itemRepository.findById(id);}


}
