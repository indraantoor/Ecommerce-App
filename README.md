<div id="top"></div>

<a href="https://in.linkedin.com/in/indraantoor"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" /></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Ecommerce Web Application</h1>
    <img src="https://i.ibb.co/QXGhjTc/1.png" alt="1" border="0" />

  <p align="center">
    A place where you can buy and sell any items related to clothes, accessories and much more while earning money from it at one place. It has all the features to help you keep looking the best version of yourself always.
    <br />
    <a href="https://github.com/indraantoor/Ecommerce-App/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/indraantoor/Ecommerce-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/indraantoor/Ecommerce-App/issues">Request A Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://i.ibb.co/QXGhjTc/1.png" alt="1" border="0" />

This is an Ecommerce platform where a user can register themselves to sell items on the platform and track the performance of their products to deliver products for better profits.

It includes a product listings page and a product page where a user who is interested can buy the products.

A user can see and manage what’s on their cart. It includes both the front end and the backend part so it’s a full stack application.

The payment procedures are handled with the Stripe API.

It also includes different product listing pages which can also be dynamically sorted according to the users choice.

The listings will get updated in real time. If a user wants to know more about a product then they can know more about the product such as the available sizes and the price of the product.

The cart icon and the cart page will update in real time according to the user. A user can also login and register before selling items on the Ecommerce Website.

In case of a data breach and for risk management all the passwords which are saved in the database are not saved as raw strings but rather as AES Encrypted strings. So that users can rest assured that their data is in safe hands.

The front end does not directly talk with the database but rather talks to the back end using an REST API.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- React Js
- Node Js
- MongoDB
- Express Js
- Axios
- Redux
- Styled Components
- Mongoose
- JWT Tokens
- React Router
- Material UI
- CryptoJs
- Stripe API
- Nodemon
- Firebase

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Node

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/indraantoor/Ecommerce-App
   ```
   ```sh
   git clone https://github.com/indraantoor/Ecommerce-App-API
   ```
   ```sh
   git clone https://github.com/indraantoor/Ecommerce-App-Admin-Dashboard
   ```
2. Install NPM packages In All Of These Cloned Directories
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   Navigate To The API Directory
   npm start
   ```
   ```sh
   Navigate To The Admin Dashboard Directory
   npm start
   ```
   ```sh
   Navigate To The Ecommerce Directory
   npm start
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Homepage

The Home Page features a slider with various offers to entice the user to shop on the web application.

It also includes a navbar, along with various elements on the home page which when looked at in an overall product way is built to make sure the user has ease while shopping.

The web application is fully responsive and can work on various devices and screen sizes.

<img src="https://i.ibb.co/QXGhjTc/1.png" alt="1" border="0" />

### Product Listings Section

This section includes the most recent product listings and shows them in this section.

It can include any type of product.

<img src="https://i.ibb.co/h9KwRvQ/2.png" alt="2" border="0" />

### Newsletter Section

This section includes a form through which a user can sign up for the newsletter to be updated with all of the latest things happening in the Web Application.

It would include offers, tips and advice for users so that Email Marketing can also be leveraged to sell products from the web application.

<img src="https://i.ibb.co/j8T6k0z/3.png" alt="3" border="0" />

### Products Listings Page

This is a page dedicated to only the product listings and will show all of the products to the user when the user wishes to visit the products listings page.

It dynamically updates itself when the data gets updated.

<img src="https://i.ibb.co/KDdPYVv/4.png" alt="4" border="0" />

### Product Page

This page includes the details of that product which a user wants to see or may be interested to buy the product.

The details include various information like the title of the product, the description of the product and also the price of the product.

A user can add that product by selecting the size and the quantity of the item.

The cart icon will update accordingly, thus reflecting the changes.

<img src="https://i.ibb.co/5s5gvJ3/5.png" alt="5" border="0" />

### Cart Page

This page includes all the items that a user wishes to buy and displays it as a short summary.

It calculates the price and lets the user know what all things they have added in their cart.

#### Checkout Feature

This is the feature which provides the user the ability to purchase the items which they have added in the cart.

It features all the details the user should know before buying the items which they have added in their cart.

Details include taxes, shipping cost and the total cost of the items.

<img src="https://i.ibb.co/8KnKTGr/6.png" alt="6" border="0" />

### Stripe API Integration To Handle Payments

To handle the payment procedure we have used Stripe's API.

Stripe handles all the transactions from end to end with encryption without having to worry about implementing a dedicated payment service into the application.

Thus providing a faster way for developers to develop powerful applications without having to worry about things which they shouldn't and focus on the things that matter inside the application.

As a payment processor, Stripe allows business owners to accept payments from credit and debit cards and processes those payments.

Using Stripe, businesses can also accept payments from mobile wallets and buy now, pay later services.

Stripe also supports payments in a variety of currencies.

<img src="https://i.ibb.co/m5P6L90/7.png" alt="7" border="0" />

### Login Page

This is the page where the user will enter their details in order to log into the web application and manage their data.

<img src="https://i.ibb.co/C5Md6vq/8.png" alt="8" border="0" />

### Register Page

This is the page where a new user can register themselves in order to sell the items on the Ecommerce Platform with the images details and all the management of their products.

<img src="https://i.ibb.co/x1rthhn/9.png" alt="9" border="0" />

## Admin Dashboard

### Overview Page

In this page you can see all the reports about the revenue and a chart along with a track of latest transactions and user just from your homepage.

<img src="https://i.ibb.co/x7JNfPp/10.png" alt="10" border="0" />

### Manage Products Page

Here you can manage all of the listed products. You can delete and edit all of the information about the products such as if it is in stock or not, price, image and much more.

<img src="https://i.ibb.co/3m7ZkPn/11.png" alt="11" border="0" />

### Transactions Page

Here you can see all the information about the transaction that have taken place on the platform.

<img src="https://i.ibb.co/Wk0s0hx/12.png" alt="12" border="0" />

### Reports Page

Here you can see the reports of the revenue and other statistics.

<img src="https://i.ibb.co/7gqtR5P/13.png" alt="13" border="0" />

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

See the [open issues](https://github.com/indraantoor/Ecommerce-App/issues) for a list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/indraantoor/Ecommerce-App](https://github.com/indraantoor/Ecommerce-App)

<a href="https://in.linkedin.com/in/indraantoor"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" /></a>
