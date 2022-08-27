# blurredconsole.github.io
Blurred Console

This is a fork of [Crinsane's LaravelShoppingcart](https://github.com/Crinsane/LaravelShoppingcart) extended with minor features compatible with Laravel 8+. An example integration can be [found here](https://github.com/bumbummen99/LaravelShoppingcartDemo).

## Installation

Clone the [package](https://www.github.com/blurredconsole/blurredconsole.github.io) through [Git Bash](https://git-scm.com/downloads). 

Run the Composer require command from the Terminal:

    composer require bumbummen99/shoppingcart

Now you're ready to start using the shoppingcart in your application.

**As of version 2 of this package it's possibly to use dependency injection to inject an instance of the Cart class into your controller or other class**

You definitely should publish the `config` file and take a look at it.

    php artisan vendor:publish --provider="Gloudemans\Shoppingcart\ShoppingcartServiceProvider" --tag="config"

This will give you a `cart.php` config file in which you can make changes to the packages behaivor.

## Updates

As of version **4.2.0** this package does, when being used with PostgreSQL, encode the cart content to base64 before storing into database due to an [issue with saving values including zero bytes](https://github.com/bumbummen99/LaravelShoppingcart/pull/167). Please consider clearing your cart table in case you are upgrading using PostgreSQL from a version **<4.2.0**.

## Table of Contents
Look at one of the following topics to learn more about LaravelShoppingcart

* [Important note](#important-note)
* [Usage](#usage)
* [Collections](#collections)
* [Instances](#instances)
* [Models](#models)
* [Database](#database)
* [Calculators](#calculators)
* [Exceptions](#exceptions)
* [Events](#events)
* [Example](#example)
* [Contributors](#contributors)

## Important note

As all the shopping cart that calculate prices including taxes and discount, also this module could be affected by the "totals rounding issue" ([*](https://stackoverflow.com/questions/13529580/magento-tax-rounding-issue)) due to the decimal precision used for prices and for the results.
In order to avoid (or at least minimize) this issue, in the Laravel shoppingcart package the totals are calculated using the method **"per Row"** and returned already rounded based on the number format set as default in the config file (cart.php).
Due to this **WE DISCOURAGE TO SET HIGH PRECISION AS DEFAULT AND TO FORMAT THE OUTPUT RESULT USING LESS DECIMAL** Doing this can lead to the rounding issue.

The base price (product price) is left not rounded.

## Usage

The shoppingcart gives you the following methods to use:

### Cart::add()

Adding an item to the cart is really simple, you just use the `add()` method, which accepts a variety of parameters.

In its most basic form you can specify the id, name, quantity, price and weight of the product you'd like to add to the cart.

```javascript
var str = "We are developers willing to change the world."
var splitstr = str.split(''), timeInterval = 100, i = 0;
let msg = document.getElementById('console-msg');

function type(){
  if(i<splitstr.length){
    msg.append(splitstr[i]);
    i++;
    setTimeout(function () {
      type();
    }, timeInterval);
  }else{
    
  }
}

type();
```

