import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Talency</title>
        <meta name="description" content="Next.js starter with TypeScript and Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-center">
        <h1>Welcome to Gana</h1>
        <Counter />
      </main>
    </div>
  );
}
