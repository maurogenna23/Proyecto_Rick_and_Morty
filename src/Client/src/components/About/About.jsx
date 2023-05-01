import style from './About.module.css'
import imagen from '../../Assets/aboutMe.png'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About=()=>{

    return(
        <div className={style.container}>
            <p className={style.descripcion}>
              <h2 className={style.myName}>Mi nombre es Mauro Genna</h2> Tengo 23 años. Estudio programación desde agosto del 2022 donde he realizado varios cursos en la sección del fronted. Me considero una persona entusiasta con lo que hace, ya que siempre que empiezo algo nuevo trato de dar lo mejor de mi y terminarlo de la mejor manera. 
              <br /><br />
              Redes sociales:
              <br />
              <a className={style.link} href="https://www.instagram.com/"><FaInstagram /></a>
              <a className={style.link} href="https://www.linkedin.com/in/mauro-genna-777a84237/"><FaLinkedin /></a>
              <a className={style.link} href="https://twitter.com/"><FaTwitter /></a>
            </p>
            <img className={style.imagen} src={imagen} alt="" />
        </div>
    )
}
export default About