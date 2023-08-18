let tg = window.Telegram.WebApp;
let search = document.getElementById('submit');

search.addEventListener('click', () => {
    let name = document.getElementById('film_name').value;

    let data = {
        film: name
    }
    
    tg.sendData(JSON.stringify(data))
    tg.close()
});