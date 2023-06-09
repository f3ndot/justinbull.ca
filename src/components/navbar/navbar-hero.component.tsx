import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useEffect, useState } from "react";
import { ContentWrapper } from "../content-wrapper";
import "./navbar.css";

const HiatusEmoji = ({ refreshInterval }: { refreshInterval?: number }) => {
  const _refreshInterval = refreshInterval ?? 1000;
  const hiatusEmojis = ["🎉", "🚴‍♀️", "📸", "😴", "✈️"].map((emoji) => (
    <span
      key={emoji}
      style={{
        animationDuration: `${_refreshInterval / 1000}s`,
      }}
    >
      {emoji}
    </span>
  ));
  const [emoji, setEmoji] = useState<typeof hiatusEmojis[0]>(hiatusEmojis[0]);

  useEffect(() => {
    let currentEmojiIndex = 0;
    const interval = setInterval(() => {
      currentEmojiIndex = (currentEmojiIndex + 1) % hiatusEmojis.length;
      setEmoji(hiatusEmojis[currentEmojiIndex]);
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
              <code className="navbar--code-status">
                I‘m on hiatus until 2024 <HiatusEmoji refreshInterval={1500} />
              </code>
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
