async function getComponent(url) {
    var response = await fetch(url);
    var text = await response.text();
    var component = document.createElement('div');
    component.innerHTML = text;
    return component.childNodes;
}

async function loadHeader() {
    var header = await getComponent("https://cdn.jsdelivr.net/gh/KijinoParagon/Portfolio@main/Views/Shared/header.html");
    var container = document.querySelector('header');
    header.forEach(element => {
        container.append(element);
    });
}

async function loadView(controller, view) {
    var main = await getComponent("https://cdn.jsdelivr.net/gh/KijinoParagon/Portfolio@main/Views/" + controller + "/" + view + ".html");
    var container = document.querySelector('main');
    main.forEach(element => {
        container.append(element);
    });
}