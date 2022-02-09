//ACCORDION

//IMPORTING
//REACT
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

//EXAMPLE
export default function Example() {
  //RETURN
  return (
    <Accordion preExpanded={['a']}>
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton>
            Como funciona o clube de vantagens HeyTraveller?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Você acumula pontos ao contratar serviços ou comprar produtos das
            nossas lojas, depois é só trocar esses pontos por mais
            produtos/serviços ou usá-los para ganhar descontos em nossos
            parceiros.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Posso trocar pontos por descontos nos produtos/serviços?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Sim, os pontos que você ganhar podem ser convertidos diretamente na
            compra, sem burocracia nenhuma.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>O suporte é realmente 24/7?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            O suporte 24/7 é destinado somente para clientes que contratam nosso
            intercâmbio ou mochilão.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
