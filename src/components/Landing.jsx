import React from 'react'
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg'

 function Landing() {
  return (
    <section id='landing'>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Australia's most awarded online Library platfrom</h1>
            <h2>Find your dream book with <span className="purple">Library</span></h2>
            <Link to="#features">
              <button className="btn">Brows books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing;