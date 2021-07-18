import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandsmith</title>
        <meta
          name="description"
          content="Claim and check usernames and profiles across all the social profiles that matter."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <InputGroup>
          <Input placeholder="Enter username" />
          <InputRightElement children={<SearchIcon color="grey.500" />} />
        </InputGroup>
      </main>
    </div>
  );
}
