
// Комментируй свой ебаный код!

console.warn("Test"); //Будет удалено

var cdel = "-------------------";// console text delimiter

//body
function bdl() {
    console.log(cdel);
    console.log("-body load")
}


//Header

var hel1, hel2, hel3, hel4, hel5;

hel1 = document.getElementById("hel1");
hel2 = document.getElementById("hel2");
hel3 = document.getElementById("hel3");
hel4 = document.getElementById("hel4");
hel5 = document.getElementById("hel5");

hel1.innerHTML = "Описание";
hel2.innerHTML = "Мир";
hel3.innerHTML = "Персонажи";
hel4.innerHTML = "Геймплей";
hel5.innerHTML = "Скриншоты";

//Info

var pgname, desp, desptext, gworld;

pgname = document.getElementById("pgname");
desp = document.getElementById("desp");
desptext = document.getElementById("desptext");
gworld = document.getElementById("gworld");

pgname.innerHTML = "In the footsteps";
desp.innerHTML = "Описание";
desptext.innerHTML = "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.";
gworld.innerHTML = "Мир";