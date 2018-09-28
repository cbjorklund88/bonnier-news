// Write your Javascript excercises here:
// Our variables
const key = "8cc94279432f44f38ef448ffa067b76c"
const urlheadnews = `https://newsapi.org/v2/top-headlines?country=us&uk&au&category=science&technology&sortBy=publishedAt&apiKey=${key}`
const urlNewsBox = `https://newsapi.org/v2/top-headlines?country=us&uk&au&category=science&technology&sortBy=publishedAt&apiKey=${key}`
const urllastesSideBar = `https://newsapi.org/v2/top-headlines?country=us&uk&au&category=science&technology&sortBy=publishedAt&apiKey=${key}`
const urlpopularSideBar = `https://newsapi.org/v2/top-headlines?country=us&uk&au&category=science&technology&sortBy=popularity&apiKey=${key}`

// Our function headnews div
const recievedNewsheadnews = (newsdata) => {


	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {

      if(article.urlToImage && index == 0) {
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

  const toggleAccordion = (button, accordionId, descriptionId) => {
    const accordionElement = document.getElementById(accordionId);
    const descriptionElement = document.getElementById(descriptionId);
    accordionElement.classList.toggle('visible');
    descriptionElement.classList.toggle('visible');
    button.classList.toggle('buttonExpanded')
  }


// Our function newsBox div
const recievedNewsNewsBox = (newsdata) => {

  let numberOfArticles = 0

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {
      const descriptionLength = 60;
      let previewDescription = article.description;
      if (article.description && article.description.length > descriptionLength) {
        previewDescription = article.description.substring (0,descriptionLength)+'...';
      }

      if(article.description && index > 0 && index < 10) {
				//Here we create and add html elements to our html file
				document.querySelector(".newsBox").innerHTML +=
          `<div class="newsBox-news">
            <h5>${article.source.name}</h5>
            <h6>${article.publishedAt}</h6>
            <img src="${article.urlToImage}" class="image-newsBox" />
              <h3>${article.title}</h3>
            <span id="description${index}" class="preview-description visible">${previewDescription}</span>
            <div id="accordion${index}" class="description-readmore">
              <span> ${article.description}<a href ="${article.url}target="_blank"><div class="readFullArticle">READ FULL ARTICLE</div></a></span>
            </div>
            <button class="readmoreButton" onclick="toggleAccordion(this, 'accordion${index}', 'description${index}')"><i class="fas fa-angle-down"></i><i class="fas fa-angle-up"></i></button>
          </div>`

          numberOfArticles = index
      }

    })

    document.querySelector(".articleCount").innerHTML +=
      `All articles (${numberOfArticles})`

}


// Our function latestNewsSideBar div
const recievedNewsSideBar = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) =>{

      if(index < 8) {

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

        if(index < 8)  {

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

fetch(urllastesSideBar)
  .then(response => response.json())
  .then(recievedNewsSideBar)

fetch(urlpopularSideBar)
  .then(response => response.json())
  .then(recievedpopularNewsSideBar)
