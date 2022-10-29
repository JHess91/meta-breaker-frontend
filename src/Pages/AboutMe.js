import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'

const AboutMe = () => {
  return (
    <Container
      sm={6}
      style={{ backgroundColor: '#757575' }}
      className="about-me"
    >
      <Row align="center" fluid>
        <Col  className="about-header px-5">
          <h1 className="about-title">Meta Breaker</h1>
          <h6>By:</h6>
          <h5 className="about-name">Justin Hessler</h5>
        </Col>
      </Row>
      <br />
      <Row align="center">
        <div>
          {/* <img className="about-img" src="https://us.123rf.com/450wm/iconicbestiary/iconicbestiary1603/iconicbestiary160300010/52903298-young-man-sitting-at-the-desktop-pc-computer-screen-in-a-dark-room-video-gamer-playing-at-night-flat.jpg?ver=6" alt="" /> */}
        </div>
      </Row>
      <br />
      <Row align="center">
        <h1 className="about-info">About me</h1>
        <p className='about-me-text'>
          My name is Justin Hessler and I am a full stack software engineer. I
          currently work in the lighting industry, blowing glass for a company
          named Fine Art Handcrafted Lighting. I am 31 years old and some of my
          hobbies are flying drones, traveling with my fiance, and competitive
          gaming. I got into software engineering because I wanted a career that
          I would enjoy and have the opportunity to grow in. Since im always at
          a computer I decided to give coding a try and fell in love with it. I
          attended the Boca code bootcamp and within the first couple of weeks I
          was able to build my own functioning website. Some of the things I've
          learned while attending the class are Javascript, HTML, CSS, MongoDB,
          React, and many more. I hope you enjoy my final project website and I
          hope it helps you learn and grow as an Apex Legend player. See you in
          the arena!{' '}
        </p>
      </Row>

      <br />

      <Row align="center">
        <h1 className="about-info">Why?</h1>
        <p className='about-me-text'>
          I created this website because I found myself confused one day while
          playing. My teammate was first in line to pick there legend and they
          just so happened to pick the legend I play the most. As it became my
          turn to choose I was lost because I had no idea who to choose. I was
          also confused about why I only knew how to play 1 of 23 legends after
          playing the game for a very long time. So I created this site to make
          picking a legend and load out a lot easier. One click of a button and
          my legend and weapons were chosen for me. Now it was time to learn.
          Playing a randomly chosen legend each game forced me to learn to play
          as that character and slowly I began to learn how each legend not only
          works but how it works off of my teammates legends. And now im able to
          jump in a game and feel just as comfortable picking any legend then
          just the one I was good at. Give this app a try and find out just how
          good your knowledge of the game is. I dare you!{' '}
        </p>
      </Row>

      <br />

      <Row align="center">
        <h1 className="about-info">Future Vision</h1>
        <p className='about-me-text'>
          In the future I want this app to be able to work with many other
          games. Games now days give you the option to choose from a wide
          variety of characters. And because there are so many people tend to
          use the same ones over and over again. I would also like to be able to
          pull in data from the game itself and create a point system and leader
          board for using the items chosen for you. Theres no other feeling like
          checking a leader board and seeing that you're still #1!
        </p>
      </Row>

      <br />

      <Row align="center">
        <h1 className="about-info">Credits</h1>
        <h4 className="about-credits">Images</h4>
        <p>https://https://ea.com/games/apex-legends</p>
        <p>https://apexlegendsstatus.com/</p>
        <p>https://apexlegends.fandom.com/</p>
        <h4 className="about-credits">Button</h4>
        <p>https://uiverse.io/</p>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe
