# My Ecommerce API

My Ecommerce API is a simple and efficient RESTful API built using Node.js, Express, and MongoDB. It provides an easy-to-use interface for managing categories, products, orders, and users within an eCommerce platform.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
    - [Signup](#signup)
    - [Login](#login)
  - [Categories](#categories)
    - [Create Category](#create-category)
    - [Get All Categories](#get-all-categories)
    - [Get One Category](#get-one-category)
    - [Update Category](#update-category)
    - [Delete Category](#delete-category)
  - [Products](#products)
    - [Create Product](#create-product)
    - [Get All Products](#get-all-products)
    - [Get One Product](#get-one-product)
    - [Update Product](#update-product)
    - [Delete Product](#delete-product)
  - [Orders](#orders)
    - [Create Order](#create-order)
    - [Get All Orders](#get-all-orders)
    - [Get Order By ID](#get-order-by-id)
    - [Update Order](#update-order)
    - [Delete Order](#delete-order)
  - [Users](#users)
    - [Get All Users](#get-all-users)
    - [Get One User](#get-one-user)
    - [Update User](#update-user)
    - [Delete User](#delete-user)

## Getting Started

These instructions will help you set up the project and run it on your local machine for development and testing purposes.

### Prerequisites

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB Community Edition](https://www.mongodb.com/try/download/community) or use a MongoDB Atlas cluster.

### Installation

1. Clone the repository:
   git clone https://github.com/username/repository.git

2. Navigate to the project directory:
   cd repository
3. Install the dependencies:
   npm install
4. Add your configuration variables to the `.env` file, such as your MongoDB connection string and JWT secret.
5. Start the development server:
   npm run dev

The server will start listening on the specified port, and you can access the API endpoints in your browser or with a tool like Postman.

## API Documentation

The following sections describe the available API endpoints and their functionality.

### Authentication

#### Signup

- **URL**: `POST /api/auth/signup`
- **Description**: Registers a new user.
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**: A JSON object containing the created user's information and the generated access token.

#### Login

**URL**: POST /api/auth/login
**Description**: Authenticates a user and returns an access token.
**Body**:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response**: A JSON object containing the authenticated user's information and the generated access token.

### Users

#### Get All Users

- **URL**: `GET /api/user`
- **Description**: Retrieves all users. Accessible by admin users only.
- **Headers**:`Authorization: Bearer <access_token>`

- **Response**: A JSON array containing information about all registered users.

#### Get One User

- **URL**: `GET /api/user/:id`
- **Description**: Fetches a specific user based on their ID. Accessible by admin users only.
- **URL Parameters**:
- `id`: The ID of the user to be fetched.
- **Headers**:`Authorization: Bearer <access_token>`

- **Response**: A JSON object containing information about the requested user.

#### Update User

- **URL**: `PUT /api/user/:id`
- **Description**: Updates a specific user based on their ID. Accessible by admin users only.
- **URL Parameters**:
- `id`: The ID of the user to be updated.
- **Headers**:
  `Authorization: Bearer <access_token>`
- **Body**:

```json
{
  "firstName": "UpdatedFirstName",
  "lastName": "UpdatedLastName",
  "email": "updated.email@example.com"
}
```

- **Response**: A JSON object containing information about the updated user.

#### Delete User

- **URL**: `DELETE /api/user/:id`
- **Description**: Deletes a specific user based on their ID. Accessible by admin users only.
- **URL Parameters**:
- `id`: The ID of the user to be fetched.
- **Headers**:`Authorization: Bearer <access_token>`

- **Response**: A JSON object with a success message for the deleted user.

### Categories

#### Create Category

- **URL**: `POST /api/category`
- **Description**: Creates a new category. Accessible by admin users only.
- **Headers**:`Authorization: Bearer <access_token>`
- **Body**:

```json
{
  "name": "Electronics"
}
```

- **Response**: A JSON object containg information about the created category.

#### Get All Categories

- **URL**: `GET /api/category`
- **Description**: Retrieves all categories.
- **Response**: A JSON array containing information about all registered categories.

#### Get One Category

- **URL**: `GET /api/category/:id`
- **Description**: Fetches a specific category based on its ID.
- **URL Parameters**:
- `id`: The ID of the category to be fetched.
- **Response**: A JSON object containing information about the requested category.

#### Update Category

- **URL**: `PUT /api/category/:id`
- **Description**: Updates a specific category based on its ID. Accessible by admin users only.
- **URL Parameters**:
- `id`: The ID of the category to be fetched.
- **Headers**:`Authorization: Bearer <access_token>`
- **Body**:

```json
{
  "name": "UpdatedCategoryName"
}
```

- **Response**: A JSON object containing information about the updated category.

### Products

#### Create Product

- **URL**: `POST /api/product/:categoryId`
- **Description**: Creates a new product within a specific category. Accessible by admin users only.
- **URL Parameters**:
  - `categoryId`: The ID of the category for the product.
- **Headers**:`Authorization: Bearer <access_token>`
- **Body**:

```json
{
  "name": "iPhone 13",
  "price": 999,
  "description": "The latest iPhone model",
  "quantity": 10
}
```

- **Response**: A JSON object containing information about the created product.

#### Get All Products

- **URL**: `GET /api/product`
- **Description**: Retrieves all products.

- **Response**: A JSON array containing information about all registered products.

#### Get One Product

- **URL**: `GET /api/product/:id`
- **Description**: Fetches a specific product based on its ID.
- **URL Parameters**:

  - `Id`: The ID of the product to be fetched.

- **Response**: A JSON object containing information about the requested product.

#### Update Product

- **URL**: `PUT /api/product/:id`
- **Description**: Updates a specific product based on its ID. Accessible by admin users only.
- **URL Parameters**:

  - `Id`: The ID of the product to be updated.

- **Headers**:`Authorization: Bearer <access_token>`
- **Body**:

```json
{
  "name": "UpdatedProductName",
  "price": 1099,
  "description": "Updated Product Description",
  "quantity": 15
}
```

- **Response**: A JSON object containing information about the updated product.
