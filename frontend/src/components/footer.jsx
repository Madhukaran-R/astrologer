import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h2 className="heading">About Us</h2>
                <p className="sub-heading">
                    Astrologger is a platform that aims to provide personalized
                    astrological insights and guidance to individuals seeking clarity
                    and direction in life. Our team of expert astrologers and data
                    scientists combine ancient wisdom with modern technology to create
                    accurate and insightful astrological reports. Whether you are
                    looking for career guidance, relationship advice, or spiritual
                    growth, Astrologger offers a range of services to help you navigate
                    life's journey with confidence and purpose. Discover the cosmic
                    blueprint of your life and unlock the secrets of the universe with
                    Astrologger!
                </p>
                <div className="footer-quick-links">
                    <div className="quicklink">
                        <b>Year</b>
                        <ul className="quick-link-horoscopes">
                            <LauchText text={"2025"} link={"/year/2025"} />
                            <LauchText text={"2024"} link={"/year/2024"} />
                            <LauchText text={"2023"} link={"/year/2023"} />
                        </ul>
                        <b>Other Links</b>
                        <ul className="quick-link-horoscopes">
                            <LauchText text={"Horoscope 2024"} link={"/year/2025"} />
                            <LauchText text={"Today's Horoscope"} link={"/year/2024"} />
                            <LauchText text={"Today's Love Horoscope"} link={"/year/2023"} />
                            <LauchText text={"Yesterday's Horoscope"} link={"/year/2023"} />
                        </ul>
                    </div>
                    <div className="quicklink">
                        <b>Horoscopes Quick Links</b>
                        <ul className="quick-link-horoscopes">
                            <LauchText text={"Aries"} link={"/zodiac/aries"} />
                            <LauchText text={"Taurus"} link={"/zodiac/taurus"} />
                            <LauchText text={"Gemini"} link={"/zodiac/gemini"} />
                            <LauchText text={"Cancer"} link={"/zodiac/cancer"} />
                            <LauchText text={"Leo"} link={"/zodiac/leo"} />
                            <LauchText text={"Virgo"} link={"/zodiac/virgo"} />
                            <LauchText text={"Libra"} link={"/zodiac/libra"} />
                            <LauchText text={"Scorpio"} link={"/zodiac/scorpio"} />
                            <LauchText text={"Sagittarius"} link={"/zodiac/sagittarius"} />
                            <LauchText text={"Capricorn"} link={"/zodiac/capricorn"} />
                            <LauchText text={"Aquarius"} link={"/zodiac/aquarius"} />
                            <LauchText text={"Pisces"} link={"/zodiac/pisces"} />
                        </ul>
                    </div>
                    <div className="quicklink">
                        <b>Kundli</b>
                        <ul className="quick-link-horoscopes">
                            <LauchText text={"Generate Kundli"} link={"/kundli"} />
                            <LauchText text={"Saved Kundli"} link={"/saved-kundli"} />
                            <LauchText text={"Kundli Matching"} link={"/kundli-matching"} />
                            <LauchText text={"Kundli Analysis"} link={"/kundli-analysis"} />
                            <LauchText text={"Kundli Reading"} link={"/kundli-reading"} />
                            <LauchText text={"Kundli in Hindi"} link={"/kundli-in-hindi"} />
                            <LauchText text={"Kundli in English"} link={"/kundli-in-english"} />
                            <LauchText text={"Kundli in Tamil"} link={"/kundli-in-tamil"} />
                            <LauchText text={"Kundli in Telugu"} link={"/kundli-in-telugu"} />
                            <LauchText text={"Kundli in Kannada"} link={"/kundli-in-kannada"} />
                        </ul>
                    </div>
                    <div className="quicklink">
                        <b>SocialMedia Links</b>
                        <br></br>
                        <InstagramIcon titleAccess="Instagram" />
                        <XIcon titleAccess="X" />
                        <ConnectWithoutContactIcon titleAccess="Contact" />
                        <LinkedInIcon titleAccess="LinkedIN" />
                        <FacebookIcon titleAccess="Facebook" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                ✨ Copyright © 2024 Cosmic Insights by Astrologer. ✨
            </div>
        </div>
    )
};

function LauchText(props) {
    const navigate = useNavigate();
    let goto = (link) => {
        navigate(link);
    }
    return (
        <li {...props} onClick={() => goto(props.link)}>
            {props.text}
            <LaunchIcon className="icon" />
        </li>
    )
}

export default Footer;