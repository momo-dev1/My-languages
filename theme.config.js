const theme = {
  titleSuffix: "",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/momo-dev1",
  projectLink: "https://github.com/momo-dev1/My-languages",
  logo: () => (
    <>
      <img
        src="/languages.png"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Languages  <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website created for learning languages"
        />
        <meta
          name="description"
          content="Website for learning languages"
        />
        <meta name="author" content="Momo" />
        <meta
          property="og:url"
          content="https://momo-doc1.vercel.app/languages"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${ props.title } | Languages`}
        />
        <meta
          property="og:description"
          content="Website created for learning languages"
        />
      </>
    );
  },
  darkMode: true,
  footerText: `${ new Date().getFullYear() } © Momo`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
