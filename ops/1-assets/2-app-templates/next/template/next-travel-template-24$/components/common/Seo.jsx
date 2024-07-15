import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || GoTrip - Travel & Tour React NextJS Template}`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
