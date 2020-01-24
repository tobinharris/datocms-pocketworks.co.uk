# Pocketworks Website

* Built on Gatsby
* Headless is https://www.datocms.com
* Hosting is Netlify

# Setting up for development

### You will need

* The DatoCms API token from the DatoCMS portal https://pocketworks-web.admin.datocms.com/admin/access_tokens. Check 1Password for user/pass.
* `brew` and `yarn` installed on your laptop

### Steps

Check out this repo

    git clone [repo]
    cd [repo]
    yarn install 
    brew install gatsby-cli
    echo "DATO_API_TOKEN=[INSERT READ-ONLY TOKEN]" > .env
    yarn develop
    
That's it! You should be up and running. Note that you're showing live data, but since it's read only should be fine. 

# TODO

* [ ] Emmanuelle for IT'S A TRAPP 
* [ ] Emmanuelle Schematic illustration
* [ ] Sort out Meta data and Twitter Card
  * [X] Home
  * [X] About/Story/Team/Careers/ 
  * [X] Loyalty/Productivity/Services/Tech
  * [X] Blog/Category/Article
  * [ ] Contact/Form/NDA
  * [ ] Case Studies
  * [ ] Add META Description to every blog article aaaagh
  * [ ] Add META Description to every case study
* [ ] HENEGHANS download page?
* [ ] Add Google Analytics
* [ ] Add Hotjar?
* [ ] Add Google Verification file?
* [X] Instagram feed
* [WIP] Case Study Page
  * [ ] Quotes
  * [ ] Ask Tom if too simple?
* Studies Accross
  * [X] PGMO (full)
  * [X] Veezu (light)
  * [X] Energenie (light)
  * [X] Fresenius (light)
  * [X] Travelodge (light)
  * [ ] Whitelocks???
  * [ ] Asda  
* [X] NDA Page
* Rewrites
  * [X] /clients                -> /work
  * [X] /case-studies/slug      -> /work/case-studies/slug
  * [X] /perspectives           -> /blog
  * [X] /404 to blog/slug       -> exists, otherwise 404
  * [X] /services               -> /work/services
  * [X] /why-pocketworks        -> /about/story
  * [X] /join-us                -> /about/careers
  * [X] /ipad-sales-apps        -> /blog/ipad-sales-apps
  * [X] /digital-transformation -> /work/workforce-producitivity
  * [X] /team                   -> /about/pocketeers
  * [ ] /startups               -> ???
  * [ ] /iot                    -> ???
  * [ ] /agencies               -> ???
  * [ ] /field-service-apps     -> ???
* [X] Favicon
* [X] Team Member Page
* [X] Add DMSans font
* [X] Finish Home Page
* [X] Separate blog category pages
* [X] Blog show link to category page
* [X] Lees thoughts on home
* [X] Social links
* [X] Home phones center valign add subtitle
* [X] Button spaces are off
* [X] Center valigned heros  
* [X] Check SEO won't totally tank
* [X] Add contact form??

* Push Live
  * [ ] DNS
  * [ ] Google Search 

RELEASE 2
* [ ] Add Google Tracking Pixels?
* [ ] Add Inspectlet?
* [ ] Add Search Console script
* [ ] Check font sizes on mobile
* [ ] Any way to make font sizes more consistant?
* [ ] How to make all H1s is-size-2-mobile without having to do it explicitly?
* [ ] Fix sucky mobile rendering
* [ ] Blog show additional posts 
* [ ] Culture panels
* [ ] Quotes on home page
* [ ] Blog show reading time
* [ ] Look at using query fragments
* [ ] Single query file
* [ ] Slider with individual call to actions to relevant landing page


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
