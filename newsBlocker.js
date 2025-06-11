function addObserver(callback) {
    const options = {
        attributes: true,
        childList: false,
        subtree: true,
    }
    const observer = new MutationObserver(callback)

    observer.observe(document.body, options)
}

function removeNews() {
    if (window.location.href.startsWith("https://www.linkedin.com")) {
        const news = document.querySelector("#feed-news-module")
        if (news) {
            news.remove()
        }
    }
}

addObserver(removeNews)
removeNews()
