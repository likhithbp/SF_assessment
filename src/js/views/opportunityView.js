import { elements } from './base';

export const clearDetails = () =>{
    elements.opportunity.innerHTML = '';
}


export const renderDetails = (oppo) => {
    
    const markup = `
        <figure class="opportunity__fig">
            <img src="img/Salesforce_map.png" alt="${oppo.representative.name}" class="opportunity__img">
            
        </figure>
        <div class="opportunity__ingredients">
        <p>THE REPRESENTATIVE <h3>${oppo.representative.name}</h3><h4>Email: ${oppo.representative.email},</br> Phone: +${oppo.representative.phone} </h4> HAS TO VISIT <h2>${oppo.company.name}</h2> AT ADDRESS <h3>${oppo.company.address}</h3> AND TALK TO <h3>${oppo.company.contact.NAME}</h3><h4>Email: ${oppo.company.contact.EMAIL},</br>Phone: +${oppo.company.contact.PHONE}</h4></p>
        </div>
    `;
    elements.opportunity.insertAdjacentHTML('afterbegin', markup);
};