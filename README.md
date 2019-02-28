# MotoViaggiatori

[Gatsby](https://www.gatsbyjs.org/) + [Wordpress](https://wordpress.org) powered blog.

## Install

```
$ git clone git@gitlab.com:top-solution/motoviaggiatori.git
$ cd motoviaggiatori
$ npm install
$ cp .env.sample .env
```

Edit `.env` file and add fill in all the variables with correct values.

## Develop

Run `npm run start` or `gatsby develop` then head to http://localhost:8000

To query the data you can use GraphQL syntax on http://localhost:8000/___graphql

## Build

Run `npm run build` or `gatsby build`. User `gatsby serve` to test the production build.