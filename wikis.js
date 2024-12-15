const wiki = require('wikipedia');
async function wikisearch (input) {
	try {
		const page = await wiki.page(input);
		// console.log(page);
        console.log("------");
		//Response of type @Page object
		const summary = await page.summary();
		console.log(summary);
        return summary;
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		console.log("error");
		//=> Typeof wikiError
	}
};
wikisearch("asdk")