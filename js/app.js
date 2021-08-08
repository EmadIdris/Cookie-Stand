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
    let container = document.getElementById('Sales1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
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
let Tokyo = 
{
    Name : 'Tokyo',
    MinimumNumberOfCustomersPerHour : 3 ,
    MaximumNumberOfCustomersPerHour : 24 ,
    AverageNumberOfCookiesPurchasedPerCustomer : 1.2 ,
    CustomersPerHour:[],
    soldCookiesPerHour : [],
    render : function ()
    {
    let container = document.getElementById('Sales2');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
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
Tokyo.getRandom(3,24);
Tokyo.generate ();
Tokyo.render();

let Dubai = 
{
    Name : 'Dubai',
    MinimumNumberOfCustomersPerHour : 11 ,
    MaximumNumberOfCustomersPerHour : 38 ,
    AverageNumberOfCookiesPurchasedPerCustomer : 3.7 ,
    CustomersPerHour:[],
    soldCookiesPerHour : [],
    render : function ()
    {
    let container = document.getElementById('Sales3');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
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
Dubai.getRandom(23,65);
Dubai.generate ();
Dubai.render();

let Paris = 
{
    Name : 'Paris',
    MinimumNumberOfCustomersPerHour : 20 ,
    MaximumNumberOfCustomersPerHour : 38 ,
    AverageNumberOfCookiesPurchasedPerCustomer : 2.3 ,
    CustomersPerHour:[],
    soldCookiesPerHour : [],
    render : function ()
    {
    let container = document.getElementById('Sales4');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
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
Paris.getRandom(23,65);
Paris.generate ();
Paris.render();

let Lima = 
{
    Name : 'Lima',
    MinimumNumberOfCustomersPerHour : 20 ,
    MaximumNumberOfCustomersPerHour : 38 ,
    AverageNumberOfCookiesPurchasedPerCustomer : 2.3 ,
    CustomersPerHour:[],
    soldCookiesPerHour : [],
    render : function ()
    {
    let container = document.getElementById('Sales5');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
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
Lima.getRandom(23,65);
Lima.generate ();
Lima.render();



