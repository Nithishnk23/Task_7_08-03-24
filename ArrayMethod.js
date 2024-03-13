var xhr = new XMLHttpRequest(); //new xml http request
xhr.open("GET", "https://restcountries.com/v3.1/all"); 
xhr.send();
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(this.response);
//1) using filter function to get countries with asia as a region
        let info = data.filter((item) => item.region == 'Asia');
        for (let i = 0; i < info.length; i++) {
            console.log(`Name : ${info[i].name}`)
        }
//2) using filter function to get countries with population of less than 2 lakhs
        let pop = data.filter((item) => item.population < 200000)
        for (let i = 0; i < pop.length; i++) {
            console.log(`
            Name : ${pop[i].name}`);
        }
//3) name, capital, flag using forEach function
        data.forEach((item) => {
                console.log(`
            Name : ${item.name}
            Capital : ${item.capital}
            Flag : ${item.flag}
            `)
            })
//4) total population of countries using reduce function
        let popul = data.reduce((acc, item) => {
            return acc + item.name + ' ' + ':' + ' ' + item.population + "\n"
        })
        console.log(popul);
//5) country which uses US Dollars as currency.
let cur = data.filter((item) => ((item.currencies[0].code == 'USD') && (item.name != "Antartica")))
        for (let i = 0; i < cur.length; i++) {
            console.log(`
             Name : ${cur[i].name}
           `)
        }
} else { console.log(this.response); }
}