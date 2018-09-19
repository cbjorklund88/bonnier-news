// Write your Javascript excercises here:
// Our variables
const key = "8cc94279432f44f38ef448ffa067b76c"
const urldetox = `https://newsapi.org/v2/everything?q=Digital-detox&language=en&apiKey=${key}`
const urlDigital = `https://newsapi.org/v2/everything?q=Digital&language=en&apiKey=${key}`

// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
      const descriptionLength = 98;
      let shortDescription = article.description;
      if (article.description.length > descriptionLength) {
        shortDescription = article.description.substring (0,descriptionLength)+'...';
      }

      if(article.urlToImage) {

					//Here we create and add html elements to our html file
					document.querySelector(".newsBox").innerHTML +=
            `<div class="newsBox-news">
                <a href ="${article.url}" target="_blank">
                  <h6>${article.publishedAt}</h6>
                  <h2>${article.title}</h2>
                  <h5>${article.source.name}</h5>
                  <img src="${article.urlToImage}"/>
                  <p>${shortDescription}</p>
                </a>
              </div>`


          //Here we create and add html elements to our html file
					document.querySelector(".headnews").innerHTML =
            `<div class="headnews-news">
                <a href ="${article.url}" target="_blank">
                  <h2>${article.title}</h2>
                  <img src="${article.urlToImage}"/>
                </a>
              </div>`

          }
    })
}

const recievedNewsSideBar = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
      const descriptionLength = 98;
      let shortDescription = article.description;
      if (article.description.length > descriptionLength) {
        shortDescription = article.description.substring (0,descriptionLength)+'...';
      }

      if(article.urlToImage) {

//Here we create and add html elements to our html file
document.querySelector(".latestNewsSideBar").innerHTML +=
  `<div class="latestNewsSideBar-news">
      <a href ="${article.url}" target="_blank">
        <h6>${article.publishedAt}</h6>
        <h2>${article.title}</h2>
      </a>
    </div>`
  }
})
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urldetox)
  .then(response => response.json())
  .then(recievedNews)

fetch(urlDigital)
  .then(response => response.json())
  .then(recievedNewsSideBar)
