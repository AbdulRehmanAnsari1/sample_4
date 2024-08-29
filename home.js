import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bold Dearest Cobra</title>
        <meta property="og:title" content="Bold Dearest Cobra" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Get in touch with us
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Order Now</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #portfolio
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">#</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">Portfolio</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              #contact
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Welcome to our freelancing website
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Check out our previous projects
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              #services
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">Services</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Explore the services we offer
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">View Portfolio</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">Order Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 thq-heading-1">
              Welcome to Our Freelancing Website for Website Creation
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 thq-body-large">
              Browse through our portfolio of stunning website projects and
              order our services to bring your vision to life.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              Customized Designs
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">Unique Designs</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Responsive Layouts
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              Professional Websites
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              High-Quality Websites
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123 thq-heading-2">
              Mobile-Friendly Designs
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              Ready to bring your website to life?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Browse through our portfolio and choose the perfect design for
              your project.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get Started</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Implementing SEO best practices to improve your website&apos;s
              visibility on search engines
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Tailored website designs to meet your specific needs and
              preferences
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Responsive Web Development
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Customized Website Design
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Creating websites that are optimized for all devices and screen
              sizes
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">SEO Optimization</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133 thq-heading-3">$299</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Order Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Order Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Basic SEO Optimization
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Advanced SEO Optimization
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146 thq-body-large">$1999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Order Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">Custom Design</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              E-commerce Functionality
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Unlimited Revisions
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">10 Page Website</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166 thq-heading-3">$199</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172 thq-body-large">$2999</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Mobile Responsive Design
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177 thq-body-large">$999</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">5 Page Website</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Priority Support
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184 thq-heading-3">$99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Explore our collection of past website creation projects to get
              inspired.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Place your order for the selected services through our
              user-friendly platform.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">Select Services</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Choose the website creation services that best fit your needs and
              requirements.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">Browse Portfolio</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">Place Order</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Let our team of expert freelancers work on creating your website
              while you relax and wait for the magic to happen.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 thq-heading-2">
              Sit Back and Relax
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Marketing Manager, Company XYZ
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196 thq-body-large">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197 thq-body-large">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              The team at Freelance Web Creations is incredibly talented. They
              understood our vision and brought it to life with creativity and
              precision.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">
              Creative Director, Design Co.
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              Working with Freelance Web Creations was a game-changer for our
              business. They delivered a stunning website that exceeded our
              expectations.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">
              Founder, Startup123
            </span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">
              5 stars - Excellent service and top-notch quality!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              I couldn&apos;t be happier with the website created for my
              startup. It&apos;s user-friendly, visually appealing, and has
              helped us attract more customers.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Freelance Web Creations is the go-to platform for anyone looking
              for professional web design services. Highly recommended!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Have a project in mind or need more information? Feel free to
              reach out to us.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209 thq-body-large">
              Visit us at our office location for a face-to-face discussion.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211 thq-body-large">
              Drop us an email with your inquiries and we&apos;ll get back to
              you promptly.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">
              Address: 123 Main Street, City, Country
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213 thq-heading-3">
              Email: info@websitecreation.com
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Portfolio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
