//IMAGE SECTION

//IMPORTING
import React from 'react';

//IMAGE
export default function Simage(props) {
  return (
    <section data-scroll-section className="section-full-image">
      <img
        src={props.src}
        alt="Hey Traveller"
        data-scroll
        data-scroll-speed="-4"
      />
    </section>
  );
}
