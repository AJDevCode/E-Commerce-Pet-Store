package com.example.pet_store;

import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("api/customers")
@AllArgsConstructor
public class CustomerController {
    public static void main(String[] args) {
        SpringApplication.run(CustomerController.class, args);
    }

    private final CustomerService customerService;
    @GetMapping
    private List<Customer> getCustomers() {
        return customerService.findAllCustomers();
    }

    record NewCustomerRequest(String name, String email, Integer age) {}

    @PostMapping
    public void addCustomer(@RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setName(request.name);
        customer.setEmail(request.email);
        customer.setAge(request.age);
    }

    @PutMapping("{CustomerId}")
    public void updateCustomer(@PathVariable("CustomerId") Integer id, @RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setId(id);
        customer.setName(request.name);
        customer.setEmail(request.email);
        customer.setAge(request.age);
    }
    @DeleteMapping("{CustomerId}")
    public void deleteCustomer(@PathVariable("CustomerId") Integer id) {
        customerService.deleteCustomerById(id);
    }
}
