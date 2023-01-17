function calculateLanguagePercentages(languages: {
  [key: string]: number;
}): void {
  let totalLines = 0;
  //calculate the total number of lines
  for (const language in languages) {
    totalLines += languages[language];
  }
  //calculate the percentage of lines for each language
  for (const language in languages) {
    const percentage = (languages[language] / totalLines) * 100;
    console.log(`${language} makes up ${percentage}% of the website`);
  }
}

const languages = {
  JavaScript: 500,
  HTML: 200,
  CSS: 250,
  TypeScript: 100,
};

calculateLanguagePercentages(languages);
