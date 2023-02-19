import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar } from "../components/navbar";
import { ContentWrapper } from "../components/content-wrapper";
import { FavouriteShots } from "../components/favourite-shots";
import { StaticImage } from "gatsby-plugin-image";
import "./index.module.css";
import { Icon } from "../components/icon";
import { ExternalA } from "../components/external-link/external-link.component";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <ContentWrapper contentSpacing="p2" horizontalOnly>
        <div style={{ display: "flex" }}>
          <div>
            <h1>Things I Like</h1>
            <ul>
              <li>
                Wildlife Photography 📸 (
                <ExternalA href="https://inaturalist.ca/observations?place_id=any&user_id=worrisomemachine&verifiable=any">
                  <StaticImage
                    height={19}
                    src="../images/inat.png"
                    alt="iNat Logo"
                  />
                  iNat
                </ExternalA>
                )
              </li>
              <li>Municipal Politics 🗳</li>
              <li>Cooking 🍳</li>
              <li>Editing Wikipedia 📝</li>
              <li>
                History of banal, everyday objects 🏺 (
                <ExternalA href="https://www.youtube.com/watch?v=-BHXH5am7B0">
                  like ketchup!
                </ExternalA>
                )
              </li>
              <li>Cycling 🚴‍♀️</li>
            </ul>
          </div>
          <div>
            <h1>Work-related</h1>
            <ul>
              <li>
                <strong>
                  <em>I'm on hiatus!</em>
                </strong>{" "}
                🔕
              </li>
              <li>
                <a href="/resume/">Resumé</a> (updated 2021)
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <h1>My Fav Shots</h1>
        <p>
          All photos{" "}
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            style={{ height: "0.85em" }}
            alt="Creative Commons copyright symbol"
            title="Creative Commons copyright"
          />{" "}
          Justin Bull, some rights reserved{" "}
          <small>
            (
            <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
            )
          </small>
        </p>
        <FavouriteShots />
      </ContentWrapper>
      <footer>
        <code>I hope you‘re having a great day 😌</code>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Justin Bull | Staff Software Engineer</title>
);
