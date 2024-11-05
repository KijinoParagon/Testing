async function getComponent(url) {
    var response = await fetch(url);
    var text = await response.text();
    var component = document.createElement('div');
    component.innerHTML = text;
    component = component.firstChild;
    return component;
}

async function loadHeader() {
    var header = await getComponent("https://cdn.jsdelivr.net/gh/KijinoParagon/Portfolio@main/header.html");
    document.querySelector('header').appendChild(header);
}

async function loadView(controller, view) {
    var main = await getComponent("https://cdn.jsdelivr.net/gh/KijinoParagon/Portfolio@main/" + controller + "/" + view + ".html");
    document.querySelector('main').appendChild(main);
}