/**
 * Created by trener on 05.03.17.
 */
import React from 'react';

import Cat from './icons/cat.png'
import Dog from './icons/dog.png'
import Frog from './icons/frog.png'
import Fish from './icons/fish.png'

class Team extends React.Component {
    render() {
        return (
<div className="container-fluid">
    <section className="about_us">
        <div className="container sylwiabox" id="naszzespol">
            <h1>Nasz Zespół</h1>
            <div className="sylwia" id="sylwia">
                <h3>Sylwia</h3>
                <img src={Dog} alt="dog image"/>
                <p className="team">Absolwentka administracji na Uniwersytetu Gdańskiego.
                Szczęśliwa posiadaczka kochanego kundelka, wabiącego się "Piesia".
                Prywatnie lubi spędzać czas na zabawach ze swoim czworonożnym pupilem oraz
                uprawiać wspinaczkę sportową i taniec współczesny.</p>
            </div>
            <div className="kajetan" id="kajetan">
                 <h3>Kajetan</h3>
                <img src={Frog} alt="frog image" />
                 <p className="team">Współtwórca shop.pet, który w firmie odpowiedzialny jest za dział SEO.
                Jako freelancer wspiera marketingowo wiele startupów , dzięki czemu tworzy nową platformę z akcesoriami dla zwierząt.
                 Prywatnie ojciec, mąż i pasjonat filmów z lat 80-tych.</p>
             </div>
            <div className="natalia" id="natalia">
                <h3>Natalia</h3>
                <img src={Fish} alt="fisz image"/>
                <p className="team"> Fanka filmów Science-Fiction i entuzjastka gotowania oraz zdrowego odżywiania.
                Lubi długie kąpiele - wtedy czuje się jak ryba w wodzie.
                Domatorka, która w wolnych chwilach próbuje swoich sił we Front-Endzie.</p>
            </div>
            <div className="olga" id="olga">
                <h3>Olga</h3>
                <img src={Cat} alt="cat image"/>
                <p className="team">Psycholog, behawiorystka i miłośniczka zwierząt, a szczególnie kotów.
                Prowadzi dom tymczasowy i pomaga znaleźć bezdomnym kotom nowe rodziny.
                Kiedy nie zajmuje się futrzakami, to śledzi najnowsze technologie i gra w planszówki.</p>
            </div>
        </div>
    </section>
</div>
        );
    }
}

export default Team;
