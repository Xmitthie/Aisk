function random() {
    const aisk = ["Aisk", "🍩", "🍭", "🍡", "Snokmode", "Keith"]
    document.getElementById('randy').innerHTML = aisk[Math.floor(Math.random() * aisk.length)]
}