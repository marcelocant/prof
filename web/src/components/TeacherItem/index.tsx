import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.scss';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/14877918?s=460&u=a345ad1d5ce8bae75d439020d699a41e04619ed0&v=4" alt=""/>
                <div>
                    <strong>Marcelo Cavalcante</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, impedit excepturi aliquam optio velit repellendus inventore consequatur incidunt quas saepe ipsam ut, error obcaecati ipsa exercitationem fugiat ratione nam hic?</p>
            <footer>
                <p>Preço/hora
                <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>                    
    )
}

export default TeacherItem;