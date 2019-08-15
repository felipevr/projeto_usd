var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

const setContent = async(file) => {
    const response = await fetch(`templates/${file}.html`);
    document.querySelector('.js-content').innerHTML = await response.text();
    setActive(file);
}

const setActive = function(menu) {

    const active = document.querySelector('#navbarNav > ul > li.nav-item.active');
    if(active) {
        active.classList.remove('active');
    }

    document.querySelector('#navbarNav > ul > li.nav-item.nav-'+menu).classList.add('active');

};

router.on({
    'sobre': async() => {
        await setContent('sobre');
    },
    'configuracoes': async() => {
        await setContent('configuracoes');
        config();
    },
    '*': async() => {
        await setContent('conversor');
        conversor();
    }
}).resolve();