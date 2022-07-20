import headerDiv from '../pages/header';
import addHomeInfo from '../pages/home';

const firstLoad = function(){
    const content = document.querySelector('#content');

    const header = headerDiv();
    header.forEach((element) => 
        content.appendChild(element));    

    addHomeInfo()
    }

export default firstLoad;
