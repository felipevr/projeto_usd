
const ogReader = require('./og-reader/index');

const PageRepository = require('./model/pageRepository');


const main = async () => {

    const url = ogReader.getUrl();

    if (!url) {
        console.log('A URL informada não é válida');
        return;
    }

    console.log("Estamos processando a extração dos dados da página...");

    try {
        const pages = await ogReader.run(url);
        PageRepository.saveAll(pages);
        console.log(PageRepository.pageList);
    } catch(err) {

    }
    
};


main();

return;


