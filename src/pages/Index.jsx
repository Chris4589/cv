import React from 'react'
import { AboutMe } from '../components/AboutMe';
import { ContactMe } from '../components/ContactMe';
import { Courses } from '../components/Courses';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Index = () => {
  return (
    <div className="Index__container">
      <Header />
      <AboutMe />
      <Courses />
      <br /><br />
      <ContactMe />
      <Footer />
    </div>
  )
}
