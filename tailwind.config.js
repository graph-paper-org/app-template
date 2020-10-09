const svelteExtractor = (content) => {
  const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
  const matchedTokens = [];
  let match = regExp.exec(content);

  while (match) {
    if (match[0].startsWith("class")) {
      matchedTokens.push(match[0].substring(6));
    } else {
      matchedTokens.push(match[0]);
    }
    match = regExp.exec(content);
  }
  return matchedTokens;
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: "layers",
    content: ["./src/**/.html", "./src/**/*.svelte"],
    options: {
      defaultExtractor: svelteExtractor,
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
