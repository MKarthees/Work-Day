import React, { useEffect, useRef } from 'react'
import '../css/home.css'
import banner from '../assets/images/hero.gif'
import Card from '../components/Card.jsx'
import getInOne from '../assets/images/1.webp'
import getInTwo from '../assets/images/2.webp'
import getInThree from '../assets/images/3.webp'
import { IoMdAnalytics } from 'react-icons/io'
import { RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { FaUsersGear } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdOutlineMobileFriendly } from 'react-icons/md'
import { GrShieldSecurity } from 'react-icons/gr'
import { FaBookOpen } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { GiFlexibleStar } from 'react-icons/gi'
import { LiaCertificateSolid } from 'react-icons/lia'
import RateCard from '../components/RateCard.jsx'
import starOne from '../assets/images/star-1.png'
import starTwo from '../assets/images/star-2.png'
import starThree from '../assets/images/star-3.png'
import { useState } from 'react'

const Home = () => {
  const [slide, setSlide] = useState([getInOne, getInTwo, getInThree])
  let [index, setIndex] = useState(0)
  const [img, setImg] = useState()
  const imgElement = useRef(null)
  useEffect(() => {
    setInterval(() => {
      index++
      if (index < 3) {
        imgElement.current = setImg(slide[index])
      } else {
        setIndex((index = 0))
      }
    }, 2000)
  }, [])

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
            talent management, and financial operations.
          </p>
        </div>
        <div className="right">
          <img src={banner} alt="" />
        </div>
      </section>
      <section className="home-cards">
        <Card
          title="Financial Management"
          iconName={<RiMoneyRupeeCircleFill />}
          des="Real-time financial reporting, budgeting, accounting, and tax
          compliance."
        />
        <Card
          title="Human Capital Management (HCM)"
          iconName={<FaUsersGear />}
          des="Centralized employee data, recruitment, performance management, and learning."
        />
        <Card
          title="Human Resources (HR)"
          iconName={<IoMdAnalytics />}
          des="simplifies employee data, recruitment, performance, and compensation."
        />
        <Card
          title="Workforce Planning and Analytics"
          iconName={<FaCalendarAlt />}
          des="Predictive analytics, workforce modeling, and scenario planning."
        />
        <Card
          title="Mobile and Self-Service Features"
          iconName={<MdOutlineMobileFriendly />}
          des="Mobile access and self-service portals for employees."
        />
        <Card
          title="Security and Data Privacy"
          iconName={<GrShieldSecurity />}
          des="Data encryption, role-based access control, and privacy protection."
        />
      </section>

      <section className="details">
        <div className="one">
          <div className="left">
            <h1>
              Workday Training at <span>Getin Technologies</span>
            </h1>
            <p>
              At <span>Getin Technologies</span>, we offer comprehensive Workday
              training to help individuals and organizations master this
              powerful cloud-based ERP software. Whether you're new to Workday
              or looking to enhance your skills, our expert-led courses will
              guide you through all key functionalities.
            </p>
          </div>
          <div className="right">
            <img ref={imgElement} src={img} alt="" />
          </div>
        </div>
        <div className="two">
          <h1>Our Training Includes</h1>
          <ol>
            <li>
              Workday Overview
              <p>
                Introduction to Workday, its key features, and benefits for HR,
                finance, and planning.
              </p>
            </li>
            <li>
              HR Management in Workday
              <p>
                Learn to manage employee data, recruit talent, track
                performance, and handle payroll and benefits.
              </p>
            </li>
            <li>
              Financial Management
              <p>
                Understand Workday’s financial tools, including budgeting,
                reporting, and compliance.
              </p>
            </li>
            <li>
              Workforce Planning & Analytics
              <p>
                Dive into workforce modeling, predictive analytics, and
                data-driven decision-making.
              </p>
            </li>
            <li>
              Workday Reporting and Dashboards
              <p>
                Master Workday’s reporting tools and create customizable
                dashboards for real-time insights.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="description">
        <h1>Why Choose Our Workday Training?</h1>
        <div className="cards">
          <Card
            title="Hands-On Learning"
            iconName={<FaBookOpen />}
            des="Practical, real-world scenarios to help you apply your skills."
          />
          <Card
            title="Expert Trainers"
            iconName={<HiLightBulb />}
            des=" Learn from certified Workday professionals with years of experience."
          />
          <Card
            title="Flexible Training"
            iconName={<GiFlexibleStar />}
            des="Choose from on-site, virtual, or self-paced courses."
          />
          <Card
            title="Certification Preparation"
            iconName={<LiaCertificateSolid />}
            des="Get ready for Workday certification exams with targeted training."
          />
        </div>
        <button type="button">View More</button>
      </section>

      <section className="rate">
        <h1>Workday Training Course Rates</h1>
        <div className="rate-cards">
          <div className="card">
            <RateCard
              title="Workday Fundamentals (Beginner)"
              day="2"
              price="₹500"
              star={starOne}
            />
            <RateCard
              title="Workday Human Resources (Intermediate)"
              day="4"
              price="₹1000"
              star={starTwo}
            />
            <RateCard
              title="Workday Reporting & Analytics (Advanced)"
              day="3"
              price="₹2000"
              star={starThree}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
