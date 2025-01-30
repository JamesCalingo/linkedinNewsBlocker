function addObserver(callback) {
    const options = {
        attributes: false,
        childList: true,
        subtree: false,
    }
    const observer = new MutationObserver(callback)

    observer.observe(document.body, options)
}

function removeNews() {
    if (window.location.href.startsWith("https://www.linkedin.com")) {
        const aside = document.querySelector("aside")
        if (aside) {
            aside.remove()
        }
    }
}

addObserver(removeNews)
removeNews()
