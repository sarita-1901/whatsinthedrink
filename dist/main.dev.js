"use strict";

//console.log("Cheat answer for testing- Alternative is tutorial now");
//console.log(IngArr);
var form = document.getElementById('form'); //Master List of Ingrediensts

var masterList = [{
  "id": "rm",
  "img": "../images/Rum.jpg",
  "text": "Rum"
}, {
  "id": "sg",
  "img": "../images/Sugar.jpg",
  "text": "Sugar"
}, {
  "id": "lj",
  "img": "../images/Lime_Juice.jpg",
  "text": "Lime Juice"
}, {
  "id": "mn",
  "img": "../images/MintLeaves.jpg",
  "text": "Mint"
}, {
  "id": "tq",
  "img": "../images/Tequila.jpg",
  "text": "Tequila"
}, {
  "id": "cc",
  "img": "../images/Coconut.jpg",
  "text": "Coconut Cream"
}, {
  "id": "pa",
  "img": "../images/Pineapple.jpg",
  "text": "Pineapple Juice"
}, {
  "id": "cn",
  "img": "../images/Cointreau.jpg",
  "text": "Cointreau"
}, {
  "id": "pf",
  "img": "../images/passion-fruit.jpg",
  "text": "Passion Fruit"
}, {
  "id": "vd",
  "img": "../images/vodka.jpeg",
  "text": "Vodka"
}, {
  "id": "gb",
  "img": "../images/beer.jpg",
  "text": "Ginger Beer"
}, {
  "id": "cb",
  "img": "../images/cranberry.jpg",
  "text": "Cranberry"
}, {
  "id": "ps",
  "img": "../images/Passoa.jpeg",
  "text": "Passoa"
}, {
  "id": "ci",
  "img": "../images/cinnamon.jpg",
  "text": "Cinnamon"
}, {
  "id": "ms",
  "img": "../images/maple-syrup.webp",
  "text": "Maple Syrup"
}, {
  "id": "cj",
  "img": "../images/clementine.jpg",
  "text": "Clementine Juice"
}, {
  "id": "gn",
  "img": "../images/gin.jpg",
  "text": "Gin"
}, {
  "id": "vm",
  "img": "../images/vermouth.jpg",
  "text": "Vermouth"
}, {
  "id": "ap",
  "img": "../images/aperol.jpg",
  "text": "Aperol"
}, {
  "id": "ws",
  "img": "../images/scotch.jpg",
  "text": "Scotch whiskey"
}, {
  "id": "ab",
  "img": "../images/angostura.jpg",
  "text": "Bitters"
}];
/*load page dynamically with correct and 
random incorrect options*/

window.addEventListener('load', function (e) {
  //  e.preventDefault();
  var tutorial = document.getElementById('tutoriallink');
  tutorial.setAttribute('href', link);
  var instr = document.getElementById('instructions');
  instr.innerHTML = "Identify the main ingredients that you would use to make this<i class='fas fa-cocktail cocktail-icon'></i> , blend and then click Submit.";
  var RecIng = getIngList(IngArr);
  var extIng = getExtraList(IngArr);
  var listIng = RecIng.concat(extIng);
  var shuffled = listIng.sort(function () {
    return Math.random() - 0.5;
  });
  populateKeyIng(shuffled);
  var listIngIDs = listIng.map(function (element) {
    return element.id;
  });
  var MasterListIDs = masterList.map(function (element) {
    return element.id;
  });
  var RemgIng = MasterListIDs.filter(function (element) {
    return !listIngIDs.includes(element);
  });
  declareRemgIng(RemgIng);
});
/*Evaluate Response based on inputs selected */

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var inputArr = [];
  inputArr = getInputArray();
  var mainIngAct = inputArr.filter(function (element) {
    return mainIngExp.includes(element);
  });
  var suppIngAct = inputArr.filter(function (element) {
    return suppIngExp.includes(element);
  });
  detResponse(IngArr, mainIngExp, suppIngExp, mainIngAct, suppIngAct, inputArr);
}); //Reusable Functions

/*Set Response GIF*/

function setPersonMood(mood) {
  document.getElementById('mood').classList.remove('neutral-mood', 'mood-upset', 'mood-disappointed', 'mood-silly', 'mood-applause');
  console.log(mood);
  document.getElementById('mood').classList.add('mood-' + mood);
}
/*Fetch options selected by user*/


function getInputArray() {
  var checkval = [];

  if (lj.checked) {
    checkval.push(lj.value);
  }

  if (mn.checked) {
    checkval.push(mn.value);
  }

  if (rm.checked) {
    checkval.push(rm.value);
  }

  if (sg.checked) {
    checkval.push(sg.value);
  }

  if (tq.checked) {
    checkval.push(tq.value);
  }

  if (pf.checked) {
    checkval.push(pf.value);
  }

  if (ps.checked) {
    checkval.push(ps.value);
  }

  if (vd.checked) {
    checkval.push(vd.value);
  }

  if (pa.checked) {
    checkval.push(pa.value);
  }

  if (cc.checked) {
    checkval.push(cc.value);
  }

  if (gb.checked) {
    checkval.push(gb.value);
  }

  if (cb.checked) {
    checkval.push(cb.value);
  }

  if (cn.checked) {
    checkval.push(cn.value);
  }

  if (cj.checked) {
    checkval.push(cj.value);
  }

  if (ms.checked) {
    checkval.push(ms.value);
  }

  if (ci.checked) {
    checkval.push(ci.value);
  }

  if (gn.checked) {
    checkval.push(gn.value);
  }

  if (vm.checked) {
    checkval.push(vm.value);
  }

  if (ap.checked) {
    checkval.push(ap.value);
  }

  if (ws.checked) {
    checkval.push(ws.value);
  }

  if (ab.checked) {
    checkval.push(ab.value);
  }

  return checkval;
}
/*Determine response based on Expected and Actual values*/


function detResponse(ingExp, mainIngExp, suppIngExp, mainIngAct, suppIngAct, inputArr) {
  message = document.getElementById('message');
  /*console.log("Determining Response");
  console.log(inputArr);
  console.log(mainIngAct);
  console.log(suppIngAct);
  console.log(mainIngExp);
  console.log(suppIngExp);
  */

  inputArr.sort();
  ingExp.sort();
  mainIngAct.sort();
  mainIngExp.sort();
  suppIngAct.sort();
  suppIngExp.sort();

  if (inputArr.length == 0) {
    message.innerHTML = "No ingredient selected! <br><br>Select and click on submit.";
  } else if (inputArr.toString() == ingExp.toString()) {
    message.innerHTML = "You got it!";
    setPersonMood('applause');
  } else if (mainIngAct.toString() != mainIngExp.toString()) {
    message.innerHTML = "You have got the key ingrediants wrong!";
    setPersonMood('upset');
  } else if (suppIngAct.toString() != suppIngExp.toString()) {
    message.innerHTML = "I can't believe you could miss this.<br><br> Take a closer look!";
    setPersonMood('silly');
  } else {
    message.innerHTML = "Not quite there yet! <br> <br> You have some additional ones.";
    setPersonMood('disappointed');
  }
}
/*Below functions are used to dynamically populate correct and incorrect ptions on page*/


function populateKeyIng(RecIng) {
  var ul = document.getElementById('quiz-options');
  RecIng.forEach(function (element) {
    var id1 = element.id;
    var img1 = element.img;
    var text1 = element.text;
    var li = document.createElement('li');
    var answer = document.createElement('input');
    answer.setAttribute('type', 'checkbox');
    answer.setAttribute('id', id1);
    answer.setAttribute('value', id1);
    answer.setAttribute('class', 'item');
    li.appendChild(answer);
    var answerLabel = document.createElement('label');
    answerLabel.setAttribute('for', id1); // this corresponds to the checkbox id

    answerLabel.setAttribute('class', 'li1');
    var img = document.createElement("img");
    img.setAttribute('src', img1);
    img.setAttribute('class', 'ingIcon');
    answerLabel.appendChild(img);
    answerLabel.appendChild(document.createElement('br'));
    answerLabel.appendChild(document.createTextNode(text1));
    li.appendChild(answerLabel);
    var div = document.createElement('div');
    div.appendChild(li);
    ul.appendChild(div);
  });
}

function getIngList(Ing) {
  var IngList = masterList.filter(function (element) {
    return Ing.includes(element.id);
  });
  return IngList;
}

function getExtraList(Ing) {
  var ExtraList = masterList.filter(function (element) {
    return !Ing.includes(element.id);
  });
  var shuffledExtra = ExtraList.sort(function () {
    return Math.random() - 0.5;
  });
  var FinalExtraList = shuffledExtra.filter(function (element, index) {
    return index < 4;
  });
  return FinalExtraList;
}

function declareRemgIng(RemgIng) {
  RemgIng.forEach(function (element) {
    var answer = document.createElement('input');
    answer.setAttribute('type', 'checkbox');
    answer.setAttribute('id', element);
    console.log(element);
    answer.setAttribute('value', element);
    answer.setAttribute('class', 'item');
    var div = document.getElementById('hide');
    div.appendChild(answer);
  });
}