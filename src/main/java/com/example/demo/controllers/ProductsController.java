package com.example.demo.controllers;

import com.example.demo.domain.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductsController {
    private List<Product> products = new ArrayList<>();

    public ProductsController() {
        products.add(new Product(1, "P1", 11.11, 11));
        products.add(new Product(2, "P2", 22.22, 22));
    }

    @GetMapping
    public List<Product> getProducts() {
        return products;
    }

    @GetMapping("{id}")
    public Product getById(int id) {
        return products.get(id);
    }

    @PostMapping
    public void addProduct(Product product){

    }

}
