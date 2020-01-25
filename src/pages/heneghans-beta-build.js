import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'
import TeamQuote from '../components/team-quote'
import CaseStudyHero from '../components/case-study-hero'
import CaseStudyCard from '../components/case-study-card'
import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';
import Layout from '../components/layout'

const HeneghansBetaBuild = ({ data }) => (
    <Layout>        
        <SiteNav></SiteNav>        
        <Hero className="is-small">
            <Hero.Body>
                <Container className="content">
                    <div className="columns is-tablet is-vcentered">
                        <div className="column is-6 is-offset-1">

                            <h1 className="title is-size-1 is-size-2-mobile">Heneghans Beta Build</h1>
                            <p className="is-size-4">iOS 1.0 (594)</p>
                            <p className="is-size-4">Please only install this version of the app if you have been instructed to do so by Pocketworks.</p>
                            <a className="button is-leafy is-primary is-medium" href="itms-services://?action=download-manifest&url=https://pocketworks.co.uk/distribution/heneghans/594/manifest.plist">Install</a>

                        </div>
                        <div className="column is-4">
                        <img src="" alt="Heneghans"></img>
                        </div>
                    </div>
                    <hr />
                </Container>
            </Hero.Body>
        </Hero>
        </Layout>
        )

export default HeneghansBetaBuild

