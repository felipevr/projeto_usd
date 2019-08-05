var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

const setContent = async(file) => {
    const response = await fetch(`templates/${file}.html`);
    document.querySelector('.js-content').innerHTML = await response.text();
}

router.on({
    '*': async() => {
        await setContent('conversor')
    }
}).resolve();