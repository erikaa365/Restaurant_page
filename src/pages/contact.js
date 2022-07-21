// Create div element, add content and styles
const addContactInfo = function(){
    const contactInfo = document.querySelector('#infoSection');

    const CallHeader = document.createElement('div');
    CallHeader.classList.add('headline');
    CallHeader.textContent = 'Call us on:';

    contactInfo.appendChild(CallHeader);

    const CallInfo = document.createElement('div');
    CallInfo.classList.add('info');
    CallInfo.textContent = 'number';

    contactInfo.appendChild(CallInfo);


    const EmailHeader = document.createElement('div');
    EmailHeader.classList.add('headline');
    EmailHeader.textContent = 'You can always send an email!';

    contactInfo.appendChild(EmailHeader);

    const EmailInfo = document.createElement('div');
    EmailInfo.classList.add('info');
    EmailInfo.textContent = 'e-mail';

    contactInfo.appendChild(EmailInfo);


    const CreditsHeader = document.createElement('div');
    CreditsHeader.classList.add('headline');
    CreditsHeader.innerHTML = '<hr> Credits';

    contactInfo.appendChild(CreditsHeader);

    const CreditsInfo = document.createElement('div');
    CreditsInfo.classList.add('info');
    CreditsInfo.innerHTML = `Background photo by <a href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Liverani</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    `;

    contactInfo.appendChild(CreditsInfo);



}

export default addContactInfo; 

