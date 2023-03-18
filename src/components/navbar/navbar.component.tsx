import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useEffect, useState } from "react";
import { ContentWrapper } from "../content-wrapper";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ height: "7px", backgroundColor: "rgb(41, 45, 62)" }}>
        &nbsp;
      </div>
      <ContentWrapper contentSpacing="p2">
        <div className="navbar--flexbox">
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
