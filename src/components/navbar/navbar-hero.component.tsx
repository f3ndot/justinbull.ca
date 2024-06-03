import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useEffect, useState } from "react";
import { ContentWrapper } from "../content-wrapper";
import "./navbar.css";

const TattooEmoji = ({ refreshInterval }: { refreshInterval?: number }) => {
  const _refreshInterval = refreshInterval ?? 1000;
  const tattooEmojis = ["🐙", "🎨", "🖋️", "🧑‍🎨"].map((emoji) => (
    <span
      key={emoji}
      style={{
        animationDuration: `${_refreshInterval / 1000}s`,
      }}
    >
      {emoji}
    </span>
  ));
  const [emoji, setEmoji] = useState<(typeof tattooEmojis)[0]>(tattooEmojis[0]);

  useEffect(() => {
    let currentEmojiIndex = 0;
    const interval = setInterval(() => {
      currentEmojiIndex = (currentEmojiIndex + 1) % tattooEmojis.length;
      setEmoji(tattooEmojis[currentEmojiIndex]);
    }, _refreshInterval);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return emoji;
};

export const NavbarHero = () => {
  return (
    <nav className="navbar">
      <div style={{ height: "7px", backgroundColor: "rgb(41, 45, 62)" }}>
        &nbsp;
      </div>
      <ContentWrapper contentSpacing="p2">
        <div className="navbar--flexbox">
          <div>
            <h1 className="navbar--hero">Hello, I'm Justin Bull</h1>
            <h2 className="navbar--sub-hero">
              I have 10+ years of experience building full-stack web
              applications using technologies like Python, Ruby, React,
              AngularJS, and BackboneJS.
            </h2>
            <div>
              <a
                className="navbar--code-status"
                href="https://www.venue.ink/"
                target="_blank"
              >
                I‘m making tattoo software{" "}
                <TattooEmoji refreshInterval={1500} />
              </a>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <StaticImage
              src="../../images/me.jpg"
              alt="Me holding our cat Bisou"
              placeholder="blurred"
              className="navbar--hero-image"
            />
          </div>
        </div>
      </ContentWrapper>
    </nav>
  );
};
