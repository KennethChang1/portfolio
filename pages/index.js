/* eslint-disable @next/next/no-img-element */

import CardProject from "./components/CardProject";
import ExperienceItem from "./components/ExperienceItem";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <header>
        <Nav></Nav>
        <div className="container profile">
          <Profile></Profile>
        </div>
      </header>
      <main>
        <div className="container experience">
          <ExperienceItem title={"HTML"} exp={3}></ExperienceItem>
          <ExperienceItem title={"CSS"} exp={3}></ExperienceItem>
          <ExperienceItem title={"Javascript"} exp={2}></ExperienceItem>
          <ExperienceItem title={"Git"} exp={2}></ExperienceItem>
          <ExperienceItem title={"React"} exp={1}></ExperienceItem>
          <ExperienceItem title={"Next"} exp={1}></ExperienceItem>
          <ExperienceItem title={"Svelte"} exp={1}></ExperienceItem>
        </div>
        <div className="container project">
          <div className="project-header">
            <h2 className="project-head">Projects</h2>
            <p className="btn">Contact me</p>
          </div>
          <div className="project-wrapper">
            <CardProject
              title="Rock Paper Scissor Game"
              img="/rock-paper-scissor.png"
              tech={["Next", "SCSS"]}
              links={[
                "https://github.com/KennethChang1/rock-paper-scissor-game",
                "https://rock-paper-scissor-game-q413sx7ab-kennethchang1.vercel.app/",
              ]}
            ></CardProject>
            <CardProject
              title="Pomodoro App"
              img="/pomodoro.png"
              tech={["React", "SCSS", "Framer"]}
              links={[
                "https://github.com/KennethChang1/pomodoro",
                "https://pomodoro-zxc.netlify.app/",
              ]}
            ></CardProject>
          </div>
        </div>
      </main>
    </>
  );
}
