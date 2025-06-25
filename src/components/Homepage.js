import React from "react";
import { Button } from "react-bootstrap";
import profileImage from "../img/smile_man.png";
import reactImage from "../img/react.png";
import jsImage from "../img/js.png";
import firebaseImage from "../img/firebase.jpg";
import pythonImage from "../img/python.png";
import phpImage from "../img/php.png";
import githubImage from "../img/github-icon.png";
import quickWin from "../img/quickwinapp.png";
// import ecSite from "";
import todoApp from "../img/simpleTodo_app.png";
import chatApp from "../img/chat_app.png";
import lineClone from "../img/line_clone.png";
import myPortfolio from "../img/portfolio_site.png";
import senzai from "../img/senzai.png";
import bgRiver from "../img/bg-river.jpg";
import qr_qw from "../img/QR_qw.png";
import canvaImage from "../img/canva.png";
import htmlImage from "../img/HTML.png";
import cssImage from "../img/CSS.png";
import LP_sImage from "../img/LP-s.png";

import { Badges } from "./Badges";
import { Form } from "react-router-dom";

const Homepage = () => {
  return (
    <main className=" text-center">
      <div class="top bg-2 px-5" id="top">
        <div className="job">
          <h1>
            web engineer <br />
            portfolio
          </h1>
          <hr />
          <p>
            Thank you for visiting my site.
            <br />
            Here you'll find skills I've
            <br />
            learned and works I've created.
          </p>
        </div>
      </div>

      <div class="profile bg-1" id="profile">
        <div className="row mx-5 py-5">
          <div className="col-md-6">
            <div className="img-wrapper">
              <img src={senzai} className="senzai" />
            </div>
          </div>
          <div className="col-md-6 d-flex px-5 flex-column">
            <h2 className="py-3">profile</h2>
            <div className="name py-3">
              <p className="fs-6">SHIZUKATA IKUMI</p>
              <h3>シヅカタ イクミ</h3>
            </div>

            <div className="histories  row gap-2 fs-6 py-3">
              <div className="history row">
                <div className="col-sm-3">2016</div>
                <p className="col-sm-9">建築業界でキャリアをスタートする</p>
              </div>
              <div className="history row">
                <div className="col-sm-3">2021</div>
                <p className="col-sm-9">ファシリティ業界へ転職</p>
              </div>
              <div className="history row">
                <div className="col-sm-3">2023</div>
                <p className="col-sm-9">興味本位で独学でコーディングを始める</p>
              </div>
              <div className="history row">
                <div className="col-sm-3">2024</div>
                <p className="col-sm-9">
                  webエンジニアを目指し職業訓練校へ入学
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="section-single row">
          <div class="d-flex col-md-6 px-5 flex-column justify-content-center">
            <h2 className="py-3">message</h2>
            <p className="py-3">
              昔から"ものづくり"が好きで
              <br />
              前職までは建築業界で営業から設計・施工管理まで
              <br />
              幅広く経験してきました。
              <br />
              今はITの力で「仕組みをつくる側」として、
              <br />
              誰かの役に立てるようなサービスを作ることが目標です。
              <br />
              ReactやJavaScriptを中心に、
              <br />
              Webアプリ開発を独学で学んでいます。
              <br />
              将来的には、前職までの経験を活かし、
              <br />
              チームを支えるディレクターとしても
              <br />
              活躍していきたいです。
            </p>
          </div>
          {/* <img src={bgRiver} class="img-fluid w-100" /> */}
        </div>
      </div>

      <div class="skills inner bg-2" id="skills">
        <div class="text-center mx-5 py-5">
          <h2 class="pb-3">skills</h2>
          <div class="row text-center">
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={reactImage} />

              <h4 className="my-3">React</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={jsImage} />
              <h4 className="my-3">Javascript</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={htmlImage} />
              <h4 className="my-3">HTML</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={cssImage} />
              <h4 className="my-3">CSS</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={pythonImage} />
              <h4 className="my-3">Python</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={canvaImage} />
              <h4 className="my-3">canva</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={firebaseImage} />
              <h4 className="my-3">Firebase</h4>
            </div>
            <div class="services col-sm-3 col-md-3">
              <img className="image" src={githubImage} />
              <h4 className="my-3">github</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="works inner bg-2" id="works">
        <div className="mx-5 py-5">
          <div class="text-center">
            <h2 class="pb-3">works</h2>
          </div>

          <div class="row text-center">
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work change_img">
                {/* <!-- A：スマホ用（768px未満だけ表示） --> */}
                <a
                  href="https://quickwin-dfa93.web.app/"
                  className="d-block d-md-none"
                >
                  <img class="change" src={quickWin} />
                  <img class="change" src={qr_qw} />
                </a>

                {/* <!-- B：PC用（768px以上だけ表示） --> */}
                <a className="d-none d-md-block">
                  <img class="change" src={quickWin} />
                  <img class="change" src={qr_qw} />
                </a>
              </div>
              <h4 class="mt-3">Quick Win Analyzer</h4>
              <div className="badges justify-content-center">
                {Badges.javascript}
                {Badges.HTML_CSS}
                {Badges.Firebase}
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work">
                <a href="https://chat-app-red-nine-23.vercel.app/">
                  <img className="work_image" src={chatApp} />
                </a>
              </div>
              <h4 class="mt-3">chat app</h4>
              <div className="badges justify-content-center">
                {Badges.React}
                {Badges.HTML_CSS}
                {Badges.Firebase}
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work">
                <a href="https://simple-todo-app-sage-mu.vercel.app/">
                  <img className="work_image" src={todoApp} />
                </a>
              </div>
              <h4 class="mt-3">Simple ToDo app</h4>
              <div className="badges justify-content-center">
                {Badges.React}
                {Badges.HTML_CSS}
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work">
                <a href="https://lpsite-s.vercel.app/">
                  <img className="work_image" src={LP_sImage} />
                </a>
              </div>
              <h4 class="mt-3">LP site</h4>
              <div className="badges justify-content-center">
                {Badges.javascript}
                {Badges.HTML_CSS}
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work">
                <a href="https://line-clone-nine.vercel.app/">
                  <img className="work_image" src={lineClone} />
                </a>
              </div>
              <h4 class="mt-3">line-clone</h4>
              <div className="badges justify-content-center">
                {Badges.React}
                {Badges.HTML_CSS}
                {Badges.Firebase}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="work">
                <a href="https://my-portfolio-ruby-eight-19.vercel.app/">
                  <img className="work_image" src={myPortfolio} />
                </a>
              </div>
              <h4 class="mt-3">My portfolio</h4>
              <div className="badges justify-content-center">
                {Badges.React}
                {Badges.HTML_CSS}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="blog inner" id="blog"></div>

      <div class="forms inner" id="forms"></div> */}
    </main>
  );
};

export default Homepage;
