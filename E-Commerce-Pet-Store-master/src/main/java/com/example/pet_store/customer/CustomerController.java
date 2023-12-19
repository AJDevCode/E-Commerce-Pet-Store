package com.example.pet_store.customer;

import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@RestController
@RequestMapping("api")
@AllArgsConstructor
public class CustomerController {
    public static void main(String[] args) {
        SpringApplication.run(CustomerController.class, args);
    }

    private final CustomerService customerService;
    @GetMapping("/customers/getAll")
    private List<Customer> getCustomers() {
        return customerService.findAllCustomers();
    }

    record NewCustomerRequest(String email, String password, String firstName, String lastName) {}
    record NewItemRequest(String name, String link, int qty, boolean newArrive, boolean bestSeller, float rating){}

    @PostMapping("/customers/add")
    public void addCustomer(@RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setEmail(request.email);
        customer.setPassword(request.password);
        customer.setFirstName(request.firstName);
        customer.setLastName(request.lastName);
        customerService.saveCustomer(customer);
    }

    @PutMapping("/customers/{CustomerId}")
    public void updateCustomer(@PathVariable("CustomerId") Integer id, @RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setId(id);
        customer.setFirstName(request.firstName);
        customer.setLastName(request.lastName);
        customer.setEmail(request.email);
        customer.setPassword(request.password);
    }
    @DeleteMapping("/customers/{CustomerId}")
    public void deleteCustomer(@PathVariable("CustomerId") Integer id) {
        customerService.deleteCustomerById(id);
    }


    //get all items
    @GetMapping("/items/getAll")
    private List<Item> getItems() {
        return customerService.findAllItems();
    }



    //get item by ID
    @PostMapping("/items/add")
    public void addItem(@RequestBody NewItemRequest request) {
        Item item = new Item();
        item.setName(request.name);
        item.setLink(request.link);
        item.setQty(request.qty);
        item.setNewArrive(request.newArrive);
        item.setBestSeller(request.bestSeller);
        item.setRating(request.rating);
        customerService.saveItem(item);
    }

    @GetMapping("/items/get/{ItemId}")
    public Optional<Item> getItem(@PathVariable("ItemId") Integer id){
        return customerService.getItem(id);

    }

}
