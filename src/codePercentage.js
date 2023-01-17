function calculateLanguagePercentages(languages) {
    var totalLines = 0;
    //calculate the total number of lines
    for (var language in languages) {
        totalLines += languages[language];
    }
    //calculate the percentage of lines for each language
    for (var language in languages) {
        var percentage = (languages[language] / totalLines) * 100;
        console.log("".concat(language, " makes up ").concat(percentage, "% of the website"));
    }
}
var languages = {
    JavaScript: 500,
    HTML: 200,
    CSS: 250,
    TypeScript: 100,
};
calculateLanguagePercentages(languages);
//# sourceMappingURL=codePercentage.js.map