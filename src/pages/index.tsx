import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar } from "../components/navbar";
import { ContentWrapper } from "../components/content-wrapper";
import { FavouriteShots } from "../components/favourite-shots";
import { StaticImage } from "gatsby-plugin-image";
import "./index.module.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <ContentWrapper contentSpacing="p2" horizontalOnly>
        <h1>Things I Like</h1>
        <ul>
          <li>
            Wildlife Photography (
            <a
              href="https://inaturalist.ca/observations?place_id=any&user_id=worrisomemachine&verifiable=any"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                height={19}
                style={{ padding: "0 2px", verticalAlign: "bottom" }}
                src="../images/inat.png"
                alt="iNat Logo"
              />
              iNat
            </a>
            )
          </li>
          <li>Municipal Politics</li>
          <li>Cooking (when I'm not lazy)</li>
        </ul>
        <h1>My Fav Shots</h1>
        <p>
          All photos{" "}
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            style={{ height: "0.85em" }}
            alt="Creative Commons copyright symbol"
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
