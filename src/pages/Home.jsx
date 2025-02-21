import React from 'react'
import '../css/home.css'
import banner from '../assets/images/hero.gif'
import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="left">
          <h1>What is Work Day?</h1>
          <p>
            Workday is a cloud-based enterprise resource planning (ERP) software
            that focuses on financial management, human resources (HR),
            planning, and analytics. It is widely used by organizations to
            manage their internal processes, including employee data, payroll,
            talent management, and financial operations. Workday offers a
            unified, integrated system, which means that all aspects of an
            organization's operations can be managed and analyzed from one
            place.
          </p>
        </div>
        <div className="right">
          <img src={banner} alt="" />
        </div>
      </section>
      <section className="cards">
        <Card />
      </section>
    </div>
  )
}

export default Home
