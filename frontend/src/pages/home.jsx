import React, { useRef, useContext } from "react";
import { Button, Divider, TextField } from "@mui/material";
import { UserContext } from "../App";
// import { useNavigate } from 'react-router-dom';



const Home = (props) => {
  const userContext = useContext(UserContext);
  const targetRef = useRef(null);

  return (
    <div className="home">
      <div className="title-container">
        <h1>Astrologger</h1>
        <p>Get Instant & accurate, Janam kundli</p>
      </div>
      <Divider className="divider" />
      <div className="content-container">
        <p className="sub-heading">Free Kundli Online - Get Your Detailed Birth Chart with Predictions</p>
        <p>
          Looking for your free Kundli from expert astrologers? Then you have come to the right place. The online free kundali available on Astrotalk is a 100% free and authentic free Kundli that has been prepared after consulting more than 50 expert astrologers on board. The free kundli is such that it can give you a glimpse into various aspects of your life such as your career, love life, marriage, business and much more. The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions.
        </p>
        <p>
          Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the free online kundli, and let us know what you feel about it.
        </p>
      </div>
      <div className="form-container" ref={targetRef}>
        <div className="form-group">
          <FormA {...props} logindetails={userContext} />
          <FormB {...props} logindetails={userContext} />
        </div>
      </div>
      <div className="cross-banner">
      </div>
      <div className="content-container">
        <span>
          <p className="sub-heading">Online Free Kundli For Future Predictions</p>
          Get Your Kundli by Date of Birth
        </span>
        <p>
          The Kundli of a person is one of the most sought aspects of astrology. A Kundali entails the details about the positions of stars and planets at the time of your birth based on which further predictions are made. And with further predictions, we mean predictions about different aspects of one's life like love, career, health, business, finance, and even marriage. Simply said, Kundli making is a necessary thing for any individual and is likely to improve their decision-making capabilities gradually in the course of time.
        </p>
        <p>
          A Janam Kundli is made after studying the exact position of planets at the time you were born and based on the same, one’s Sun sign, Moon sign, and other such astrological aspects are listed. The Kundali is a co-existence of predictions and charts that help the astrologer learn about what your future would be like, the times you will have to grind harder, and also the times when luck will be by your side in abundance.
        </p>
        <p>
          However, with the culture shift, people are getting very tech-savvy and seek things under their thumb. And for the same reason, the Janam Kundali making process has also gone online, making it more pocket-friendly, accessible, and detailed. We at AstroTalk, for the convenience of the huge user base of ours, provide them with free Janam kundali online so anyone and everyone has the luxury of learning more about themselves and thus can plan their life better
        </p>
        <p>
          However, we also often bump into people who wonder if this online kundali astrology is accurate and if it has the same essence of the physical Kundli making process? Or is getting a Kundli made by a pandit or Vedic astrologer still the best option? To be honest, a Kundli made by a Vedic astrologer surely takes the top spot (which our astrologers can make for you), but an online Kundli software is no less when it comes to precision. Honestly, an online Kundli can be more detailed when compared to the physical ones.
        </p>
        <p>
          To state the obvious, just like a physical Kundli is made by learned Vedic astrologers and pandits, similarly, an online Kundli too is also prepared as per the astrological predictions by the astrologers. What changes is only the medium of sharing that information with you, i.e. digital? The digitalisation of Kundli is to only allow you more benefits like the availability of information in multiple languages.
        </p>
        <p>
          And anyway, one can always get their physical Janam Kundali report made by our astrologers, which will reach you physically.
        </p>
        <p className="sub-heading">How To Create a Free Online Janam Kundli?</p>
        <p>
          Creating an online Kundli for yourself is relatively easy. Honestly, butter-easy. All you need to do to make your online Janam Kundli with AstroTalk is simply go to the ‘Kundli’ option and Insert the requested information. The requested information would be your date of birth, time of your birth, etc. The correct date and time allow precise predictions.
        </p>
        <p>
          Once you have filled in the details, all you need to do is click submit. Once you click submit, within seconds, you will find a detailed Janam Kundli of yourself. Besides textual content (that will help you understand what strong or weak traits you have), the Janam Kundli will also help you with charts that will showcase the position of the different planets in houses based on your current astrological situation, which reveals a whole new dimension of information.
        </p>
        <p>
          The free Janam Kundli you get on AstroTalk, though, is made after a precise study of all the scientific methods but when it comes to writing it down, the study is portrayed in a very simple language so you can understand it without any hassle. However, just in case you hit a snag or can’t understand what it means, simply chat or ring our astrologers to help you with your queries.
        </p>
        <p>
          Besides getting a Janam Kundli for yourself, we also offer Janam Kundli matching service to anyone seeking. Janam kundli matching is most important when one plans to get married. Matching of kundlis is done to ensure the girl and boy planning to get married are compatible with each other. This, however, doesn’t mean that if kundli doesn't match one shouldn’t marry the other person. But in case kundli doesn't match, an astrologer can let you know why it did not, and also recommend remedies for the same.
        </p>
        <p>
          Janam Kundli matching is related to Gun matching. Janam Kundli of two people, when matched, shows how many guns of those people match. Based on this, marriages are fixed. With Janam Kundli matching, you can also understand how being Manglik of two people will affect each other, what could be the effect of Manglik dosh on you, and remedies to get rid of Manglik dosha.
        </p>
        <p>
          These were just a handful of times when Janam Kundli could come in handy. So if looking to get one for yourself, get in touch with our astrologers for the best advice and service.
        </p>
        <p>
          To get your online Janam Kundli, Kundli prediction, and kundali reading, you can either chat with our astrologer or talk to our astrologer. For free online Kundli making, you can also visit the free Janam Kundli chart option and get a personalised free Janam kundali for yourself by our Janam Kundli maker software. You can get free kundali check and free Kundli prediction.
        </p>
      </div>
    </div>
  );
};


const FormA = (props) => {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form A submitted!");
  };

  return (
    <form className="formA" onSubmit={handleSubmit}>
      <label>New Kundli</label>
      <br />
      <TextField
        className="input"
        id="demo-helper-text-misaligned"
        label="Name"
        size="small"
      />
      <TextField
        className="input"
        helperText="Please select your date of birth"
        id="demo-helper-text-misaligned"
        // label="Name"
        size="small"
        type="datetime-local"
      />
      <TextField
        className="input"
        id="demo-helper-text-misaligned"
        label="Place of Birth"
        size="small"
      />
      <TextField
        className="input"
        id="demo-helper-text-misaligned"
        label="Language"
        size="small"
      />
      <TextField
        className="input"
        id="demo-helper-text-misaligned"
        label="Gender"
        size="small"
      />
      <TextField
        className="input"
        id="demo-helper-text-misaligned"
        label="Kundli Style"
        size="small"
      />
      <Button type="submit" className="a_btn">Generate Kundli</Button>
      {/* <Button id="form_b_btn" variant="text" onClick={() => navigate("/saved-kundli")}>Download Saved Kundli</Button> */}
    </form >
  );
};

const FormB = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form A submitted!");
  };

  return (
    <form className="formB" onSubmit={handleSubmit}>
      <label>Saved Kundli</label>
      <br />
      {props.logindetails._currentValue.loggedIn === false ? <div className="form_content_login">
        <p>Please login to check your saved horoscope!</p>
        <button className="a_btn" type="button" onClick={props.logindetails._currentValue.Login}>Login</button>
      </div> : <div className="saved_kundli">
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
        <div className="kundli"></div>
      </div>}
    </form>
  );
};



export default Home;
