
function start() {
  let cnt = 0;
  alert('Velkominn í leikinn, gangi þér vel. Markmið leiksins er að æfa sig að reikna einföld dæmi eins hratt og þú getur');
  const GAMES_TO_PLAY = 10;
  let teljari = false;
  let leikir = 10;
  do {
    teljari = play();
    if (teljari == true) {
      cnt++;
    }
  } while (confirm('Spila annan?'));

  alert(`Rétt  ${cnt} af ${leikir} dæmum`);
}

function play() {
  let result = false;
  result = ask();
  return result;
}


function ask() {
  let resultask = false;
  let daemi = Math.floor(Math.random() * 4) + 1;
  let svar = 0, plusminus1 = randomNumber(1, 100), plusminus2 = randomNumber(1, 100), margdeil1 = randomNumber(1, 10), margdeil2 = randomNumber(1, 10), a = 0;

  if (daemi == 1) {
    svar = prompt(`Reiknaðu saman ${plusminus1} + ${plusminus2}`);
    if (svar == plusminus1 + plusminus2) {
      resultask = true;
    }
  }
  if (daemi == 2) {
    if (plusminus1 < plusminus2) {
      a = plusminus1;
      plusminus1 = plusminus2;
      plusminus2 = a;
    }
    let svar = prompt(`Reiknaðu saman ${plusminus1} - ${plusminus2}`);
    if (svar == plusminus1 - plusminus2) {
      resultask = true;
    }
  }
  if (daemi == 3) {
    svar = prompt(`Reiknaðu saman ${margdeil1} * ${margdeil2}`);
    if (svar == margdeil1 * margdeil2) {
      resultask = true;
    }
  }
  if (daemi == 4) {
    let svar = prompt(`Reiknaðu saman ${margdeil1} / ${margdeil2}`);
    if (svar == margdeil1 / margdeil2) {
      resultask = true;
    }
  }

  return resultask;
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

start();
