// Create div element, add content and styles
const addHomeInfo = function(){
    const homeInfo = document.querySelector('#infoSection');

    const AboutHeader = document.createElement('div');
    AboutHeader.classList.add('headline');
    AboutHeader.innerHTML = 'About us <hr>';

    homeInfo.appendChild(AboutHeader);

    const AboutInfo = document.createElement('div');
    AboutInfo.classList.add('info');
    AboutInfo.textContent = 'About us INFO';

    homeInfo.appendChild(AboutInfo);


    const HoursHeader = document.createElement('div');
    HoursHeader.classList.add('headline');
    HoursHeader.innerHTML = 'Working hours <hr>';

    homeInfo.appendChild(HoursHeader);

    const HoursInfo = document.createElement('div');
    HoursInfo.classList.add('info');
    HoursInfo.textContent = 'hours INFO';

    homeInfo.appendChild(HoursInfo);


    const WhereHeader = document.createElement('div');
    WhereHeader.classList.add('headline');
    WhereHeader.innerHTML = 'Where to find us? <hr>';

    homeInfo.appendChild(WhereHeader);

    const WhereInfo = document.createElement('div');
    WhereInfo.classList.add('info');
    WhereInfo.textContent = 'Where INFO';

    homeInfo.appendChild(WhereInfo);

}

export default addHomeInfo; 

