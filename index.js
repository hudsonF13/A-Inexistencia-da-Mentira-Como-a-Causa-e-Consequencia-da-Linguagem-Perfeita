const searchButton = document.getElementById("searchButton");
const linkButton = document.getElementById("linkButton");
const closeInputSearchBarButton = document.getElementById("closeinputSearchBar");
const lightLive = document.getElementById("inLive");
const linkforTheLive = document.getElementById("inLiveLink");
const mobileLinkforTheLive = document.getElementById("inLiveLinkMobile");
const breakinkNewsMobile = document.getElementById("breakinkNewsMobile");

const buttonList = document.getElementById("listButtonMobile");
const closeButtonList = document.getElementById("closeMenuMobileDiv");
const lightLiveMobile = document.getElementById("inLiveMobile");

const bodyHtml = document.getElementById("bodyHtml");
const inputSearchBar = document.getElementById("inputSearchBar");
const menuMobileDiv = document.getElementById("menuMobile");

function showSearchBar () {
    alert("Funcionalidade indisponível por falta de conteúdo. Quer emitir sua opinião no O Jagunço? Candidate-se e trabalhe conosco.");
};

function warmFalseLinks () {
    alert("Funcionalidade indisponível por falta de funcionários. Candidate-se e trabalhe conosco.");
}

function changeColorInLive () {
    if (lightLive.style.color === "transparent" || lightLiveMobile.style.color === "transparent") {
        lightLive.style.color = "red";
        lightLiveMobile.style.color = "red";
    } else {
        lightLive.style.color = "transparent";
        lightLiveMobile.style.color = "transparent";
    };
};

setInterval(changeColorInLive, 1500);

function warmLive () {
    alert("Nenhuma transmissão ao vivo no momento. Tente novamente mais terde.");
}

menuMobileDiv.style.display = "none";

function openCloseDivMobile () {
    if (menuMobileDiv.style.display === "none") {
        menuMobileDiv.style.display = "flex";
        bodyHtml.style.overflow = "hidden";
    } else {
        menuMobileDiv.style.display = "none";
        bodyHtml.style.overflow = "scroll";
    };
    
};

searchButton.addEventListener("click", showSearchBar);
linkButton.addEventListener("click", warmFalseLinks);
buttonList.addEventListener("click", openCloseDivMobile);
closeButtonList.addEventListener("click", openCloseDivMobile);
linkforTheLive.addEventListener("click", warmLive);
mobileLinkforTheLive.addEventListener("click", warmLive);
breakinkNewsMobile.addEventListener("click", warmFalseLinks);