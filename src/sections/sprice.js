//PRICE SECTION

//IMPORTING
import React from 'react';
import Button from '../components/button';

//PRICE
export default function SPrice(props) {
  //RETURN
  return (
    <section id="price" data-scroll-section className={`sprice ${props.theme}`}>
      <div className="container -default">
        <div className="section-head">
          <div className="box">
            <h2>Pacotes</h2>
            <span>Veja as vantagens de ser HeyTraveller!</span>
          </div>
          <div className="box">
            <p>
              Considerada uma das maiores e melhores agências de viagem da
              região de Curitiba, ser cliente nosso garante muitas vantagens.
            </p>
          </div>
          <div className="box">
            <Button href="/" className="-fullsolid -skew">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      <div className="container -default">
        <div className="sp-wrapper">
          <div className="sp-item">
            <span className="sp-item-title">Passagens Aéreas</span>
            <ul>
              <li>Suporte via email/chat em horário comercial.</li>
              <li>100 Pontos acumulados na sua conta HeyTraveller.</li>
              <li>20% de desconto na compra de seguro viagem.</li>
              <li>Caneta e squeeze personalizada da HeyTraveller.</li>
              <li>1 cupom para nossos sorteios trimetrais.</li>
              <li>
                Clube de vantagens HeyTraveller com descontos incríveis com
                nossos parceiros.
              </li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">100 pontos</span>
              <Button href="/" className="-fullsolid -skew">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="sp-item">
            <span className="sp-item-title">Pacotes de Viagem</span>
            <ul>
              <li>Suporte via email/chat/telefone em horário comercial.</li>
              <li>500 Pontos acumulados na sua conta HeyTraveller.</li>
              <li>35% de desconto na compra de seguro viagem.</li>
              <li>Camisa, caneta e squeeze personalizada da HeyTraveller.</li>
              <li>5 cupom para nossos sorteios trimetrais.</li>
              <li>
                Clube de vantagens HeyTraveller com descontos incríveis com
                nossos parceiros.
              </li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">500 pontos</span>
              <Button href="/" className="-fullsolid -skew">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="sp-item">
            <span className="sp-item-title">Intercâmbio/Mochilão</span>
            <ul>
              <li>
                Suporte via email/chat 24 horas por dia 7 dias por semana.
              </li>
              <li>1000 Pontos acumulados na sua conta HeyTraveller.</li>
              <li>50% de desconto na compra de seguro viagem.</li>
              <li>
                Camisa, boné, caneta e squeeze personalizada da HeyTraveller.
              </li>
              <li>
                10 cupom para nossos sorteios trimetrais além de participar
                também dos exclusivos.
              </li>
              <li>
                Clube de vantagens HeyTraveller com descontos incríveis com
                nossos parceiros.
              </li>
            </ul>
            <div className="sp-item-footer">
              <span className="sp-item-price">1000 pontos</span>
              <Button href="/" className="-fullsolid -skew">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
