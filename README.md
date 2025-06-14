[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19697431&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Postman, Insomnia, or curl for API testing

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd week-2-express-js-assignment-Nebert11
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Running the Server

- To start the server:
  ```
  npm start
  ```
- For automatic restarts on file changes (if nodemon is installed):
  ```
  npm run dev
  ```

- The server will run at [http://localhost:3000](http://localhost:3000)

---

## API Documentation

### Base URL

```
http://localhost:3000/api/products
```

### Endpoints

#### 1. Get All Products

- **GET** `/api/products`
- **Query Parameters (optional):**
  - `category` (string): Filter by category
  - `page` (number): Page number for pagination
  - `limit` (number): Number of products per page

**Example Request:**
```
GET /api/products?category=electronics&page=1&limit=2
```

**Example Response:**
```json
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  {
    "id": "2",
    "name": "Smartphone",
    "description": "Latest model with 128GB storage",
    "price": 800,
    "category": "electronics",
    "inStock": true
  }
]
```

---

#### 2. Get a Product by ID

- **GET** `/api/products/:id`

**Example Request:**
```
GET /api/products/1
```

**Example Response:**
```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
```

---

#### 3. Create a New Product

- **POST** `/api/products`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Tablet",
    "description": "10-inch screen tablet",
    "price": 300,
    "category": "electronics",
    "inStock": true
  }
  ```

**Example Response:**
```json
{
  "id": "4",
  "name": "Tablet",
  "description": "10-inch screen tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```

---

#### 4. Update a Product

- **PUT** `/api/products/:id`
- **Headers:** `Content-Type: application/json`
- **Body:** (any fields to update)
  ```json
  {
    "name": "Tablet Pro",
    "price": 350
  }
  ```

**Example Response:**
```json
{
  "id": "4",
  "name": "Tablet Pro",
  "description": "10-inch screen tablet",
  "price": 350,
  "category": "electronics",
  "inStock": true
}
```

---

#### 5. Delete a Product

- **DELETE** `/api/products/:id`

**Example Response:**
```json
{
  "message": "Product Deleted",
  "product": {
    "id": "4",
    "name": "Tablet Pro",
    "description": "10-inch screen tablet",
    "price": 350,
    "category": "electronics",
    "inStock": true
  }
}
```

---

#### 6. Search Products by Name

- **GET** `/api/products/search?name=tablet`

**Example Response:**
```json
[
  {
    "id": "4",
    "name": "Tablet Pro",
    "description": "10-inch screen tablet",
    "price": 350,
    "category": "electronics",
    "inStock": true
  }
]
```

---

#### 7. Product Statistics

- **GET** `/api/products/stats`

**Example Response:**
```json
{
  "electronics": 3,
  "kitchen": 1
}
```

---

## Error Handling

- All errors return a JSON response with an appropriate HTTP status code and message.
- Example:
  ```json
  {
    "error": "NotFoundError",
    "message": "Product not found"
  }
  ```

---
