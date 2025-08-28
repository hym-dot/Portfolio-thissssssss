import React from 'react'
import "./styles/Hero.scss"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className='inner'>
          <h1 className='tit'>
            DEVELOPER
            <br />
            BACK
            <span className="star-spin">
              <i className="star">✱</i>
            </span>
            FRONT
            <br />
            PORTFOLIO
          </h1>
        </div>
      </section>

      <aside className="intro">
        <p>
          시맨틱 마크업을 통해 웹 접근성, <br />
          웹 표준을 준수하여 차별이 없는 웹을 지향합니다.<br />
          node express -react를 활용한 MERN 프로젝트를 지향하며,<br />
          풀스택 전문가로써 성장과 도전을 지향합니다.
        </p>
        <div className="arrow">
        ⬇
      </div>
      </aside>
    </>
  )
}

export default Hero
