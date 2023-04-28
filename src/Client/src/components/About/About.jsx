import style from './About.module.css'
import imagen from '../../Assets/aboutMe.png'
const About=()=>{

    return(
        <div className={style.container}>
            <p className={style.descripcion}>Mi nombre es Mauro Genna tengo 23 años. Estudio programación desde agosto del 2022 donde he realizado varios cursos en la sección del fronted. Me considero una persona entusiasta con lo que hace, ya que siempre que empiezo algo nuevo trato de dar lo mejor de mi y terminarlo de la mejor manera. 
            <link rel="stylesheet" href="https://www.instagram.com/" />
            </p>

            <img className={style.imagen} src={imagen} alt="" />
        </div>
    )
}
export default About