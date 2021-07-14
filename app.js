'use strict';

let hours =['Name','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total']

function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;    
}

let parent=document.getElementById("nedal")
let tbl=document.createElement('table')
parent.appendChild(tbl)

let locationarr=[]

function Locations(name, min, max, avg)
{
    this.name=name
    this.min=min
    this.max=max
    this.avg=avg
    this.totalCookies=0;
    this.randomCustomersArray=[]
    this.avgCookiesperHour=[]

    locationarr.push(this)
}
Locations.prototype.randomCustomers=function(min,max,avg) 
{
    for (let i = 0; i < hours.length-2; i++) 
    {
        this.randomCustomersArray.push(random(this.min,this.max))        
    }
}
Locations.prototype.avgCookies=function() 
{
    for(let i=0;i<hours.length-2;i++)
    {
        this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg));
        this.totalCookies += this.avgCookiesperHour[i];
    }    
}

let seattle=new Locations("Seattle",23,65,6.3)
let tokyo=new Locations("Tokyo",3,24,1.2)
let dubai=new Locations("Dubai",11,38,3.7)
let paris=new Locations("Paris",20,38,2.3)
let lima=new Locations("Lima",2,16,4.6)

function header() {   
     let tr=document.createElement('tr')
    tbl.appendChild(tr)

    for (let i = 0; i < hours.length; i++) 
    {
        let th=document.createElement('th')
        tr.appendChild(th)
        th.textContent=hours[i]
    }  
    
}

Locations.prototype.render=function() 
{
    let tr1=document.createElement('tr')
    tbl.appendChild(tr1)

    let td=document.createElement('th')
    tr1.appendChild(td)
    td.textContent=`${this.name}`

    for(let i=0;i<14;i++)
    {
        let td1=document.createElement('td')
        tr1.appendChild(td1)
        td1.textContent=this.avgCookiesperHour[i]
    }
    let sum=document.createElement('th')
    tr1.appendChild(sum)
    sum.textContent=this.totalCookies
    
}   

let form=document.getElementById('form')
form.addEventListener('submit',submitFunction)

function submitFunction(event) 
{
    event.preventDefault();
    console.log(event)
    let name=event.target.nameField.value;
    let min=parseInt(event.target.minField.value)
    let max=parseInt(event.target.maxField.value)
    let avg=parseFloat(event.target.avgField.value)
    let newShop=new Locations(name,min,max,avg)
    
    tbl.textContent=''
    header()
    for (let i = 0; i < locationarr.length; i++) 
    {
        locationarr[i].randomCustomersArray=[]
        locationarr[i].avgCookiesperHour=[]
        locationarr[i].totalCookies=0
        locationarr[i].randomCustomers()
        locationarr[i].avgCookies()
        locationarr[i].render()
        console.log(locationarr[i])
    }
    footer()
    console.log(locationarr)
}



function footer(params)
 {  
    let tr2=document.createElement('tr')
    tbl.appendChild(tr2)

    let th2=document.createElement('th')
    tr2.appendChild(th2)
    th2.textContent='Total'

    let overallTotal=0;

    for(let i=0;i<14;i++)
    {
        let total1=0;
        for (let j = 0; j < locationarr.length; j++)
         {
             total1+=locationarr[j].avgCookiesperHour[i]
             overallTotal+=locationarr[j].avgCookiesperHour[i]            
        }
        let footTh=document.createElement('th')
        tr2.appendChild(footTh)
        footTh.textContent=total1

    }
    let totalTh=document.createElement('th')
    tr2.appendChild(totalTh)
    totalTh.textContent=overallTotal

}

header()
for (let i = 0; i < locationarr.length; i++) 
{
    locationarr[i].randomCustomers()
    locationarr[i].avgCookies()
    locationarr[i].render()
}

footer()


// seattle.footer()
// seattle.randomCustomers()
// seattle.randomCust()
// seattle.avgCookies()
// seattle.sumCookies()



// // let seattle={
//     name: "Seattle",
//     min : 23,
//     max: 65,
//     avg: 6.3,
//     randomCustomersArray:[],
//     avgCookiesperHour:[],
//     sumarr:[]
//     ,randomCustomers:function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       },

//       randomCust: function (random) {
    
//       }
      
//       ,avgCookies: function (avg)
//       {
   
//       },
//       sumCookies: function () 
//       {

//       }
//       ,
//       header: function() 
//       {
        
//       }
        
       
//       ,render: function () 
//       {
        
        


//        }
//        , footer: function(total) {
           
//        }
//     }
        
    

      

// seattle.randomCust()
// seattle.avgCookies()
// seattle.header()
// seattle.render()
// seattle.sumCookies()


// let tokyo={
//     name: "Tokyo",
//     min : 3,
//     max: 24,
//     avg: 1.2,
//     randomCustomersArray:[],
//     avgCookiesperHour:[],
//     sumarr:[],
//     hours :['6am: ','7am: ','8am: ','9am: ',
//     '10am: ','11am: '
//     ,'12pm: ','1pm: ','2pm: ',
//     '3pm: ','4pm: ','5pm: ',
//     '6pm: ','7pm: '],
//     randomCustomers:function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       },

//       randomCust: function (random) {
//           for(let i=0;i<this.hours.length;i++)
//           {
//               this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
//           }        
//       }
      
//       ,avgCookies: function (avg)
//       {
//           for(let i=0;i<this.randomCustomersArray.length;i++)
//           {
//               this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
//           }   
//       },
//       sumCookies: function () 
//       {
//           let sum=0
//           for(let j=0;j<this.avgCookiesperHour.length;j++)
//           {
//               sum=sum+this.avgCookiesperHour[j]
//               this.sumarr.push(sum)
//           }    
//           return sum;
//       }
//       ,render: function () {
// let p_element=document.createElement('p')
// value1.appendChild(p_element)
// p_element.textContent="Tokyo"

// let ulElement=document.createElement('ul')
// value1.appendChild(ulElement)
// for(let i=0;i<this.hours.length;i++)
// {
//     let liElement=document.createElement('li')
//     ulElement.appendChild(liElement)
//     liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
// }    let lastElement=document.createElement('li')
// ulElement.appendChild(lastElement)
// lastElement.textContent=`Total: ${this.sumCookies()} cookies`


//       }
// }
// tokyo.randomCust()
// tokyo.avgCookies()
// tokyo.render()
// tokyo.sumCookies()

// let dubai={
//     name: "Dubai",
//     min : 11,
//     max: 38,
//     avg: 3.7,
//     randomCustomersArray:[],
//     avgCookiesperHour:[],
//     sumarr:[],
//     hours :['6am: ','7am: ','8am: ','9am: ',
//     '10am: ','11am: '
//     ,'12pm: ','1pm: ','2pm: ',
//     '3pm: ','4pm: ','5pm: ',
//     '6pm: ','7pm: '],
//     randomCustomers:function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       },

//       randomCust: function (random) {
//           for(let i=0;i<this.hours.length;i++)
//           {
//               this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
//           }        
//       }
      
//       ,avgCookies: function (avg)
//       {
//           for(let i=0;i<this.randomCustomersArray.length;i++)
//           {
//               this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
//           }   
//       },
//       sumCookies: function () 
//       {
//           let sum=0
//           for(let j=0;j<this.avgCookiesperHour.length;j++)
//           {
//               sum=sum+this.avgCookiesperHour[j]
//               this.sumarr.push(sum)
//           }    
//           return sum;
//       }
//       ,render: function () {
// let p_element=document.createElement('p')
// value2.appendChild(p_element)
// p_element.textContent="Dubai"

// let ulElement=document.createElement('ul')
// value2.appendChild(ulElement)
// for(let i=0;i<this.hours.length;i++)
// {
//     let liElement=document.createElement('li')
//     ulElement.appendChild(liElement)
//     liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
// }    let lastElement=document.createElement('li')
// ulElement.appendChild(lastElement)
// lastElement.textContent=`Total: ${this.sumCookies()} cookies`


//       }
// }
// dubai.randomCust()
// dubai.avgCookies()
// dubai.render()
// dubai.sumCookies()

// let paris={
//     name: "Paris",
//     min : 20,
//     max: 38,
//     avg: 2.3,
//     randomCustomersArray:[],
//     avgCookiesperHour:[],
//     sumarr:[],
//     hours :['6am: ','7am: ','8am: ','9am: ',
//     '10am: ','11am: '
//     ,'12pm: ','1pm: ','2pm: ',
//     '3pm: ','4pm: ','5pm: ',
//     '6pm: ','7pm: '],
//     randomCustomers:function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       },

//       randomCust: function (random) {
//           for(let i=0;i<this.hours.length;i++)
//           {
//               this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
//           }        
//       }
      
//       ,avgCookies: function (avg)
//       {
//           for(let i=0;i<this.randomCustomersArray.length;i++)
//           {
//               this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
//           }   
//       },
//       sumCookies: function () 
//       {
//           let sum=0
//           for(let j=0;j<this.avgCookiesperHour.length;j++)
//           {
//               sum=sum+this.avgCookiesperHour[j]
//               this.sumarr.push(sum)
//           }    
//           return sum;
//       }
//       ,render: function () {
// let p_element=document.createElement('p')
// value3.appendChild(p_element)
// p_element.textContent="Paris"

// let ulElement=document.createElement('ul')
// value3.appendChild(ulElement)
// for(let i=0;i<this.hours.length;i++)
// {
//     let liElement=document.createElement('li')
//     ulElement.appendChild(liElement)
//     liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
// }    let lastElement=document.createElement('li')
// ulElement.appendChild(lastElement)
// lastElement.textContent=`Total: ${this.sumCookies()} cookies`


//       }
// }
// paris.randomCust()
// paris.avgCookies()
// paris.render()
// paris.sumCookies()

// let lima={
//     name: "Lima",
//     min : 2,
//     max: 16,
//     avg: 4.6,
//     randomCustomersArray:[],
//     avgCookiesperHour:[],
//     sumarr:[],
//     hours :['6am: ','7am: ','8am: ','9am: ',
//     '10am: ','11am: '
//     ,'12pm: ','1pm: ','2pm: ',
//     '3pm: ','4pm: ','5pm: ',
//     '6pm: ','7pm: '],
//     randomCustomers:function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//       },

//       randomCust: function (random) {
//           for(let i=0;i<this.hours.length;i++)
//           {
//               this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
//           }        
//       }
      
//       ,avgCookies: function (avg)
//       {
//           for(let i=0;i<this.randomCustomersArray.length;i++)
//           {
//               this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
//           }   
//       },
//       sumCookies: function () 
//       {
//           let sum=0
//           for(let j=0;j<this.avgCookiesperHour.length;j++)
//           {
//               sum=sum+this.avgCookiesperHour[j]
//               this.sumarr.push(sum)
//           }    
//           return sum;
//       }
//       ,render: function () {
// let p_element=document.createElement('p')
// value4.appendChild(p_element)
// p_element.textContent="Lima"

// let ulElement=document.createElement('ul')
// value4.appendChild(ulElement)
// for(let i=0;i<this.hours.length;i++)
// {
//     let liElement=document.createElement('li')
//     ulElement.appendChild(liElement)
//     liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
// }    let lastElement=document.createElement('li')
// ulElement.appendChild(lastElement)
// lastElement.textContent=`Total: ${this.sumCookies()} cookies`


//       }
// }
// lima.randomCust()
// lima.avgCookies()
// lima.render()
// lima.sumCookies()