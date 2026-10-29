/* =========================================================
   POSTAVKE ZASLONA – OŠ Ludina
   Ovu datoteku mijenjaš rijetko (satnica, ključ za temperaturu).
   Rasporede mijenjaš u mapi "slike", a obavijesti u "obavijesti.txt".
   ========================================================= */

var POSTAVKE = {

  naslov: "OŠ Ludina",

  // Satnica predmetne nastave: [početak, kraj] svakog sata
  satnicaPredmetna: [
    ["8:00", "8:45"],
    ["8:50", "9:35"],
    ["9:40", "10:25"],
    ["10:45", "11:30"],
    ["11:35", "12:20"],
    ["12:25", "13:10"],
    ["13:15", "14:00"]
  ],

  // Satnica razredne nastave
  satnicaRazredna: [
    ["8:00", "8:45"],
    ["8:50", "9:35"],
    ["9:55", "10:40"],
    ["10:45", "11:30"],
    ["11:35", "12:20"],
    ["12:25", "13:10"]
  ],

  // Koliko sekundi se prikazuje svaka slika (ako u slike.txt nije drugačije zadano)
  trajanjeSlike: 15,

  // TEMPERATURA
  // 1) Školska meteostanica (Weather Underground)
  stanica: "IVELIK6",
  // API ključ: wunderground.com → prijava vlasnika stanice → "API Keys".
  // Ako je prazno (ili stanica ne šalje podatke), koristi se Open-Meteo.
  wuKljuc: "041dd97bada647339dd97bada6d733bc",

  // 2) Rezerva: Open-Meteo (bez ključa) – procjena za ove koordinate
  mjesto: "Velika Ludina",
  sirina: 45.613,
  duzina: 16.620,

  // OBAVIJESTI iz Google tablice (Datoteka → Dijeli → Objavi na webu → CSV).
  // Stupci: A = obavijest, B = prikazuj od (datum), C = prikazuj do (datum).
  // Ako tablica nije dostupna, koristi se obavijesti.txt. Ako je prazno, koristi se samo obavijesti.txt.
  obavijestiTablica: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRKitnHlxAyD_ArTnayRKkcRK8XNwQVPltXMUfJmG-vk8MT6yT6ohCTThf7mjTFtYecZsrUn83Efbe/pub?output=csv",

  // Svakih koliko minuta se ponovno učitavaju obavijesti i popis slika
  osvjezavanjeMin: 5
};
