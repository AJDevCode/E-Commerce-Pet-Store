package com.example.pet_store;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public List<Customer> findAllCustomers() {
        return (List<Customer>) customerRepository.findAll();
    }

    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    public void deleteCustomerById(Integer id) {
        customerRepository.deleteById(id);
    }
}
