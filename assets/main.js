let sanat = "Mahtab 17v: vihreä maa, Mahtab 17v: turvallinen, Johanna 18v: Torilla tavataan -meemit/vitsit, Sari 44v: Sauna, Pentti 70v: Selluteollisuus, Arezoo 17v: koulutus, Tarja 57v: Luonnollisuus, Toini 82v: Luonto, Kimmo 50v: Turvallinen, Erja 55v: Räiskyvät vuodenajat, Marko 47v: kotimaa, Virpi 46v: tasa-arvoinen, Anu 48v: vapaa, Jenna 18v: järvienmaa, Marlene 16v: Vapaus, Mimosa 16v: Hyvä koulutus, Jasmin 16v: Fazerin sininen, Risto 58v: Suo kuokka ja Jussi, Toini 82v: Hyvin toimiva terveydenhuolto, Mohsen 16v: kylmä, Tiia 18v: saunalahti huoleton 4G, Jenna 18v: 12kk talvi, Laura 30v: Tom of Finland, Johannes 28v: Tarmoa ja potentiaalia, Jenna 18v: torilla-meemit, Eija 28v: liian kylmä talvi, Eija 28v: vapaus valita, Pirjo 69v: kaunis, Sanna 24v: luonto, Sanna 24v: turvallinen, Mahdi 17v: rauhallinen, Hanna 31v: kirjava, Pekka 73v: puhdas, Pekka 73v: rehellinen, Hannu 51v: perhe, Mari 47v: sananvapaus, Mari 47v: tasa-arvo, Pekka 60v: sauna, Elina 57v: juhannus, Sirkku 52v: luonto, Veli-Pekka 55v: ruisleipä, Maija 76v: perhe, Paavo 80v: isänmaa, Matti 50v: talvi, Jaakko 31v: lumi, Kyllikki 48v: järvet, Timo 39v: sauna, Merja 39v: kahvi, Seija 41v: vihreäluonto, Tarja 30: sauliniinistö, Seija 41v: tasa-arvo, Sanni 21v: koulutus, Riikka 11v: kaunis, Riikka 11v: turvallinen, Niilo 77v: kohtaloni, Rasul 18v: turvallinen, Tuomo 48v: koti, Elli 88v: rakas kotimaa, Ali 19v: turvallinen, Reza: rauhalliset ihmiset, Liia 17v: kaunis, Liia 17v: rauhallinen, Linda 17v: mahdollisuuksia, Linda 17v: pysyvä, Seija 40v: linnunlaulua, Sonja 18v: kylmä, Sonja 18v: hyvinvoiva, Fia 18v: kaunis, Sofia 18v: seesteinen, Sara 18v: sopiva, Sara 18v: suloinen, Laura-Kaisa 19v: yhteisöllinen, Laura-Kaisa 19v: kotoisa, Kari 54v: kaunis, Kari 54v: viihtyisä, Arja 49v: onnellinen, Arja 49v: vaihteleva, Eljas 13v: hyvä, Eljas 13v: hassu, Jaakko 18v: maisemia, Nuutti 13v: turvallisuutta, Jussi 49v: Lanttukukko, Jussi 49v: Kylmä, Jussi 49v: karjalanpiirakka, Niilo 7v: Mökki, Tyyne 9v: Hyviä karkkeja, Elsa 11v: sauna, Eeva 49v: Pimeyttä, Marja 46v: Luonto, Marja 46v: Suomalainen sisu, Hannu 49: Sauna, Hannu 49: Koivut, Joni 5v: Talvileikit, Piia 40v: Vapaus, Jere 22v: Kotimaa perkele, Anni 81v: Itsenäinen, Esa 63v: kuvauksellinen, Mehdi 17v: ihana kesä, Amir 17v: turvallinen, Vesa 32v: Sisukas, Timi 3v: Jäätelöä, Mehdi Amini: turvallinen, Tuula 60v: metsäkävelyt, Tuula 60v: neljä vuodenaikaa, Heli 39v: tärkeä, Timo 41v: sateinen, Tuuli 16v: turva, Hanna 13v: järviä ja metsiä, Sara 16v: vapaa, Elina 23v: karjalanpiirakka, Kirsti 52v: koskenkorva, Markku 47v: tähtitaivas, Niko 16v: perunamuussi, Heli 49v: kotoisa, Viivi 17v: puhdas, Leevi 15v: kylmä, Harri 49v: OK, Pekka 38v: itsenäinen, Sirpa 44v: koti, Sirpa 44v: rauha, Sirpa 44v: rakkaus, Pasi 48v: itsenäinen, Pasi 48 v: rakas, Mikael 7v: rikas, Mikael 7v: mukava, Satu 43v: puhdas luonto, Sirpa 72v: tärkeä, Petra 21v: turvallinen, Jani 24v: töitä ja pimeyttä, Outi 49v: karjalanpiirakka, Antti 17v: makaronilaatikko, Teemu 20v: turvallisuus, Jaser 17v: rauhallinen, Sofia 21v: jouluperinteet, Rauno 54v: vesistöt, Laila 83v: urheilu, Anni 82v: rauha, Antti 81v: koivumetsä, Erkki 75v: pakkanen, Maria 71v: puolukka, Marko 49v: saunakalja, Marko 49v: järvimaisema, Jani 15v: joulupukki, Riitta 45v: mökki, Anja 72v: ruisleipä, Sayed 17v: turvallinen, Vesa 52v: koti, Nuutti 11v: perhe, Nuutti 11v: puusauna, Anneli 72v: turvallinen, Viona 18v: mahdollisuus, Viona 18v: ruisleipä, Laura 15v: Sipilä, Jalil 18v: ihana maa, Laura 15v: tasa-arvoinen, Mostafa 17v: kylmiä juttuja, Laura 15v: oikeus, Matti 29v: luonto, Bashir 16v: rauhallinen";

sanat = sanat.split(",");

let x = 4500;
let i = 0;
let tagi = document.getElementById('tagi');
let tausta = document.getElementById('tagi-tausta');

let looppi = setInterval(function() {
	if (i > sanat.length - 1) {
		i = 0;
    }
    
	tagi.innerHTML = "<span class='tagi'> #" + sanat[i].split(":")[1].toUpperCase() + "</span><br><span class='by'>" + sanat[i].split(":")[0].toUpperCase() + "</span>";
    tausta.innerHTML = sanat[i].split(":")[1].toUpperCase();
    
	setTimeout(function() {
		tagi.style.opacity = "1.0";
		tausta.style.opacity = "0.1";
		tausta.style.filter = "blur(0px)";
		tausta.style.fontSize = "55em";
	}, 10);
	
	setTimeout(function() {
		tagi.style.opacity = "0.0";
		tausta.style.opacity = "0.0";
		tausta.style.filter = "blur(20px)";
		tausta.style.fontSize = "50em";
    }, x - 1000);
    
	i++;
}, x);