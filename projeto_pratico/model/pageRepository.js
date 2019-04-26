const PageRepository = {
    pageList: [],
    save(page) {
        if(this.exists(page.url)) {
            return false;
        }
        console.log(page);
        this.pageList.push(page);
        console.log(this.pageList.length + ' páginas lidas.');
        return true;
    },
    exists(url) {
        return this.pageList.some(page => page.url === url);
    }

};



module.exports = PageRepository;