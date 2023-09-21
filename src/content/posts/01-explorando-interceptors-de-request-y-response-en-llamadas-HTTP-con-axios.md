---
title: 'Explorando Interceptors de Request y Response en llamadas HTTP con Axios (español)'
publishedAt: 2023-07-14
description: 'En este artículo, exploraremos cómo usar interceptores de solicitud y respuesta en llamadas HTTP utilizando Axios en el desarrollo web. Aprenderemos cómo agregar lógica personalizada antes de realizar solicitudes y después de recibir respuestas, mejorando nuestro flujo de trabajo y eficiencia en el manejo de solicitudes HTTP.'
slug: 'explorando-interceptors-de-request-y-response-en-llamadas-HTTP-con-axios'
isPublish: true
author: 'Mauricio Loya'
---

## Introducción

En el desarrollo web, hacer llamadas HTTP y manejar las respuestas es una tarea común. Axios, una popular biblioteca de JavaScript, simplifica este proceso al proporcionar una API intuitiva. En este tutorial, exploraremos los interceptores de Axios. Estos interceptores nos permiten ejecutar código antes de hacer una solicitud y después de recibir una respuesta. Al utilizarlos de manera efectiva, podemos mejorar nuestro flujo de trabajo en el desarrollo web. ¡Comencemos!

## Configurando Axios:

Para empezar, asegúrate de tener Axios instalado en tu proyecto. Puedes instalarlo utilizando npm o yarn ejecutando el siguiente comando en tu terminal:

```
npm install axios
```

O, si prefieres usar Yarn:

```
yarn add axios
```

Una vez instalado, puedes importar axios de la siguiente manera

```js
import axios from 'axios'
```

## Implementando el Interceptor de Request:

Ahora, comencemos creando un interceptor de solicitud de Axios. Este interceptor ejecutará código antes de realizar cualquier solicitud HTTP. Imprimiremos un mensaje simple en la consola que indique que se está realizando una solicitud. Así es como podemos lograrlo:

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

En el fragmento de código anterior, estamos utilizando `axios.interceptors.request.use()` para registrar un interceptor de solicitud. La primera función se ejecuta antes de realizar la solicitud y recibe el objeto de configuración de la solicitud `(config)`. Imprimimos nuestro mensaje personalizado en la consola y luego devolvemos el objeto `config` modificado.

## Implementando el Interceptor de Response:

De manera similar, podemos crear un interceptor de respuesta de Axios para ejecutar código después de recibir una respuesta. Imprimiremos un mensaje en la consola que indique que se ha recibido una respuesta. Aquí tienes un ejemplo:

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

En el fragmento de código anterior, utilizamos `axios.interceptors.response.use()` para registrar un interceptor de respuesta. La primera función se ejecuta cuando se recibe una respuesta y recibe el objeto `response`. Imprimimos nuestro mensaje personalizado y devolvemos el objeto `response` sin modificar.

### Poniéndolo Todo Junto:

Ahora que tenemos tanto el interceptor de solicitud como el de respuesta configurados, hagamos una solicitud HTTP de ejemplo para verlos en acción:

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

En el fragmento de código anterior, realizamos una solicitud `GET` a `https://api.example.com/data` utilizando `axios.get()`. Luego, registramos la respuesta en la consola.

Cuando ejecutes este código, deberías ver los siguientes mensajes en la consola:

```log
I am making a request!
I am receiving a response!
Data received: [datos de respuesta]
```

### Conclusión

Al utilizar los interceptores de Axios, podemos agregar fácilmente lógica personalizada antes de realizar solicitudes HTTP y después de recibir respuestas. Esto nos permite centralizar funcionalidades comunes y manejar errores de manera eficiente. En este tutorial, exploramos cómo crear interceptores de solicitud y respuesta utilizando Axios, y vimos un ejemplo sencillo en acción. Ahora, armado con este conocimiento, puedes mejorar tu flujo de trabajo en el desarrollo web y construir aplicaciones más poderosas con Axios.

Recuerda consultar la documentación oficial de Axios para obtener información más detallada sobre los interceptores y otras características:
https://axios-http.com/docs/interceptors
