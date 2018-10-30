/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila


/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  let cnt = 0;
  alert('Velkominn í leikinn, gangi þér vel. Markmið leiksins er að æfa sig að reikna einföld dæmi eins hratt og þú getur');
  const GAMES_TO_PLAY = 10;
  let teljari = false;
  let leikir = 0;
  do {
    teljari = play();
    if (teljari == true) {
      cnt++;
      leikir++;
    }
  } while (confirm('Spila annan?'));

  alert(`Rétt  ${cnt} af ${leikir} dæmum`);
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let result = false;
  result = ask();
  return result;
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  let resultask = false;
  //let daemi = Math.floor(Math.random() * 4) + 1;
  let svar = 0, plusminus1 = randomNumber(1, 100), plusminus2 = randomNumber(1, 100), margdeil1 = randomNumber(1, 10), margdeil2 = randomNumber(1, 10), a = 0;
  let daemi = 2;
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
  console.log(resultask, svar, plusminus1, margdeil2);
  return resultask;
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Byrjar leik
start();
