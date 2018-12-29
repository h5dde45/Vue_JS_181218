package com.example.demo.domain;

public class Product {
    private int id;
    private String title;
    private double price;
    private int qt;

    public Product() {
    }

    public Product(int id, String title, double price, int qt) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.qt = qt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQt() {
        return qt;
    }

    public void setQt(int qt) {
        this.qt = qt;
    }
}
