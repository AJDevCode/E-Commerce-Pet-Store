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

    @CrossOrigin(origins = "http://localhost:2001")
    @GetMapping("/customers/getAll")
    private List<Customer> getCustomers() {
        return customerService.findAllCustomers();
    }

    record NewCustomerRequest(String email, String password, String firstName, String lastName) {}
    record NewItemRequest(String name, String shortDescription, String longDescription, int price, String category, String createdAt, String updatedAt, String publishedAt, int image, String createdBy, String updatedBy){}

    @CrossOrigin(origins = "http://localhost:2001")
    @PostMapping("/customers/add")
    public void addCustomer(@RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setEmail(request.email);
        customer.setPassword(request.password);
        customer.setFirstName(request.firstName);
        customer.setLastName(request.lastName);
        customerService.saveCustomer(customer);
    }


    @CrossOrigin(origins = "http://localhost:2001")
    @PutMapping("/customers/{CustomerId}")
    public void updateCustomer(@PathVariable("CustomerId") Integer id, @RequestBody NewCustomerRequest request) {
        Customer customer = new Customer();
        customer.setId(id);
        customer.setFirstName(request.firstName);
        customer.setLastName(request.lastName);
        customer.setEmail(request.email);
        customer.setPassword(request.password);
    }

    @CrossOrigin(origins = "http://localhost:2001")
    @DeleteMapping("/customers/{CustomerId}")
    public void deleteCustomer(@PathVariable("CustomerId") Integer id) {
        customerService.deleteCustomerById(id);
    }


    //get all items
    @CrossOrigin(origins = "http://localhost:2001")
    @GetMapping("/items/getAll")
    private List<Item> getItems() {

        return customerService.findAllItems();
    }



    //Add item
    @CrossOrigin(origins = "http://localhost:2001")
    @PostMapping("/items/add")
    public void addItem(@RequestBody NewItemRequest request) {
        Item item = new Item();
        item.setName(request.name);
        item.setShortDescription(request.shortDescription);
        item.setLongDescription(request.longDescription);
        item.setPrice(request.price);
        item.setCategory(request.category);
        item.setCreatedAt(request.createdAt);
        item.setUpdatedAt(request.updatedAt);
        item.setPublishedAt(request.publishedAt);
        item.setImage(request.image);
        item.setCreatedBy(request.createdBy);
        item.setUpdatedBy(request.updatedBy);
        customerService.saveItem(item);
    }

    //get item by ID
    @GetMapping("/items/get/{ItemId}")
    public Optional<Item> getItem(@PathVariable("ItemId") Integer id){
        return customerService.getItem(id);

    }

}
