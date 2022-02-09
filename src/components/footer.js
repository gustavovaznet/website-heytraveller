//FOOTER COMPONENT

//IMPORTING
import Link from 'next/link';
import Button from './button';
import { nav } from '../../src/utils/localdata';

//FOOTER
export default function Footer() {
  //RETURN
  return (
    <footer id="contacts" className="footer" data-scroll-section>
      <div className="container -default">
        <div className="footer-wrapper">
          <div className="row">
            <div className="box">
              <span>Contato</span>
              <span className="f-title">Entre em contato com a gente</span>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <span className="sub">Unidade Curitiba</span>
              <Button href="/" className="-skew call">
                +55 (41) 3333-9896
              </Button>
            </div>
            <div className="box">
              <ul>
                {nav.map((item, index) => (
                  <li key={index}>
                    <Button href={`#` + `${item.link}`} className="-skew">
                      {item.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="box">
              <Link href="/">
                <a>
                  <img src="/logo/logo-footer.svg" alt="Logo" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
