"use client"
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <SessionProvider>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </SessionProvider>
    </body>
  </html>
);

export default RootLayout;
