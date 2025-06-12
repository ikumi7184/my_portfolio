import React from "react";
import { Button } from "react-bootstrap";
import profileImage from "../img/smile_man.png";
import reactImage from "../img/react.png";
import jsImage from "../img/js.png";
import firebaseImage from "../img/firebase.jpg";
import pythonImage from "../img/python.png";
import phpImage from "../img/php.png";
import sqlImage from "../img/sql.png";
import quickWin from "../img/quickwinapp.png";

const Homepage = () => {
  return (
    <div className="container text-center">
      <h1>Nissho Code</h1>
      <img src={profileImage} className="profileImage" />
      <p>
        Nissho
        codeです。普段は専門学校の学生です。Webサイトを作ったり色々なシステムを作ったりして公開しています。また、FinTechス
        キルを活用してIと投資システムやAIシステムを作って皆さんに喜ばれています。
      </p>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-6 col-lg-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <div class="col-lg-4 services">
                <img src={quickWin} />
              </div>
              <h4 class="my-3">Quick Win Analyzer</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-6 col-lg-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>

              <h4 class="my-3">EC site</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-6 col-lg-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>

              <h4 class="my-3">todo app</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-6 col-lg-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>

              <h4 class="my-3">chat app</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-6 col-lg-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>

              <h4 class="my-3">My portfolio</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <div class="text-center">
          <h2 class="title">スキル</h2>
          <div class="row text-center">
            <div class="col-lg-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-lg-4 services">
              <img src={jsImage} />
              <h4>Javascript</h4>
              <p>HTML/CSS/Javascriptがつかえます</p>
            </div>
            <div class="col-lg-4 services">
              {" "}
              <img src={pythonImage} />
              <h4>Python</h4>
              <p>xPythonがつかえます</p>
            </div>
            <div class="col-lg-4 services">
              <img src={phpImage} />
              <h4>PHP</h4>
              <p>PHPがつかえます</p>
            </div>
            <div class="col-lg-4 services">
              {" "}
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
            <div class="col-lg-4 services">
              <img src={sqlImage} />
              <h4>SQL</h4>
              <p>MysqLがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキルー覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
