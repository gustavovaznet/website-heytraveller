//REVIEW SECTION

//IMPORTING
import React from 'react';

//REVIEW
export default function Sreview() {
  //RETURN
  return (
    <section data-scroll-section className="review-section">
      <div className="container -default">
        <div className="box">
          <div className="head-wrap">
            <span className="name">Ana Kurosawa</span>
            <div className="stars-wrap">
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
            </div>
          </div>
          <p>
            A HeyTraveller foi a melhor opção que fiz na minha vida para o meu
            intercâmbio, suporte sensacional, atendimento diferenciado e o
            melhorde tudo é o preço justo!
          </p>
          <span className="date">10/08/2021</span>
        </div>
        <div className="box">
          <div className="head-wrap">
            <span className="name">Nelson Marcos</span>
            <div className="stars-wrap">
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
            </div>
          </div>
          <p>
            Conheci a HeyTraveller em 2015 e virei fã de carteirinha dela,
            pensei em viagem pensei em HeyTraveller!!!
          </p>
          <span className="date">02/03/2021</span>
        </div>
        <div className="box">
          <div className="head-wrap">
            <span className="name">Juan Sousa</span>
            <div className="stars-wrap">
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
            </div>
          </div>
          <p>
            Sem dúvida a melhor experiência que tive em termos de viagem e
            atendimento em geral, show de bola, equipe nota 1000.
          </p>
          <span className="date">14/12/2020</span>
        </div>
      </div>
    </section>
  );
}
