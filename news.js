// Write your Javascript excercises here:
// Our variables
const key = "8cc94279432f44f38ef448ffa067b76c"
const urlNewsBox = `https://newsapi.org/v2/everything?q=Stockholm&art&culture&language=en&sortBy=publishedAt&apiKey=${key}`
const urlSideBar = `https://newsapi.org/v2/everything?q=Stockholm&art&culture&language=en&sortBy=publishedAt&apiKey=${key}`
const urlheadnews = `https://newsapi.org/v2/everything?q=Stockholm&art&culture&language=en&sortBy=publishedAt&apiKey=${key}`
const urlpopularSideBar = `https://newsapi.org/v2/everything?q=Stockholm&art&culture&language=en&sortBy=popularity&apiKey=${key}`

// Our function headnews div
const recievedNewsheadnews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) =>{

      if(article.urlToImage && index < 1) {

        //Here we create and add html elements to our html file
        document.querySelector(".headnews").innerHTML +=
          `<div class="headnews-news">
              <a href ="${article.url}" target="_blank">
                <h3>${article.title}</h3>
                <img src="${article.urlToImage}"/>
              </a>
            </div>`
      }
    })
}

// Our function newsBox div
const recievedNewsNewsBox = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {
      const descriptionLength = 98;
      let shortDescription = article.description;
      if (article.description.length > descriptionLength) {
        shortDescription = article.description.substring (0,descriptionLength)+'...';
      }

      if(article.urlToImage && index < 10) {

				//Here we create and add html elements to our html file
				document.querySelector(".newsBox").innerHTML +=
          `<div class="newsBox-news">
              <a href ="${article.url}" target="_blank">
                <h6>${article.publishedAt}</h6>
                <h3>${article.title}</h3>
                <h5>${article.source.name}</h5>
                <img src="${article.urlToImage}"/>
                <p>${shortDescription}</p>
              </a>
            </div>`

      }
    })
}

// Our function latestNewsSideBar div
const recievedNewsSideBar = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) =>{

      if(article.urlToImage && index < 5) {

        //Here we create and add html elements to our html file
        document.querySelector(".latestNewsSideBar").innerHTML +=
          `<div class="latestNewsSideBar-news">
              <a href ="${article.url}" target="_blank">
                <h6>${article.publishedAt}</h6>
                <h4>${article.title}</h4>
              </a>
            </div>`

      }
    })
}

// Our function popularNewsSideBar div
const recievedpopularNewsSideBar = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) =>{

        if(index < 5)  {

        //Here we create and add html elements to our html file
        document.querySelector(".popularNewsSideBar").innerHTML +=
          `<div class="popularNewsSideBar-news">
              <a href ="${article.url}" target="_blank">
                <h6>${article.publishedAt}</h6>
                <h4>${article.title}</h4>
              </a>
            </div>`

      }
    })
}



//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlheadnews)
  .then(response => response.json())
  .then(recievedNewsheadnews)

fetch(urlNewsBox)
  .then(response => response.json())
  .then(recievedNewsNewsBox)

fetch(urlSideBar)
  .then(response => response.json())
  .then(recievedNewsSideBar)

fetch(urlpopularSideBar)
  .then(response => response.json())
  .then(recievedpopularNewsSideBar)
