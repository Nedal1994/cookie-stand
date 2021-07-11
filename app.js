'use strict';
let value=document.getElementById("seattle")
let value1=document.getElementById("tokyo")
let value2=document.getElementById("dubai")
let value3=document.getElementById("paris")
let value4=document.getElementById("lima")

let seattle={
    name: "Seattle",
    min : 23,
    max: 65,
    avg: 6.3,
    randomCustomersArray:[],
    avgCookiesperHour:[],
    sumarr:[],
    hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '],
    randomCustomers:function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },

      randomCust: function (random) {
          for(let i=0;i<this.hours.length;i++)
          {
              this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
          }        
      }
      
      ,avgCookies: function (avg)
      {
          for(let i=0;i<this.randomCustomersArray.length;i++)
          {
              this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
          }   
      },
      sumCookies: function () 
      {
          let sum=0
          for(let j=0;j<this.avgCookiesperHour.length;j++)
          {
              sum=sum+this.avgCookiesperHour[j]
              this.sumarr.push(sum)
          }    
          return sum;
      }
      ,render: function () {
let p_element=document.createElement('p')
value.appendChild(p_element)
p_element.textContent="Seattle"

let ulElement=document.createElement('ul')
value.appendChild(ulElement)
for(let i=0;i<this.hours.length;i++)
{
    let liElement=document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
}    let lastElement=document.createElement('li')
ulElement.appendChild(lastElement)
lastElement.textContent=`Total: ${this.sumCookies()} cookies`

      }
}
seattle.randomCust()
seattle.avgCookies()
seattle.render()
seattle.sumCookies()

let tokyo={
    name: "Tokyo",
    min : 3,
    max: 24,
    avg: 1.2,
    randomCustomersArray:[],
    avgCookiesperHour:[],
    sumarr:[],
    hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '],
    randomCustomers:function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },

      randomCust: function (random) {
          for(let i=0;i<this.hours.length;i++)
          {
              this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
          }        
      }
      
      ,avgCookies: function (avg)
      {
          for(let i=0;i<this.randomCustomersArray.length;i++)
          {
              this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
          }   
      },
      sumCookies: function () 
      {
          let sum=0
          for(let j=0;j<this.avgCookiesperHour.length;j++)
          {
              sum=sum+this.avgCookiesperHour[j]
              this.sumarr.push(sum)
          }    
          return sum;
      }
      ,render: function () {
let p_element=document.createElement('p')
value1.appendChild(p_element)
p_element.textContent="Tokyo"

let ulElement=document.createElement('ul')
value1.appendChild(ulElement)
for(let i=0;i<this.hours.length;i++)
{
    let liElement=document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
}    let lastElement=document.createElement('li')
ulElement.appendChild(lastElement)
lastElement.textContent=`Total: ${this.sumCookies()} cookies`


      }
}
tokyo.randomCust()
tokyo.avgCookies()
tokyo.render()
tokyo.sumCookies()

let dubai={
    name: "Dubai",
    min : 11,
    max: 38,
    avg: 3.7,
    randomCustomersArray:[],
    avgCookiesperHour:[],
    sumarr:[],
    hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '],
    randomCustomers:function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },

      randomCust: function (random) {
          for(let i=0;i<this.hours.length;i++)
          {
              this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
          }        
      }
      
      ,avgCookies: function (avg)
      {
          for(let i=0;i<this.randomCustomersArray.length;i++)
          {
              this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
          }   
      },
      sumCookies: function () 
      {
          let sum=0
          for(let j=0;j<this.avgCookiesperHour.length;j++)
          {
              sum=sum+this.avgCookiesperHour[j]
              this.sumarr.push(sum)
          }    
          return sum;
      }
      ,render: function () {
let p_element=document.createElement('p')
value2.appendChild(p_element)
p_element.textContent="Dubai"

let ulElement=document.createElement('ul')
value2.appendChild(ulElement)
for(let i=0;i<this.hours.length;i++)
{
    let liElement=document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
}    let lastElement=document.createElement('li')
ulElement.appendChild(lastElement)
lastElement.textContent=`Total: ${this.sumCookies()} cookies`


      }
}
dubai.randomCust()
dubai.avgCookies()
dubai.render()
dubai.sumCookies()

let paris={
    name: "Paris",
    min : 20,
    max: 38,
    avg: 2.3,
    randomCustomersArray:[],
    avgCookiesperHour:[],
    sumarr:[],
    hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '],
    randomCustomers:function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },

      randomCust: function (random) {
          for(let i=0;i<this.hours.length;i++)
          {
              this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
          }        
      }
      
      ,avgCookies: function (avg)
      {
          for(let i=0;i<this.randomCustomersArray.length;i++)
          {
              this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
          }   
      },
      sumCookies: function () 
      {
          let sum=0
          for(let j=0;j<this.avgCookiesperHour.length;j++)
          {
              sum=sum+this.avgCookiesperHour[j]
              this.sumarr.push(sum)
          }    
          return sum;
      }
      ,render: function () {
let p_element=document.createElement('p')
value3.appendChild(p_element)
p_element.textContent="Paris"

let ulElement=document.createElement('ul')
value3.appendChild(ulElement)
for(let i=0;i<this.hours.length;i++)
{
    let liElement=document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
}    let lastElement=document.createElement('li')
ulElement.appendChild(lastElement)
lastElement.textContent=`Total: ${this.sumCookies()} cookies`


      }
}
paris.randomCust()
paris.avgCookies()
paris.render()
paris.sumCookies()

let lima={
    name: "Lima",
    min : 2,
    max: 16,
    avg: 4.6,
    randomCustomersArray:[],
    avgCookiesperHour:[],
    sumarr:[],
    hours :['6am: ','7am: ','8am: ','9am: ',
    '10am: ','11am: '
    ,'12pm: ','1pm: ','2pm: ',
    '3pm: ','4pm: ','5pm: ',
    '6pm: ','7pm: '],
    randomCustomers:function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      },

      randomCust: function (random) {
          for(let i=0;i<this.hours.length;i++)
          {
              this.randomCustomersArray.push(this.randomCustomers(this.min,this.max))
          }        
      }
      
      ,avgCookies: function (avg)
      {
          for(let i=0;i<this.randomCustomersArray.length;i++)
          {
              this.avgCookiesperHour.push(Math.floor(this.randomCustomersArray[i]*this.avg))
          }   
      },
      sumCookies: function () 
      {
          let sum=0
          for(let j=0;j<this.avgCookiesperHour.length;j++)
          {
              sum=sum+this.avgCookiesperHour[j]
              this.sumarr.push(sum)
          }    
          return sum;
      }
      ,render: function () {
let p_element=document.createElement('p')
value4.appendChild(p_element)
p_element.textContent="Lima"

let ulElement=document.createElement('ul')
value4.appendChild(ulElement)
for(let i=0;i<this.hours.length;i++)
{
    let liElement=document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent=this.hours[i]+this.avgCookiesperHour[i] + ' cookies'
    
}    let lastElement=document.createElement('li')
ulElement.appendChild(lastElement)
lastElement.textContent=`Total: ${this.sumCookies()} cookies`


      }
}
lima.randomCust()
lima.avgCookies()
lima.render()
lima.sumCookies()