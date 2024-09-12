console.log('News App')

// https://api.hnpwa.com/v0/news.json

function getNews() {
  fetch('https://api.hnpwa.com/v0/news.json')
    .then((res) => res.json())
    .then((json) => { 
      const news = json
      console.log('news: ', news)
      addItems(news)
    })
}

function addItems(news) {
  for(let i = 0; i < news.length; i++) {
    const app = document.getElementById('news')

    // Add Title
    const addTitle = document.createElement('a')    
    addTitle.innerHTML = news[i].title
    addTitle.href = news[i].url
    addTitle.target = '_blank'
    app.appendChild(addTitle)
  }
}

getNews()

// Shopping Mall
// https://fakestoreapi.com/products
