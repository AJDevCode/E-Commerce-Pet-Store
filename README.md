# E-Commerce-Pet-Store

## Description
The E-Commerce Pet Store is a full-stack web application developed using React.js, Node.js, HTML/CSS, Docker, MySQL, and Spring Boot. This platform offers a range of pet-related products with features including categorized items, a shopping cart, various payment options, and user authentication.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Prerequisites
Before you begin, ensure you have the following requirements:

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **Docker**: Install Docker to run the application and database containers. You can download Docker from [docker.com](https://www.docker.com/).

- **MySQL Database**: Set up a MySQL database and note the connection details. You will need to provide these in the application configuration.

## Installation
Follow these steps to set up the E-Commerce Pet Store locally:

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/e-commerce-pet-store.git
```
### Step 2: Navigate to the Project Directory
```bash
cd client
```
### Step 3: Configure Database Connection
Create a .env file in the backend directory and configure the database connection:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_DATABASE=petstore
```
### Step 4: Start the Application Containers
```bash
docker-compose up -d
```
## Usage
Once the application is running, you can use the following features:

  - Browse pet products by categories.
  
  - Add items to the shopping cart.
  
  - View and manage the shopping cart.
  
  - Proceed to checkout and choose from various payment options.
  
  - Log in to your account for a personalized shopping experience.


## Features
The E-Commerce Pet Store offers the following key features:

  - Categorized pet products with detailed descriptions.

  - Shopping cart functionality with the ability to add, remove, and update items.

  - User authentication for personalized shopping experiences.

  - Full payment methods for checkout.

## Technologies Used
  - **Frontend:** React.js, HTML, CSS
  - **Backend:** Node.js, Express, Spring Boot
  - **Database:** MySQL
  - **Containerization:** Docker
    
## Contributing
  - Abhayjit Sodhi
  - Syed Numair Shah
  - Alexey Kazinich
  - Ishraque Mashrur
