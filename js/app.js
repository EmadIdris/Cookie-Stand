'use strict';

let ArrHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


// let container = document.getElementById('Sales');


let Seattle = 
{
    Name : 'Seattle',
    MinimumNumberOfCustomersPerHour : 23 ,
    MaximumNumberOfCustomersPerHour : 65 ,
    AverageNumberOfCookiesPurchasedPerCustomer : 6.3 ,
    CustomersPerHour:[],
    soldCookiesPerHour : [],
    render : function ()
    {
    let container = document.getElementById('Sales');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = Seattle.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<ArrHour.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${ArrHour[i]} : ${this.soldCookiesPerHour[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<ArrHour.length;i++)
        { 
            this.soldCookiesPerHour.push( this.CustomersPerHour[i] * this.AverageNumberOfCookiesPurchasedPerCustomer);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MinimumNumberOfCustomersPerHour);
       let max = Math.floor(this.MaximumNumberOfCustomersPerHour);
       for(let i=0;i<ArrHour.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive

       }
    }
}
;
Seattle.getRandom(23,65);
Seattle.generate ();
Seattle.render();


