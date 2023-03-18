import React from "react";
import { ContentWrapper } from "./content-wrapper";
import { NavbarHero, Navbar } from "./navbar";

export const MainPageLayout = ({
  hero,
  children,
}: {
  hero?: boolean;
  children: React.ReactNode;
}) => (
  <main>
    {hero ? <NavbarHero /> : <Navbar />}
    <ContentWrapper contentSpacing="p2" horizontalOnly>
      {children}
    </ContentWrapper>
    <footer>
      <code>I hope you‘re having a great day 😌</code>
    </footer>
  </main>
);
