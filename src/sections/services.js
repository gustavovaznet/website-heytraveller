//SERVICES SECTION

//IMPORTING
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '../utils/localdata';

//SERVICES
export default function Services() {
  //RETURN
  return (
    <section data-scroll-section className="services-section">
      <div className="container -default">
        <div className="services-wrapper">
          {services.map((item, index) => (
            <Link key={index} href="#price">
              <a className="service-single-wrap">
                <div className="service-image-wrap">
                  <Image
                    priority
                    data-scroll
                    data-scroll-speed="-3"
                    src={item.image}
                    alt={item.title}
                    quality={100}
                    layout="fill"
                  />
                </div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-description">{item.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
