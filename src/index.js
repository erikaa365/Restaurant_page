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
homeBtn.addEventListener('click', render);
homeBtn.addEventListener('click', addHomeInfo);

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', render)
menuBtn.addEventListener('click', addMenuInfo)

const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', render);
contactBtn.addEventListener('click', addContactInfo)


// Tab switching logic 