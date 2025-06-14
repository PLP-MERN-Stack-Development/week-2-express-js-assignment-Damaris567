// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Import the initial products
let products = require('./products');

// Search products by name
router.get('/search', (req, res, next) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: "A name is required" });
        }
        const result = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        res.json(result);
    } catch (error) {
        next(error);
    }
});

// Get product statistics
router.get('/stats', (req, res, next) => {
    try {
        const stats = {};
        products.forEach(p => {
            stats[p.category] = (stats[p.category] || 0) + 1;
        });
        res.json(stats);
    } catch (error) {
        next(error);
    }
});

// List all products with optional filtering and pagination
router.get('/', (req, res, next) => {
    try {
        let result = [...products];

        // Apply category filter if provided
        if (req.query.category) {
            result = result.filter(p => p.category === req.query.category);
        }

        // Apply pagination if provided
        if (req.query.page || req.query.limit) {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const start = (page - 1) * limit;
            const end = start + limit;
            result = result.slice(start, end);
        }

        res.json(result);
    } catch (error) {
        next(error);
    }
});

// Get a specific product by ID
router.get('/:id', (req, res, next) => {
    try {
        const product = products.find(p => p.id === req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Create a new product
router.post('/', (req, res, next) => {
    try {
        const { name, description, price, category, inStock } = req.body;
        const newProduct = {
            id: uuidv4(), // Using UUID for unique IDs
            name,
            description,
            price,
            category,
            inStock
        };
        products.push(newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
});

// Update an existing product
router.put('/:id', (req, res, next) => {
    try {
        const { name, description, price, category, inStock } = req.body;
        const product = products.find(p => p.id === req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the fields that are provided
        if (name !== undefined) product.name = name;
        if (description !== undefined) product.description = description;
        if (price !== undefined) product.price = price;
        if (category !== undefined) product.category = category;
        if (inStock !== undefined) product.inStock = inStock;

        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Delete a product
router.delete('/:id', (req, res, next) => {
    try {
        const index = products.findIndex(p => p.id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const deletedProduct = products.splice(index, 1)[0];
        res.json({ message: 'Product deleted', product: deletedProduct });
    } catch (error) {
        next(error);
    }
});

module.exports = router;