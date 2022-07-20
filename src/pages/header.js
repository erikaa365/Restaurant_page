
const headerDiv = function(){
    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = 'Restaurant name';

    const homeBtn = document.createElement('button');
    homeBtn.id = 'homeBtn';
    homeBtn.classList.add('headerBtn');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menuBtn';
    menuBtn.classList.add('headerBtn');
    menuBtn.textContent = 'Menu';

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contactBtn';
    contactBtn.classList.add('headerBtn');
    contactBtn.textContent = 'Contact';

    const infoSection = document.createElement('div');
    infoSection.id = 'infoSection';

    return ([header, homeBtn, menuBtn, contactBtn, infoSection]);
}


export default headerDiv;