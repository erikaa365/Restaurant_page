import './styles/style.css';
import firstLoad from './functions/page-load.js';
import addHomeInfo from './pages/home';
import addMenuInfo from './pages/menu';
import addContactInfo from './pages/contact';


firstLoad();

function render(){
    const content = document.querySelector('#infoSection');
    content.innerHTML = '';

    return content; 
}

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');

homeBtn.addEventListener('click', render);
homeBtn.addEventListener('click', addHomeInfo);

menuBtn.addEventListener('click', render)
menuBtn.addEventListener('click', addMenuInfo)

contactBtn.addEventListener('click', render);
contactBtn.addEventListener('click', addContactInfo);

// Tab switching logic 