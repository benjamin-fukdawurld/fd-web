import { ReactNode } from "react";
import Head from "next/head";

import Layout from "../Layout";

interface BasePageProps {
  title: string;
  description?: string;
  favicon?: string;
  children?: ReactNode;
}

const defaultProps = {
  description: "",
  favicon: "/favicon.ico",
};

export type PageProps = BasePageProps & typeof defaultProps;

export default function Page({ title, description, favicon, children }: PageProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Head>

      <Layout>{children && children}</Layout>
    </div>
  );
}

Page.defaultProps = defaultProps;
