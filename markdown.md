# Äänestyssovelluksen käyttötapauskuvaukset
-
### Sama muiden usecasien kanssa kunnes admin:in "poista äänestys" myös käyty läpi.
### Kokeile luoda sivusto näiden pohjalta, ja jos teet muutoksia, yritä päivittää markdown samalla
-

## Käyttötapauksen nimi: #1 / 13
- Kirjaudu (Log in)

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor) #use form for such log in process
- Käyttäjä: Laukaisee kirjautumisprosessin syötettyään kirjautumistiedot ja painamalla "kirjaudu" painiketta
- Systeemi (Sivusto): Tarkistaa kirjautumistiedot syöttökentistä, sekä sähköpostin että salasanan, minkä mukaan se joko päästää käyttäjän
  etenemään päivitetylle sivulle tai estää etenemisen

#### Esiehto: (Precondition)
- Käyttäjällä on oltava käyttäjätili luotuna
- Käyttäjän kirjautumistiedot on oltava oikein

#### Jälkiehto: (Postcondition)
- Oikeat kirjautumistiedot: Käyttäjä pääsee käyttäjätiliinsä ja nyt pystyy katsomaan äänestyksiä ja äänestämään
- Väärät kirjautumistiedot: Käyttäjä saa virheilmoituksen eikä pääse tiliinsä ja joutuu kirjautumaan kunnes salasana on oikein.
  Näin voi myös käydä jos itse tiliä ei ole olemassa.

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle
2. Käyttäjä syöttää kirjautumistietonsa, eli käyttäjänimensä ja salasanan syöttökenttään painettuaan "kirjaudu" painiketta
3. Sivusto vahvistaa kirjautumistiedot, jos ne ovat oikein käyttäjä pääsee käyttämään omaa käyttäjätiliään
4. Käyttäjä voi nyt selailla sivustossa, katsoa äänestyksiä tarkemmin ja myös äänestää jos haluaa

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä syöttää väärät kirjautumistiedot, Käyttäjälle näytetään virheilmoitus punaisella, viitaten että tiedot ovat väärin
- Jos käyttäjä saa virheilmoituksen tai valitetaan käyttäjänimestä, se on joko kirjoitettu väärin tai
  sitä käyttäjänimeä ei ole rekisteröity mihinkään käyttäjätiliin, tai sitten käyttäjätili on jo rekisteröity olemassa olevaan käyttäjätiliin
- Jos tiedot ovat oikein ja täyttävät vaatimukset ja käyttäjällä on silti ongelmia kirjautua käyttäjätililleen, silloin vika on itse sivustossa
  tai kolmannessa osapuolessa

///

## Käyttötapauksen nimi: #2 / 13
- Rekisteröidy (Register)

#### Käyttäjät: #ok
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Käyttäjä: Laukaisee rekisteröintiprosessin syötettyään kirjautumistiedot ja painamalla "rekisteröidy" painiketta
- Systeemi (Sivusto): Laukaisee rekisteröintitietojen tarkastuksen sen jälkeen kun käyttäjä on painanut "rekisteröidy" painiketta, 
  jonka jälkeen systeemi joko luo virallisen käyttäjätilin käyttäjälle tai näyttää virheilmoituksen.

#### Esiehto: (Precondition)
- Käyttäjällä on oltava virallinen ja toimiva käyttäjänimi jota ei ole vielä rekisteröity sivustoon
- Käyttäjän käyttäjänimen pitää olla oikein kirjoitettuna

#### Jälkiehto: (Postcondition)
- Oikeat tiedot: Käyttäjä on nyt luonut käyttäjätilin sivustoon ja pystyy nyt kirjautumaan sivuston sisään
- Väärät tiedot: Käyttäjä saa virheilmoituksen eikä tiliä pysty luomaan ja joutuu yrittämään uudestaan kunnes sähköposti on kelvollinen.

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle
2. Käyttäjä syöttää käyttäjänimen ja salasanan jolla kirjautua sisään jatkossa syöttökentiin painettuaan "rekisteröidy" osiota
3. Sivusto vahvistaa käyttäjänimen kelvollisuuden, jos se on kelvollinen niin käyttäjä pääsee käyttämään omaa käyttäjätiliään kirjautumalla
   sivustoon
4. Käyttäjä voi nyt kirjautua sivustoon ja kirjauduttua katsoa äänestyksiä tarkemmin ja myös äänestää jos haluaa

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä syöttää sähköpostiosoitteen tai käyttäjänimen epäkelvolliseksi, Käyttäjälle näytetään virheilmoitus, viitaten että tiedot ovat 
  väärin tai virheellisiä
- Jos käyttäjä saa virheilmoituksen tai valitetaan joko salasanasta tai sähköpostiosoitteesta, se on joko kirjoitettu väärin tai
  se käyttäjätili on jo rekisteröity sivustoon
- Jos tiedot ovat oikein ja täyttävät vaatimukset ja käyttäjällä on silti ongelmia rekisteröidä käyttäjätiliään, silloin vika on itse sivustossa
  tai kolmannessa osapuolessa

///

####

## Käyttötapauksen nimi: #3 / 13
- Tarkista salasana (Verify password)

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Systeemi (Sivusto): Laukaisee kirjautumistietojen tarkastuksen sen jälkeen kun käyttäjä on painanut "rekisteröidy" tai "kirjaudu" painiketta.

#### Esiehto: (Precondition)
- Käyttäjällä on oltava oikea tai kelvollinen salasana
- Käyttäjän salasana pitää olla oikein kirjoitettuna

#### Jälkiehto: (Postcondition)
- Oikeat tiedot (rekisteröinti): Käyttäjä on syöttänyt salasanan oikein ja pystyy etenemään rekisteröitymisessä eteenpäin
- Oikeat tiedot (kirjautuminen): Käyttäjä on syöttänyt salasanan oikein ja pystyy etenemään kirjautumisessa eteenpäin
- Väärät tiedot: Käyttäjä saa virheilmoituksen eikä pysty etenemään joko kirjautumisessa tai rekisteröitymisessä, ja joutuu
  kirjoittamaan salasanan uudelleen kunnes se on kelvollinen tai oikein

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle
2. *Rekisteröinti* Käyttäjä syöttää salasanan jolla rekisteröityä
2. *Kirjautuminen* Käyttäjä syöttää salasanan jolla kirjautuu käyttäjätililleen
3. Sivusto vahvistaa salasanan kelvollisuuden, jos se on kelvollinen tai oikein, niin käyttäjä pääsee joko käyttämään omaa käyttäjätiliään
   tai etenemään käyttäjätilin luomisessa

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä syöttää salasanan epäkelvolliseksi, Käyttäjälle näytetään virheilmoitus, viitaten että tiedot ovat 
  väärin tai virheellisiä
- Jos käyttäjä saa virheilmoituksen tai valitetaan joko salasanasta tai käyttäjänimestä, se on joko kirjoitettu väärin tai
  se käyttäjätili on jo rekisteröity sivustoon, tai salasana ei ole sopiva käyttäjänimen kanssa.
  Muussa tapauksessa vika voi johtua joko itse sivustosta tai kolmannesta osapuolesta

///

####

## Käyttötapauksen nimi: #4 / 13
- Tarkista käyttäjänimi (Verify username)

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor) ### Atm here
- Systeemi (Sivusto): Laukaisee kirjautumistietojen tarkastuksen sen jälkeen kun käyttäjä on painanut "rekisteröidy" tai "kirjaudu" painiketta

#### Esiehto: (Precondition)
- Käyttäjällä on oltava kelvollinen käyttäjänimi jota ei ole vielä rekisteröity sivustoon
- Käyttäjänimi on kirjoitettava oikein kirjautuessa

#### Jälkiehto: (Postcondition)
- Oikeat tiedot (rekisteröinti): Käyttäjä on syöttänyt käyttäjänimen oikein ja pystyy etenemään rekisteröitymisessä eteenpäin
- Oikeat tiedot (kirjautuminen): Käyttäjä on syöttänyt käyttäjänimen oikein ja pystyy etenemään kirjautumisessa eteenpäin
- Väärät tiedot: Käyttäjä saa virheilmoituksen eikä pysty etenemään joko kirjautumisessa tai rekisteröitymisessä, ja joutuu
  kirjoittamaan käyttäjänimen uudelleen kunnes se on kelvollinen tai oikein

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle
2. *Rekisteröinti* Käyttäjä syöttää käyttäjänimen jolla rekisteröityä
2. *Kirjautuminen* Käyttäjä syöttää käyttäjänimen jolla kirjautuu käyttäjätililleen
3. Sivusto vahvistaa käyttäjänimen kelvollisuuden, jos se on kelvollinen tai oikein, niin käyttäjä pääsee joko käyttämään omaa
   käyttäjätiliään tai etenemään käyttäjätilin luomisessa

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä syöttää käyttäjänimen epäkelvolliseksi, Käyttäjälle näytetään virheilmoitus, viitaten että tiedot ovat 
  väärin tai virheellisiä
- Jos käyttäjä saa virheilmoituksen tai valitetaan joko salasanasta tai käyttäjänimestä, se on joko kirjoitettu väärin tai
  se käyttäjätili on jo rekisteröity sivustoon. Muussa tapauksessa vika voi johtua joko itse sivustosta tai kolmannesta osapuolesta

///

####

## Käyttötapauksen nimi: #5 / 13 
- Kirjautumisen virheilmoitus (Error message)

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Systeemi (Sivusto): Laukaisee ja näyttää virheilmoitus viestin sen jälkeen kun käyttäjä on painanut "rekisteröidy" tai "kirjaudu" painiketta
  mutta vain jos tiedot ovat väärin, virheellisiä, puutteellisia tai jostain muusta epäselvästä syystä

#### Esiehto: (Precondition)
- *Rekisteröinti*: Käyttäjä kirjoittaa tiedot väärin, jättää syöttökentät tyhjiksi, tai yrittää syöttää käyttäjänimen jota ei ole olemassa
- *Kirjautuminen*: Käyttäjä kirjoittaa tiedot väärin, jättää syöttökentät tyhjiksi, tai käyttää käyttäjänimeä väärän salasanan kanssa
  tai päinvastoin
- Käyttäjä on unohtanut rekisteröidä kirjautumistietonsa sivustoon (jos yrittää suoraan kirjautua ilman rekisteröintiä)   

#### Jälkiehto: (Postcondition)
- Oikeat tiedot: Jos käyttäjä on kirjoittanut tiedot oikein ja ovat kelvollisia, käyttäjä onnistuu rekisteröitymisessä tai
  kirjautumisessa, eikä hän näe virheilmoitusta
- Väärät tiedot: Jos käyttäjä kirjoittaa kirjautumistiedot väärin (väärä salasana, käyttäjänimi, liian pitkä
  tai lyhyt salasana...) hän tulee näkemään virheilmoituksen, eikä pääse rekisteröitymään tai kirjautumaan tiliinsä kunnes tiedot ovat kelvolliset
- Jos käyttäjä saa virheilmoituksen, se merkitsee että kirjautuminen käyttäjätiliin on estetty, tai rekisteröityminen on vielä kesken eikä ole
  täyttänyt vaatimuksia tilin rekisteröitymisessä

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja etenee joko kirjaudu tai rekisteröidy osioihin
2. *Rekisteröinti* Käyttäjä syöttää virheelliset tiedot tai jättää kentät tyhjiksi ja painaa *rekisteröidy* painikkeesta
2. *Kirjautuminen* Käyttäjä syöttää virheelliset tiedot tai jättää kentät tyhjiksi ja painaa *kirjaudu* painikkeesta

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä syöttää käyttäjänimen tai salasanan epäkelvolliseksi, Käyttäjälle näytetään virheilmoitus, viitaten että tiedot ovat 
  väärin tai virheellisiä, eikä käyttäjä joko pääse tiliinsä tai rekisteröimään käyttäjätiliään
- Jos käyttäjä syöttää kirjautumis- tai rekisteröitymistietonsa oikein ja ei jätä syöttökenttiä tyhjiksi, käyttäjä pääsee etenemään 
  asioissaan eteenpäin eikä virheilmoitusta näytetä tai nähdä

///

####

## Käyttötapauksen nimi: #6 / 13 ####### Itsenäinen toiminto
- Selaile äänestyksiä (Browse votes) 

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Käyttäjä: Äänestysten selailu on mahdollista kun käyttäjä saapu pääsivulle ja kirjautuu tiliinsä, sivu automaattisesti päivitetään jälkeenpäin
  ja näyttää saatavilla olevat äänestykset (Joko tyhjä tai esillä on muutama defaultti äänestys)
- Systeemi (Sivusto): Päivittää sivun niin että äänestykset näkyvät käyttäjälle, mutta ensin käyttäjän on kirjauduttava käyttäjätililleen
  onnistuneesti

#### Esiehto: (Precondition)
- Käyttäjällä oltava käyttäjätili luotuna ja sen jälkeen kirjauduttava tililleen, päästäkseen selailemaan äänestyksiä 

#### Jälkiehto: (Postcondition)
- Oikeat tiedot: Jos käyttäjä on kirjoittanut tiedot oikein ja ovat kelvollisia kirjautuessaan, käyttäjä pääsee selailemaan äänestyksiä sivustossa
- Väärät tiedot: Jos käyttäjä kirjoittaa kirjautumistiedot väärin, hän ei pääse selailemaan äänestyksiä, vasta sitten kun kirjautumistiedot
  on kirjoitettu oikein

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Käyttäjä pääsee päivitetylle sivulle ja pystyy nyt selailemaan äänestyksiä

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjän kirjautumistiedot ovat väärin tai tiliä ei ole vielä olemassa, käyttäjä ei pääse selailemaan päivitetyllä sivulla missä
  äänestykset ovat
- Jos äänestyksiä ei näy sivustossa, tai niiden vaihtoehtoja voi valita mutta itse äänestykset ovat "kateissa", vika voi olla
  käyttäjän koneessa, selaimessa tai itse sivustossa (tai kolmannessa osapuolessa)

///

####

## Käyttötapauksen nimi: #7 / 13
- Äänestä (Vote) 

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)

#### Laukaisija: (Executor)
- Käyttäjä: Äänestäminen on mahdollista kun käyttäjä on kirjautunut tiliinsä onnistuneesti, ja valitsee esillä olevista äänestyksistä haluamansa,
  ja painaa "äänestä" painiketta
- Systeemi (Sivusto): Äänestäminen tapahtuu ja lasketaan kun käyttäjä on valinnut haluamansa äänestyksen, vaihtoehdon ja painanut
  "äänestä" painiketta. Käyttäjän ääni tallennetaan sivuston tietoihin pysyvästi ja tiedot äänestyksistä päivitetään.

#### Esiehto: (Precondition)
- Käyttäjällä oltava käyttäjätili luotuna ja sen jälkeen kirjauduttava tililleen. Sitten käyttäjän on valittava äänestys ja vaihtoehto

#### Jälkiehto: (Postcondition)
- *Äänestää*: Kun käyttäjä on valinnut vaihtoehtonsa äänestyksessä ja painanut "äänestä" painiketta, hänen äänensä lasketaan, eikä hän voi
  enää äänestää uudelleen samassa äänestyksessä taikka perua valintaansa
- *Ei äänestä*: Kun käyttäjä on valinnut vaihtoehtonsa mutta ei painakkaan "äänestä" painiketta, ääntä ei vielä virallisesti lasketa, käyttäjän on
  painettava "äänestä" painiketta jos hän haluaa hänen äänestyksensä lasketuksi

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Käyttäjä pääsee päivitetylle sivulle ja näkee saatavilla olevat äänestykset
3. Käyttäjä valitsee haluamansa äänestyksen, vaihtoehdon mitä äänestää, ja painaa "äänestä" painiketta
4. Käyttäjä on nyt äänestänyt äänestyksessä, hänen äänensä lasketaan, käytetään ja itse äänestys päivitetään

#### Poikkeuksellinen toiminta: (Alternate flow)
- Jos käyttäjä on jo äänestänyt äänestystä kerran aiemmin painettuaan "äänestä" painiketta, hän ei voi enää äänestää samaa äänestystä kahdesti
  taikka peruuttaa valintaansa, ja kyseinen äänestys näyttää äänestystilanteen automaattisesti ja vaihtoehtoja ei voi enää valita
- Jos käyttäjä ei ole vielä äänestänyt äänestystä "äänestä" painikkeella, hän voi vielä muuttaa vaihtoehtoaan ja äänestää äänestyksessä
- Jos käyttäjä on äänestänyt mutta hänen ääntään ei mukaanlueta äänestystilanteeseen, silloin sivussa on jotain vialla. Jos jos sivussa
  ei ole mitään vialla, vika johtuu silloin muusta syystä

///

####

## Käyttötapauksen nimi: #8 / 13
- Katso äänestystilanne (Poll Details) 

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Tavallinen Käyttäjä: Äänestystilanteen katsominen on mahdollista kun käyttäjä on antanut äänensä ja painaa "äänestä" painiketta. 
  Käyttäjän on päivitettävä sivu jotta äänestystilanteen painikkeen saa esille.
- Ylläpitäjä: Ylläpitäjä voi katsoa äänestystilanteen suoraan "Poll details" kohdasta mikä on olemassa jokaisessa äänestyksessä
- Systeemi (Sivusto): Tavallisen käyttäjän kanssa käyttäjän pitää äänestää äänestystä, jos haluaa äänestystilanteen tulevan esille, kun käyttäjä
  on näin tehnyt, systeemi sitten päivittää tiedot ja näyttää sen hetkisen tilaston käyttäjälle (päivitettyään sivun). 
  Ylläpitäjän kanssa ylläpitäjän on vain painettava "Poll details" painiketta joka sijaitsee äänestyksen vaihtoehtojen alapuolella.
  Tämän jälkeen systeemi näyttää äänestystilanteen suoraan eikä vaadi äänestämistä

#### Esiehto: (Precondition)
- Käyttäjällä oltava käyttäjätili luotuna ja sen jälkeen kirjauduttava tililleen. Sitten käyttäjän on valittava äänestys ja vaihtoehto.
- Ylläpitäjällä oltava käyttäjätili luotuna, sen jälkeen kirjauduttava

#### Jälkiehto: (Postcondition)
- Käyttäjä onnistuneesti pääsee katsomaan äänestystilannetta
- Systeemi näyttää nykyisen äänestystilanteen käyttäjälle

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Käyttäjä pääsee päivitettylle sivulle ja näkee saatavilla olevat äänestykset
3. Käyttäjä täyttää vaatimukset käyttäjä tyypistä liittyen ja etenee äänestystilanteeseen
4. Käyttäjä pystyy nyt näkemään äänestystilanteen 

#### Poikkeuksellinen toiminta: (Alternate flow)
- Äänestystilanteen graafiset bugit ja virheet: Merkitsee jotain vikaa itse sivustossa tai koodissa
- Virheellinen tieto tai oudot numerot: Merkitsee koodissa olevan jotain vikaa, vika selaimessa, käyttäjän koneessa tai
  kolmannessa osapuolessa

///

####

## Käyttötapauksen nimi: #9 / 13
- Valitse vaihtoehto (Choose an option) 

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)

#### Laukaisija: (Executor) #
- Tavallinen Käyttäjä: Äänestyksessä vaihtoehdon valitseminen on mahdollista kun käyttäjä on kirjautunut ja valinnut äänestyksen johon haluaa
  ottaa osaa
- Systeemi (Sivusto): Kun käyttäjä on valinnut äänestyksen ja haluamansa vaihtoehdon, sivusto kiinittää huomion valintaan, mutta jotta
  se virallisesti lasketaan, on käyttäjän vahvistettava valintansa "äänestä" painikkeella

#### Esiehto: (Precondition)
- Käyttäjällä oltava käyttäjätili luotuna ja sen jälkeen kirjauduttava tililleen. Sitten käyttäjän on valittava äänestys

#### Jälkiehto: (Postcondition)
- Käyttäjä onnistuneesti pääsee tekemään valintansa äänestyksessä
- Systeemi näyttää saatavilla olevat äänestyksen vaihtoehdot käyttäjälle

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Käyttäjä pääsee päivitettylle sivulle ja näkee saatavilla olevat äänestykset
3. Käyttäjä painaa äänestystä joka kiinnostaa ja hänelle näytetään vaihtoehdot mistä valita hänelle mieluisin vaihtoehto
4. Vaihtoehtoja joista valita voi vaihdella kahdesta äänestä viiteen, näistä käyttäjä voi valita vain yhden

#### Poikkeuksellinen toiminta: (Alternate flow)
- Vaihtoehto valintoja ei näy: Käyttäjä on joko äänestänyt valitsemaansa äänestystä jo, tai itse sivustossa tai selaimessa on häikkää
- Vaihtoehtoa ei pysty valitsemaan: Sivustossa, koodissa tai muussa on jotain vialla
- Vaihtoehdot ovat tyhjiä tai visuaalisesti oudot: Voi johtua vanhentuneesta selaimesta, käytetystä laitteesta (käyttöjärjestelmästä) tai sitten
  vika sivustossa 

///

####

## Käyttötapauksen nimi: #10 / 12 ################ Poista "äänestit jo" usecase diagrammista, ja laita se "äänestä" alternate flowhin
- Tee Äänestys (Create poll)

#### Käyttäjät: 
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor) 
- Ylläpitäjä: Äänestyksen luominen on mahdollista kun ylläpitäjä on kirjautunut, se ilmenee painikkeena mikä näkyy pelkästään ylläpitäjillä
- Systeemi (Sivusto): Kun ylläpitäjä painaa "tee Äänestys" painiketta, systeemi päästää ylläpitäjän sivuun missä uusi äänestys voidaan luoda
  jossa ylläpitäjä voi nimetä äänestyksen, vaihtoehdot ja valita vaihtoehtojen määrän.

#### Esiehto: (Precondition)
- Käyttäjän on oltava ylläpitäjä, tili on oltava olemassa ja kirjautuminen käyttäjätilille pitää onnistua

#### Jälkiehto: (Postcondition)
- Ylläpitäjä pääsee täyttämään "Tee äänestys" sivussa vaadittavat tiedot ja pystyy luomaan äänestyksen virallisesti sivustoon
- Systeemi ottaa saamansa tiedot ja luo sen mukaan uuden äänestyksen sivun julkisuuteen tavallisten ja ylläpitäjien katsottavaksi

#### Käyttötapauksen kulku: (Basic flow)
1. Ylläpitäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Ylläpitäjä pääsee päivitettylle sivulle ja näkee "Tee äänestys" painikkeen
3. Ylläpitäjä painaa "Tee äänestys" painiketta, täyttää vaaditut tiedot ja painaa "luo" painiketta

#### Poikkeuksellinen toiminta: (Alternate flow)
- "Tee äänestys" painike ei reagoi: Tämä tarkoittaa että sivun koodissa, toimivuudessa on jotain vialla, tai ylläpitäjä käyttää virheellistä tai
  vanhentunutta selainta mikä ei ymmärrä koodia jolla sivusto toimii
- Luotua äänestystä ei näy äänestyssivustossa: Tarkoittaa että sivuston koodissa on jotain vialla, sivustossa on liikaa olemassa olevia
  äänestyksiä, tai ongelma johtuu jostain muusta syystä mistä itse sivusto ei ole vastuussa

///

####

## Käyttötapauksen nimi: #11 / 12 ####Vielä tämä ja "kirjaudu ulos". Sen jälkeen yleiskatsaus alusta loppuun, ja sivun koodausta!
- Poista äänestys (Delete poll) 

#### Käyttäjät: 
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor) 
- Ylläpitäjä: Äänestyksen poistaminen on mahdollista kun ylläpitäjä on kirjautunut, se ilmenee painikkeena mikä näkyy pelkästään ylläpitäjillä
- Systeemi (Sivusto): Kun ylläpitäjä painaa "Poista äänestys" painiketta, systeemi päästää ylläpitäjän näkymään missä ylläpitäjä voi
  poistaa haluamansa äänestyksen

#### Esiehto: (Precondition)
- Käyttäjän on oltava ylläpitäjä, tili on oltava olemassa ja kirjautuminen käyttäjätilille pitää onnistua
- Käyttäjällä pitää myös olla aiemmin luotu äänestys, jotta "Poista äänestys" ominaisuutta voidaan oikeasti käyttää

#### Jälkiehto: (Postcondition)
- Ylläpitäjä pääsee poistamaan aiemmin luotujaan äänestyksiä tai äänestystä
- Systeemi toimii ylläpitäjän toimivuuden mukaan ja poistaa (tyhjentää) poistettujen äänestyksien tiedot ja olemassa olon sivustosta

#### Käyttötapauksen kulku: (Basic flow)
1. Ylläpitäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Ylläpitäjä pääsee päivitettylle sivulle ja näkee "Poista äänestys" painikkeen
3. Ylläpitäjä painaa "Poista äänestys" painiketta, valitsee äänestyksen jonka haluaa poistaa ja painaa "poista" (x merkki) painiketta

#### Poikkeuksellinen toiminta: (Alternate flow)
- "Poista äänestys" painike ei reagoi: Tämä tarkoittaa että sivun koodissa, toimivuudessa on jotain vialla, tai ylläpitäjä käyttää virheellistä tai
  vanhentunutta selainta mikä ei ymmärrä koodia jolla sivusto toimii
- Poistettu äänestys näkyy vielä änestyssivustossa: Tarkoittaa että sivuston koodissa on jotain vialla, tai ongelma johtuu jostain muusta syystä
  mistä itse sivusto ei ole vastuussa

///

####

## Käyttötapauksen nimi: #12 / 12
- Kirjaudu ulos (Log off) 

#### Käyttäjät: 
- Tavallinen käyttäjä (General user)
- Ylläpitäjä (Admin)

#### Laukaisija: (Executor)
- Käyttäjät: Kirjauduttua käytttäjätiliin, jos käyttäjä ei halua enää olla päivitetyllä sivulla ja haluaa palata sivulle missä kirjautua,
  hänen tulee painaa "kirjaudu ulos" linkkiä (painiketta) sivuston ylänurkasta
- Systeemi (Sivusto): Kun "kirjaudu ulos" linkkiä painetaan, sivusto poistaa käyttäjän pääsyn päivitetylle sivulle ja kykyyn esim
  äänestykseen, niiden selailuun tai luontiin, ja siirtää käyttäjän sivuston etusivulle josta käyttäjä voi kirjautua sisään uudelleen

#### Esiehto: (Precondition)
- Tili on oltava olemassa, käyttäjän on oltava kirjautuneena ja kirjautuminen käyttäjätilille pitää onnistua

#### Jälkiehto: (Postcondition)
- Käyttäjä pystyy kirjautumaan ulos sivustosta ja pääsee takaisin etusivulle missä voi joko kirjautua tai rekisteröityä
- Systeemi poistaa käyttäjän kyvyn esim nähdä äänet ja äänestää, kirjaa hänet ulos tilistään ja siirtää hänet sivuston etusivulle 

#### Käyttötapauksen kulku: (Basic flow)
1. Käyttäjä saapuu äänestyssovelluksen etusivulle ja kirjautuu olemassa olevaan käyttäjätiliinsä oikeilla tiedoilla
2. Käyttäjä pääsee päivitettylle sivulle ja näkee "Kirjaudu ulos" linkin
3. Ylläpitäjä painaa "Kirjaudu ulos" linkkiä

#### Poikkeuksellinen toiminta: (Alternate flow)
- "Kirjaudu ulos" linkki ei reagoi tai toimi: Tämä tarkoittaa että sivun koodissa, toimivuudessa on jotain vialla, tai ylläpitäjä käyttää
  virheellistä tai vanhentunutta selainta mikä ei ymmärrä koodia jolla sivusto toimii
- Käyttäjää ei viedä takaisin äänestyssivuston etusivulle: Tarkoittaa että sivuston koodissa on jotain vialla, tai ongelma johtuu jostain muusta
  syystä mistä itse sivusto ei ole vastuussa 
