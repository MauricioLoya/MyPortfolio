---
title: 'Exploring HTTP Request and Response Interceptors with Axios'
description: "In this article, we will explore how to use request and response interceptors in HTTP calls using Axios in web development. We'll learn how to add custom logic before making requests and after receiving responses, enhancing our workflow and efficiency in handling HTTP requests."
publishedAt: 2023-07-14
slug: 'exploring-HTTP-Request-and-Response-Interceptors-with-Axios'
isPublish: true
author: 'Mauricio Loya'
---

## Introduction

In web development, making HTTP requests and handling responses is a common task. Axios, a popular JavaScript library, simplifies this process by providing an intuitive API. In this tutorial, we'll delve into the world of Axios interceptors. These interceptors allow us to execute code before making a request and after receiving a response. By using them effectively, we can enhance our web development workflow. Let's dive in!

## Setting Up Axios:

To begin, make sure you have Axios installed in your project. You can install it using npm or yarn by running the following command in your terminal:

```
npm install axios
```

Or, if you prefer Yarn:

```
yarn add axios
```

Once installed, you can import Axios into your project using the following line:

```js
import axios from 'axios'
```

## Implementing Request Interceptor:

Now, let's start by creating an Axios request interceptor. This interceptor will execute code before making any HTTP requests. We'll print a simple message to the console, indicating that a request is being made. Here's how we can achieve this:

```js
axios.interceptors.request.use(
  function (config) {
    console.log('I am making a request!')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
```

n the above code snippet, we're using `axios.interceptors.request.use()` to register a request interceptor. The first function is executed before the request is made, and it receives the request configuration object (`config`). We log our custom message to the console and then return the modified `config` object.

## Implementing Response Interceptor:

Similarly, we can create an Axios response interceptor to execute code after receiving a response. Let's print a message to the console indicating that a response has been received. Here's an example:

```js
axios.interceptors.response.use(
  function (response) {
    console.log('I am receiving a response!')
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
```

n the code snippet above, `axios.interceptors.response.use()` is used to register a response interceptor. The first function is executed when a response is received, and it receives the `response` object. We log our custom message and return the unmodified `response` object.

### Putting It All Together:

Now that we have both the request and response interceptors set up, let's make a sample HTTP request to see them in action:

```js
axios
  .get('https://api.example.com/data')
  .then(function (response) {
    console.log('Data received:', response.data)
  })
  .catch(function (error) {
    console.log('An error occurred:', error)
  })
```

In the code snippet above, we're making a `GET` request to `https://api.example.com/data` using `axios.get()`. The response is then logged to the console.

When you run this code, you should see the following messages in the console:

```log
I am making a request!
I am receiving a response!
Data received: [datos de respuesta]
```

### Conclusion

By utilizing Axios interceptors, we can easily add custom logic before making HTTP requests and after receiving responses. This allows us to centralize common functionalities and handle errors efficiently. In this tutorial, we explored how to create request and response interceptors using Axios, and we saw a simple example in action. Now, armed with this knowledge, you can enhance your web development workflow and build more powerful applications with Axios.

Remember to consult the official Axios documentation for more in-depth information on interceptors and other features:
https://axios-http.com/docs/interceptors
