function addObserver(callback) {
    const options = {
        attributes: true,
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver(callback)

    observer.observe(document.body, options)
}

function removeNews() {
    if (window.location.href.startsWith("https://www.linkedin.com")) {
        const aside = document.querySelector(".scaffold-layout__aside")
        if (aside) {
            aside.remove()
        }
    }
}

addObserver(removeNews)
