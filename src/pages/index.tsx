import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FavouriteShots } from "../components/favourite-shots";
import { StaticImage } from "gatsby-plugin-image";
import * as s from "./index.module.scss";
import { ExternalA } from "../components/external-link/external-link.component";
import { MainPageLayout } from "../components/main-page-layout";

const IndexPage: React.FC<PageProps> = () => {
  const cveList = [
    {
      link: "https://www.openwall.com/lists/oss-security/2019/08/19/1",
      cve: "CVE-2019-15150",
      software: "MediaWiki OAuth2 Client",
    },
    {
      link: "https://www.openwall.com/lists/oss-security/2016/08/19/2",
      cve: "CVE-2016-6582",
      software: "Doorkeeper",
    },
    {
      link: "https://www.openwall.com/lists/oss-security/2015/09/06/2",
      cve: "CVE-2015-7225",
      software: "Devise-Two-Factor",
    },
  ];

  return (
    <MainPageLayout hero={true}>
      <div className={s.mainFlex}>
        <div className={s.mainFlexColumn}>
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
            <li>Cycling 🚴‍♀️</li>

            <li>
              History of banal, everyday objects 🏺 <br />
              <small>
                (
                <ExternalA href="https://www.youtube.com/watch?v=-BHXH5am7B0">
                  like ketchup!
                </ExternalA>
                )
              </small>
            </li>
          </ul>
        </div>
        <div className={s.mainFlexColumn}>
          <h1>Work-related</h1>
          <ul>
            <li>
              <strong>
                <em>I'm on hiatus!</em>
              </strong>{" "}
              🔕
            </li>
            <li>
              <a href="/resume/">Resumé</a> (2021)
            </li>
            <li>
              <ExternalA href="http://www.linkedin.com/in/justinasbull">
                LinkedIn
              </ExternalA>
            </li>
            <li>
              Awarded{" "}
              <ExternalA href="https://betakit.com/heres-the-list-of-canadas-developer-30-under-30/">
                Developer 30 Under 30
              </ExternalA>{" "}
              (2018)
            </li>
            <li>
              Discovered &amp; disclosed {cveList.length} CVEs:
              <ul style={{ paddingLeft: "20px" }}>
                {cveList.map(({ cve, link, software }) => (
                  <li key={cve}>
                    <small>
                      <ExternalA href={link}>{cve}</ExternalA> ({software})
                    </small>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.contactBanner}>
        <a href="mailto:me@justinbull.ca">Email</a> •&nbsp;
        <ExternalA href="https://www.instagram.com/f3ndot">
          Instagram
        </ExternalA>{" "}
        •&nbsp;
        <ExternalA href="https://www.github.com/f3ndot">GitHub</ExternalA>{" "}
        •&nbsp;
        <a href="https://blog.justinbull.ca/">Blog</a>{" "}
        <small>(seldom updated)</small>
      </div>
      <h1>My Fav Nature Shots</h1>
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
          <ExternalA href="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </ExternalA>
          )
        </small>
      </p>
      <FavouriteShots />
    </MainPageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Justin Bull | Staff Software Engineer</title>
);
