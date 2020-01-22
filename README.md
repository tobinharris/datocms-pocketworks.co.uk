# Pocketworks Website

* Built on Gatsby
* Headless is https://www.datocms.com
* Hosting is Netlify

# TODO

* [WIP] Ask Emmanuelle for IT'S A TRAPP 
* [X] Home phones center valign add subtitle
* [X] Button spaces are off
* [X] Center valigned heros
* [ ] How to make all H1s is-size-2-mobile without having to do it explicitly?
* [ ] Team Member Page
* [WIP] Case Study Page
  * [ ] Quotes
  * [ ] Ask Tom if too simple?
* [X] Favicon
* Copy Case Studies Accross
  * PGMO
  * Veezu
  * Energenie
  * Fresenius
  * Asda
* [ ] Create Case Studies
  * [ ] Travelodge
* [ ] Check font sizes on mobile
* [ ] Any way to make font sizes more consistant?
* [ ] Add DMSans font
* [X] Finish Home Page
* [ ] Sort out Meta data and Twitter Card
* [ ] Separate blog category pages
* [ ] NDA
* [ ] Blog show additional posts 
* [ ] Blog show link to category page
* [ ] Blog show reading time
* [X] Social links

* Fix sucky mobile rendering
* Add Google Tracking Pixels?
* Add Inspectlet?
* Add Hotjar?
* Add Google Analytics
* Add Google Verification file?
* Add Search Console script
* Rewrites
  * /clients                -> /work
  * /case-studies/slug      -> /work/case-studies/slug
  * /perspectives           -> /blog
  * /404 to blog/slug       -> exists, otherwise 404
  * /services               -> /work/services
  * /why-pocketworks        -> /about/story
  
  * /startups               -> ???
  * /digital-transformation -> /work/workforce-producitivity
  * /agencies               -> ???
  * /ipad-sales-apps        -> ???

* Check SEO won't totally tank
* Find better BB8??
* Add contact form??

* Push Live
  * DNS
  * Google Search 

RELEASE 2

* Look at using query fragments
* Slider with individual call to actions to relevant landing page


# Gatsby Portfolio Website

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [DatoCMS](https://www.datocms.com).

![Preview](preview.png)

[See the live demo](https://datocms-gatsby-demo.netlify.com/)

If you want to use try this out yourself, you first need to set up a project on DatoCMS which will host your data.

You can [sign up for a free account](https://dashboard.datocms.com/signup) and then you can simply click this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/projects/new-from-template/static-website/gatsby-portfolio)

## Repo usage

First, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://www.datocms.com/docs/content-management-api).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://www.datocms.com/docs/static-generators/gatsbyjs).

This websites uses:

- [Yarn](https://yarnpkg.com/) as package manager;
- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
- [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.
