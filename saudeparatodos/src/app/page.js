import React from "react";
import Header from "./components/Header"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saude para Todos</title>
        <meta name="description" content="SaudeParaTodos"></meta>
        <link rel="icon" href=""></link>
      </Head>
      <Header />

    </>
  )
}