const addMenuInfo = function(){
    const menuInfo = document.querySelector('#infoSection');

    const BreakfastHeader = document.createElement('div');
    BreakfastHeader.classList.add('headline');
    BreakfastHeader.textContent = 'Breakfast';

    menuInfo.appendChild(BreakfastHeader);

    const BreakfastInfo = document.createElement('div');
    BreakfastInfo.classList.add('info');
    BreakfastInfo.textContent = 'Zobene';

    menuInfo.appendChild(BreakfastInfo);


    const LunchHeader = document.createElement('div');
    LunchHeader.classList.add('headline');
    LunchHeader.textContent = 'Lunch';

    menuInfo.appendChild(LunchHeader);

    const LunchInfo = document.createElement('div');
    LunchInfo.classList.add('info');
    LunchInfo.textContent = 'Chilli';

    menuInfo.appendChild(LunchInfo);


    const DessertsHeader = document.createElement('div');
    DessertsHeader.classList.add('headline');
    DessertsHeader.textContent = 'Desserts';

    menuInfo.appendChild(DessertsHeader);

    const DessertsInfo = document.createElement('div');
    DessertsInfo.classList.add('info');
    DessertsInfo.textContent = 'Oreo cheesecake';

    menuInfo.appendChild(DessertsInfo);

    const SnacksHeader = document.createElement('div');
    SnacksHeader.classList.add('headline');
    SnacksHeader.textContent = 'Snacks';

    menuInfo.appendChild(SnacksHeader);

    const SnacksInfo = document.createElement('div');
    SnacksInfo.classList.add('info');
    SnacksInfo.textContent = 'Chips';

    menuInfo.appendChild(SnacksInfo);


}

export default addMenuInfo; 