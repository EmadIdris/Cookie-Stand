'use strict';


let ArrHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let container = document.getElementById('Sales1');
let tableEl = document.createElement('table');
container.appendChild(tableEl);




let branches =[];
function Loctions (LocName , MinNumOfCusPerH , MaxNumOfCusPerH , AvgNumOfCusPerH   )
{
    this.LocName = LocName;
    this.MinNumOfCusPerH = MinNumOfCusPerH;
    this.MaxNumOfCusPerH = MaxNumOfCusPerH;
    this.AvgNumOfCusPerH= AvgNumOfCusPerH;
    this.CustomePerHour =[];
    this.SoldCookiesEachHour=[];
    this.TotalOfBranch = 0;
    branches.push(this);
}

Loctions.prototype.getRandom = function()
{
    let min = Math.ceil(this.MinNumOfCusPerH);
       let max = Math.floor(this.MaxNumOfCusPerH);
       for(let i=0;i<ArrHour.length;i++)
       {
            this.CustomePerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
       }
}

Loctions.prototype.SoldCookies = function ()
{
 for(let i=0;i<ArrHour.length;i++)
 {
     this.SoldCookiesEachHour.push(Math.floor(this.CustomePerHour[i] * this.AvgNumOfCusPerH))
     this.TotalOfBranch += this.SoldCookiesEachHour[i];
 }   
}
Loctions.prototype.render = function()
{
    let trE1 = document.createElement('tr')
    tableEl.appendChild(trE1);
        let tdE1 = document.createElement('td');
        trE1.appendChild(tdE1)
        tdE1.textContent = `${this.LocName}`
    for(let i=0 ; i<ArrHour.length;i++)
    {
        let tdE1 = document.createElement('td');
        trE1.appendChild(tdE1)
        tdE1.textContent = `${this.SoldCookiesEachHour[i]}`
    }
    let tddE1 = document.createElement('td');
        trE1.appendChild(tddE1)
        tddE1.textContent = `${this.TotalOfBranch}`
    }


// let container = document.getElementById('Sales1');
// let tableEl = document.createElement('table');
// container.appendChild(tableEl);

function createTableHeader() {

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = ' ';
    for(let i=0;i<ArrHour.length; i++)
    {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = `${ArrHour[i]} `;
    }
    // let thEl = document.createElement('th');
    //     trEl.appendChild(thEl);
    let thEll = document.createElement('th');
    trEl.appendChild(thEll);
    thEll.textContent = 'Daily Location Total';
}
let myForm = document.getElementById('myForm')
myForm.addEventListener('submit', addInfo);
function addInfo(event)
{
    event.preventDefault();
    let locName = event.target.locName.value;
    let minOrder = event.target.minOrder.value;
    let maxOrder = event.target.maxOrder.value;
    let avgSales = event.target.avgSales.value;
    let newLoc = new Loctions (locName ,minOrder, maxOrder , avgSales )
    myForm.reset();
    

    var rowCount = tableEl.rows.length;
    tableEl.deleteRow(rowCount -1);

    newLoc.getRandom();
    newLoc.SoldCookies();
    newLoc.render();
    createfooterHeader();
}
createTableHeader();




function createfooterHeader() {

    let trE1 = document.createElement('tr')
    tableEl.appendChild(trE1)
    let tdE1 =document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent= `Totals`;
    let TotalOfTotal =0;
    for(let i =0;i<ArrHour.length;i++)
    {   
        let TotalOfBranch =0;
        for(let j=0;j<branches.length;j++)
        {
            TotalOfBranch += branches[j].SoldCookiesEachHour[i];
            TotalOfTotal  += branches[j].SoldCookiesEachHour[i];
        }
          let tdE1 =document.createElement('td');
        trE1.appendChild(tdE1); 
        tdE1.textContent= TotalOfBranch;
    }
        
        let lastCell =document.createElement('td');
        trE1.appendChild(lastCell); 
        lastCell.textContent= TotalOfTotal;
}

let seattle = new Loctions('Seattle', 23,65,6.3);
let tokyo = new Loctions('Tokyo', 3,24,1.2);
let dubai  = new Loctions('Dubai', 11,38,3.7);
let paris  = new Loctions('Paris', 20 ,38,2.3);
let lima  = new Loctions('Lima', 2 ,16 ,4.6);


// seattle.render();

seattle.getRandom();
seattle.SoldCookies();
seattle.render();

tokyo.getRandom();
tokyo.SoldCookies();
tokyo.render();

dubai.getRandom();
dubai.SoldCookies();
dubai.render();

paris.getRandom();
paris.SoldCookies();
paris.render();

lima.getRandom();
lima.SoldCookies();
lima.render();

createfooterHeader();
console.log(branches);