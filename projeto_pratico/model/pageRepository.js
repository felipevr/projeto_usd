class PageRepository {
    constructor () {
        this.pageList = []
    }

    exists(url) {
        return this.pageList.some(page => page.url === url);
    }

    save(page) {
        if(this.exists(page.url)) {
            return false;
        }
        console.log(page);
        this.pageList.push(page);
        console.log(this.pageList.length + ' páginas lidas.');
        return true;
    }

    saveAll(pages) {
        pages.forEach(page => {
            this.save(page);
        });
    }

};



module.exports = new PageRepository();