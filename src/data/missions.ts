export type MissionStatus = "CLOSED" | "ACTIVE" | "COMPROMISED";

export interface Mission {
  slug: string;
  episode: string;
  codename: string;
  date: string;
  status: MissionStatus;
  location: string;
  agents: string;
  summary: string;
}

export const getMission = (slug: string) =>
  missions.find((m) => m.slug === slug);


export const campaign = {
  title: "Delta Green - Cell H",
  subtitle: "After-Action Compilation — Cell H",
  fileRef: "MJ-884/OP-FA",
  formRef: "FORM 104-A (REV 1993)",
  dateExtracted: new Date().toISOString().split("T")[0],
  leadAgent: "Henderson",
  area: "UnitedA",
  casualtyRate: "0.0%",
  threat: "Extranormal",
  intro: [
    "This document serves as the final operational log for Cell H during the period starting 2026-02-27. The primary directive involved tracking the distribution of anomalous paranormal contaminants originating from the [REDACTED] facility in [REDACTED].",
  ],
};

export const missions: Mission[] = [
  {
    slug: "dusty-chorus",
    codename: "OP: Clyde Bauman",
    date: "2026-02-27",
    status: "CLOSED",
    location: "Chicago, Illinois",
    agents: "HERC,JAKE,SARA,YOKO",
    episode: "Session 01",
    summary: `<h2>Wezwanie do Akcji</h2>
<p>Jesienią 2020 roku cała czwórka przyszłych agentów otrzymuje niemal identyczne telefony. Głos nieznoszący sprzeciwu informuje ich o przydzieleniu do tajnej operacji. Ich przełożeni zapewniają im wolne, a bilety na samolot czekają na lotnisku – celem jest Chicago. Osoby związane z agencjami federalnymi (Sara, Harry i Yoko) dostają informację, że zostali przydzieleni do specjalnej jednostki antyterrorystycznej i że Delta Green chce się z nimi skontaktować. Jake, jako cywil, dostaje bardziej "przyjacielski" telefon, sugerujący, że "gdzieś tam jest pieniądz", choć bilet musi kupić sam, a koszty zostaną pokryte na miejscu. Mają stawić się następnego dnia o 12:00 w głównej siedzibie Straży Pożarnej w Chicago.</p>
<h2>Briefing w Chicago</h2>
<p>W sali konferencyjnej czeka na nich smutny, łysiejący, niski mężczyzna po pięćdziesiątce w garniturze – Agent Henderson. Od razu instruuje, aby nie używali prawdziwych imion i nazwisk dla bezpieczeństwa operacji. Agent DEA poci się i nerwowo rozgląda, ale w końcu wymyśla imię "Harry". Wojskowa (teraz już w cywilnym ubraniu) pozostaje niewzruszona, co widać po jej postawie i przedstawia się jako "Sara". Naukowczyni również nie jest zaskoczona i szybko wybiera imię "Yoko Morikawa", podczas gdy archeolog przedstawia się jako "Jake". Henderson wyjaśnia, że Delta Green to organizacja walcząca z nadnaturalnymi zjawiskami. Ich misją jest odwiedzenie mieszkania zmarłego agenta Clyde'a Baumana (który zmarł na atak serca) i skonfiskowanie wszelkich dokumentów związanych z Delta Green. Mają 48 godzin, zanim pojawi się rodzina Baumana. Otrzymują adres mieszkania (ulica Brzozowa 16), dane Baumana i kluczyk. Adres, pod który mają dostarczyć dokumenty, wydaje się znajomy Sarze, gdyż to baza wojskowa w pobliżu.</p>
<h2>W Mieszkaniu Clyde'a Baumana</h2>
<p>Harry parkuje Forda pod kamienicą, wyjmuje broń i zakłada kamizelkę kuloodporną. Gdy zbliżają się do drzwi, te otwierają się same, a za nimi stoi około sześćdziesięcioletnia babinka z małym yorkiem. Babinka pyta, co tu robią. Yoko, używając swojej legitymacji FDA, próbuje przekonać ją, że przyszli z powodu naruszenia zasad sanitarnych, co nie działa. Jake, grożąc konsekwencjami za utrudnianie pracy agentom federalnym, wymusza informację o mieszkaniu 5B na górze. Babinka, przestraszona, wychodzi z budynku. W mieszkaniu unosi się silny zapach tytoniu, a sufit jest żółtawy. Na wieszaku przy drzwiach wiszą trzy zestawy kluczy: jeden do samochodu, jeden do mieszkania (sprawdzają, że otwiera drzwi) i jeden niezidentyfikowany. Yoko bierze wszystkie klucze do woreczków strunowych. Postacie rozpoczynają przeszukanie. Sara metodycznie demoluje sypialnię, rozcinając materac i wyrzucając ubrania. Harry wyrzuca rzeczy z kuchennych szafek. Yoko, mając 120 punktów w "porządkowaniu", zajmuje się przeglądaniem dokumentów z szafki na akta, razem z Jake'em. Znajdują rachunki za wodę dotyczące domku na wsi. Sara natomiast sprawdza profile dzieci Baumana i ich rodzin na portalach społecznościowych. Po czterech godzinach przeglądania dokumentów (Jake mówi, że go mózg boli, Sara jest niewzruszona, a Harry włącza telewizor i ogląda sport), okazuje się, że nic z interesujących dokumentów nie ma. Jedynym konkretnym odkryciem jest adres domku na wsi i fakt, że jeden z kluczy prawdopodobnie do niego pasuje. Yoko ustala, że do domku na wsi są trzy godziny drogi.</p>
<h2>Domek na Wsi</h2>
<p>Ekipa udaje się do domku na wsi. Po zjechaniu z głównej drogi na szutrową, dojeżdżają do drewnianego parterowego domku. Harry obchodzi domek, a reszta wchodzi do środka. W sypialni, pod łóżkiem, odnajdują metalową wojskową skrzynię zamkniętą na kłódkę. Jeden z kluczy do niej pasuje. W skrzyni znajduje się koperta z kartką papieru, szpule z taśmą (dźwiękową, z lat 70.) oraz ładnie złożony, zakrwawiony garnitur. Krew na garniturze jest stara. Na kartce jest napisane: "Nie otwieraj szamba. Spal wszystko, co znajdziesz. To jedyny sposób". Harry wychodzi na zewnątrz i szuka szopy, gdzie znajduje narzędzia i pełne zbiorniki paliwa. Odkrywa również wejście do szamba – jest ono otwarte, ale zabezpieczone łańcuchami i kłódką. Harry postanawia znaleźć łom.</p>
<h2>Spotkanie z Marlin Bauman</h2>
<p>Podczas gdy Harry próbuje otworzyć szambo, pozostali zastanawiają się, co robić z zawartością skrzyni. Harry pyta, co jest w środku szamba. Yoko chce to spalić, powołując się na kartkę, ale Sara przypomina, że ich misją jest dostarczenie znalezionych rzeczy pod wskazany adres, a nie ich zniszczenie. Harry, używając łomu, zrywa łańcuchy od szamba. Właz zostaje podniesiony. W środku panuje ciemność i słychać, że coś się rusza w wodzie. Nie ma drabinki. Sara pyta: "Kto tam jest?". Nagle z głębi szamba odpowiada głos: "Halo, to ja, Marlin Bauman". Yoko przypomina, że Marlin Bauman, żona zmarłego, nie żyje od 18 lat. Harry prosi istotę, aby podeszła do światła. Kiedy stwór wchodzi w krąg światła, wszyscy muszą rzucić na Sanity. W krąg światła wchodzi istota z szaro-niebieską skórą, prawie wszystkimi wyrwanymi włosami, a dół jej ciała, głównie stopy, ma odchodzącą skórę. Jest ubrana w przemoczoną szmatę, która kiedyś była sukienką. Jake rozmawia z nią, starając się dowiedzieć, co się stało. Marlin mówi, że jej mąż był potworem, szukał sekretów, a potem rzucił zaklęcie, aby ją ze sobą związać i wsadził do szamba. Sara zauważa, że pomimo potwornego wyglądu, Marlin ma takie same cechy twarzy, jak na zdjęciu ślubnym. Jej wygląd jest straszny, a skóra jest zniszczona i niebieska. Kiedy Jake jest blisko włazu, a Sara ma broń w pogotowiu, Marlin nagle, z nieludzką siłą, wyskakuje ze szamba, uderzając Sarę i odrzucając ją na trzy metry. Yoko oddaje serię strzałów w Marlin, raniąc ją w nogę, co powoduje jej upadek, ale istota nie krwawi. Harry biegnie, by ją obezwładnić, a następnie łapie ją w uścisk. Marlin, mimo że nie oddycha, jest silna i próbuje się wyrwać. Harry, sugeruje, że mogli nawdychać się oparów z szamba. Proponuje, aby przetransportować Marlin do domku, zabezpieczyć ją i dać sobie chwilę na uspokojenie. Sara zgadza się.</p>
<h2>Transport do Bazy</h2>
<p>Zaciągają Marlin do domku. Jake przywiązuje ją do słupa. Yoko w tym czasie bada szambo, pobierając próbki wody i kawałków skóry. Okazuje się, że szambo jest niepodłączone do domu i prawdopodobnie służyło tylko do jej uwięzienia. Ślady pazurów na ścianach sugerują długotrwałą walkę o wydostanie się. Zapadła decyzja, że Marlin zostanie przetransportowana do bazy wojskowej, zgodnie z misją dostarczenia wszystkiego, co znajdą. Mimo obaw, że zatrzyma ich drogówka, jadą z zakneblowaną i skutą Marlin. Yoko prowadzi, ignorując papierową mapę na rzecz Google Maps. W końcu dojeżdżają do bazy. Strażnicy na bramkach automatycznie otwierają bramę, kierując ich do magazynu. Tam czeka Agent Henderson i trzech żołnierzy. Przekazują Marlin dwóm żołnierzom, a trzeci zabiera skrzynkę. Henderson mówi: "Dobra robota" i oferuje im hotel, ale nie ma debriefingu. Na pytania o Marlin i jej stan, Henderson odpowiada, że "to już nie jest pani zmartwienie" i mówi, że mogą wracać do swoich żyć. Misja kończy się powrotem do hotelu, a następnie do swoich domów, bez wyjaśnień i w poczuciu tajemnicy.</p>`,
  },
  {
    slug: "silent-whisper",
    codename: "OP: Tiger Island",
    date: "2026-04-17",
    status: "COMPROMISED",
    location: "Area-19, Myanmar",
    agents: "JENNY, MONA, PETE, RICK, TOBI",
    episode: "Session 02",
    summary: `<h2>Ostatnia Misja Zespołu "Tiger"</h2>
<p>Agenci Komórki H otrzymali wezwanie do Chicago. Agent Henderson poinformował ich, że ich misja będzie "sucha" (bez broni), co wywołało rozczarowanie u niektórych. Ich celem było przesłuchanie innego zespołu Delta Green, komórki "Tiger", która wróciła z nieudanej misji w Birmie (Mjanmarze). Jeden z członków "Tiger" zginął, a pozostali mieli być przesłuchani. Agent Henderson dostarczył im ogólne informacje o misji, podkreślając, że mają ustalić, co poszło nie tak.</p>
<h2>Kontekst Misji Zespołu "Tiger"</h2>
<p>W maju miał miejsce incydent w Birmie, gdzie lokalny oddział piechoty został zaatakowany przez "coś nienaturalnego" na terytorium plemienia Czałczuła. Dowódczyni oddziału (Mona) uznała to za powód do wysłania zespołu Delta Green. Dwóch żołnierzy przeżyło pierwotny atak i zeznały, że zostały zaatakowane przez coś, co "gwizdało i łaskotało". Zespół "Tiger", w składzie Rick, Mona, Tobi, Pete i Jenny, został wysłany do lokacji 19 (wioski w Birmie). Podczas tej misji doszło do tragedii: jeden z agentów "Tiger" – Pete – zginął w potyczce z lokalną ludnością, a następnie obszar został zbombardowany przez birmańskie siły powietrzne. Mona została uznana za "mentalnie niezdolną do dalszych operacji".</p>
<h2>Symulacja Misji Zespołu "Tiger"</h2>
<p>Sesja przeniosła graczy do retrospekcji, wcielając ich w członków zespołu "Tiger" i odgrywając wydarzenia prowadzące do tragedii.</p>
<h2>Charakterystyka Członków Zespołu "Tiger"</h2>
<ul>
<li><strong>Tobi:</strong> "Gadacz", organizator, zdobywca kontrabandy. Postrzegany jako "głośny debil", ale bardzo spostrzegawczy. Pochodził z Teksasu, miał cyniczne podejście do świata i silne uprzedzenia. Pełnił rolę Export Enforcement Officer.</li>
<li><strong>Pete:</strong> Młody, typowy Amerykanin, wysoki, z kwadratową szczęką, jasnymi włosami, w dobrej kondycji fizycznej. Był Custom Service Officer i zazwyczaj trzymał się na uboczu.</li>
<li><strong>Rick:</strong> Mieszanego pochodzenia (matka Francuzka, ojciec Taj), młody, modnie ubrany. Jego rola to Foreign Service Officer of Agriculture, co często sprowadzało się do inspekcji pól ryżowych.</li>
<li><strong>Mona:</strong> Najstarsza z grupy (przed 50-tką), Afroamerykanka, była umięśniona, ale teraz wyglądała na zmęczoną. Profesor lingwistyki z dobrą znajomością języka birmańskiego, była "kierowniczką" zespołu.</li>
<li><strong>Jenny:</strong> Blondynka, ekspertka od języków (lingwistka), z przeszłością wojskową. Jej wcześniejsza rana bez widocznych ran wlotowych i wylotowych była niepokojąca. Tobi określał ją jako "kaczkę na strzelnicy" ze względu na brak doświadczenia w walce.</li>
</ul>
<h2>Przybycie do Birmy (8 Maja)</h2>
<p>Zespół wylądował hydroplanem i dotarł Jeepem do wioski w lokacji 19 nocą 8 maja. Pod przykrywką organizacji "Rainbow of Hope International", mającej na celu poprawę jakości wody, agenci rozdzielili się:</p>
<ul>
<li>Rick zajął się budowaniem wiarygodności, "badając" wodę i rozmawiając z lokalnymi mieszkańcami. Znalazł kontakt w osobie King Maung (barmanka) i U Chlanga (lokalnego pośrednika). Od U Chlanga rick otrzymał naszyjnik z ludzkich zębów i dowiedział się o "duchach" Czałczuła.</li>
<li>Mona przeprowadziła rekonesans obozu wojskowego, zauważając rozluźnienie dyscypliny. Następnie spotkała się z lokalnym porucznikiem Bogioke, który odmówił jej dostępu do miejsca ataku sprzed dwóch dni, tłumacząc to obecnością "separatystów".</li>
<li>Jenny zauważyła na ozdobnych drzwiach wpływy pisma Aklo. Podążając za ciekawością, weszła do domu, gdzie spotkała sympatyka Czałczuła, który mówił szorstkim dialektem Aklo. Dowiedziała się, że "coś" ma się wydarzyć na wzgórzu (lokacja 20) "wkrótce".</li>
<li>Tobi wraz z Jenny udali się do lokalnego baru, gdzie Tobi głośno wyrażał swoje opinie na temat kanibali, jednocześnie obserwując otoczenie.</li>
</ul>
<h2>Nocny Atak i Śmierć Pete'a (9 Maja)</h2>
<p>Późnym wieczorem 9 maja, kobieta o imieniu Nan Gwin podbiegła do zespołu, krzycząc o Czałczuła niosących "siedmiokrotnie zamknięte pudło diabła" i wzywając do ich powstrzymania. Zespół ruszył za nią na wzgórze. U stóp wzgórza zauważyli ośmiu mężczyzn, dwóch z karabinami i sześciu niosących metalowy sześcian. Tobi i Pit ruszyli do przodu, ale Pit potknął się i upadł, alarmując przeciwników. W odpowiedzi strażnicy sięgnęli po broń. Tobi otworzył ogień z broni automatycznej, raniąc jednego strażnika i powodując upadek dwóch tragarzy, co doprowadziło do uderzenia pudełka o ziemię. Z pudełka zaczął wydobywać się czerwony dym. Mona, widząc to, natychmiast zarządziła odwrót. W trakcie ucieczki, Pete został pochłonięty przez czerwoną mgłę, która zakryła go całkowicie, a jego krzyk ustami przeszedł w inny dźwięk, zanim zniknął.</p>
<p>Po powrocie do kryjówki zespół ogarnęła dezorientacja i konflikt. Mona była przerażona i chciała ukryć fakt śmierci Pete'a, by nie zagrozić misji. Tobi z kolei wściekał się na niekompetencję i domagał się zbombardowania wzgórza. W tym momencie ponownie pojawiła się Nan Gwin, która doprowadziła ich na wzgórze. Rick podejrzewał, że jest agentką Czałczuła. Jenny, badając ją, potwierdziła, że Nan Gwin mówi "bluźnierczym" językiem Aklo i wierzy, że Czałczuła "obudzą Śpiewającego w Skórze". Zespół postanowił ponownie udać się na wzgórze, prowadzeni przez Nan Gwin.</p>
<h2>Ostateczna Konfrontacja na Wzgórzu (Lokacja 20)</h2>
<p>Na wzgórzu zobaczyli dwie grupy mężczyzn bijących się na pięści. Tobi i Mona otworzyli ogień. Rick uciekł w stronę bazy wojskowej. Następnie pojawiła się procesja z pochodniami, a czerwona mgła zaczęła "oddychać". Tobi i Mona, wraz z Jenny, dotarli na szczyt wzgórza, gdzie znajdowała się świątynia pod gołym niebem z ołtarzem przypominającym człowieka-żabę. Na widok ołtarza Mona wydała dziwny, jodłujący dźwięk lub "rytualną pieśń" w języku Aklo, którą Jenny przetłumaczyła jako "Śpiewający w Skórze, przybądź!". Wkrótce potem nadleciały chińskie samoloty A5C i zbombardowały wzgórze. Mona została ciężko ranna, a jej umysł został naruszony, ale udało jej się uciec.</p>
<h2>Powrót do Przesłuchania</h2>
<p>Po zakończeniu opowieści o misji "Tiger", agenci Komórki H prowadzili bardziej szczegółówe przesłuchania. Pytali o los Nan Gwin (przypuszczalnie zginęła w nalocie) i o zachowanie Mony. Jenny wyjaśniła, że język Aklo ma potężny wpływ na umysł, zmieniając myślenie. Sugerowała, że Mona mogła poznać Aklo niedługo przed misją, dlatego tak gwałtownie zareagowała na świątynię. Jenny uważała, że jest bardziej odporna na ten język, choć nie znała powodu tej odporności. Ostatecznie, agenci zalecili Hendersonowi usunięcie wszystkich zaangażowanych z Delty Green, rekomendując, że tylko Jenny może pozostać, ale jako pracownik biurowy.</p>`,
  },
  {
    slug: "the-number",
    codename: "OP: Lasques Equation",
    date: "2026-05-15",
    status: "CLOSED",
    location: "Alliance, New Jersey",
    agents: "HARRY, HERC, PARKER, YOKO",
    episode: "Session 03",
    summary: `<h2> Matematyczny Mord </h2><p>Agenci Delta Green – Harry (Herc), Yoko (Sara), agentka Parker (Sara Jessica Parker) oraz Jake (Harry) – od dłuższego czasu nie otrzymywali żadnych nowych zadań. Wszyscy zastanawiali się, czy Delta Green o nich zapomniała, czy też zostali odsunięci na bok po poprzednich akcjach. 12 października, około godziny 16:00 każdy z nich odebrał telefon od agenta Hendersona. Henderson rozpoczął rozmowę pytając Herca o zaawansowaną matematykę, a jego odpowiedź – "Od 1 do 10 to mocne dwa" – zadowoliła go, stwierdzając, że właśnie takich osób szukają. Podobne pytania dotyczące fizyki i matematyki usłyszeli Yoko i agentka Parker. Ich bilety czekały na lotnisku, kierunek: New Jersey.</p>
</p>W hotelowej sali konferencyjnej w New Jersey czekał na nich wiecznie zmęczony, łysiejący Henderson. Misja była pilna: Michael Way zamordował siedmiu członków rodziny Ridgewayów, a następnie popełnił samobójstwo, wcześniej zapisując "niebezpieczną liczbę" sprayem na ulicy. Ich zadaniem było:</p>
<ul>
<li>Pozbyć się liczby ze wszystkich materiałów i miejsc</li>
<li>Sfabrykować historię, np. romantyczny związek Way'a z Diną Ridgeway, podkładając dowody</li>
<li>Zniszczyć notatki Way'a dotyczące liczby</li>
<li>Zlokalizować wszystkich, którzy mieli kontakt z liczbą i posiadali matematyczne wykształcenie</li></ul>
<p>Thomas Blanet, trooper ze stanowej policji, został wskazany jako potencjalny kontakt.</p>
<h2> Dom Ridgeway'ów </h2>
<p>Na miejscu zbrodni, w Alliance w New Jersey, agenci musieli przebijać się przez dziennikarzy próbujacych dostać się na miejsce zbrodni. Przy blokadzie czekali na nich funkcjonariusze, w tym starszy agent specjalny Canor (czarny, wysoki, w garniturze i aviatorach) oraz młody agent Gant. Herc, korzystając z fałszywej tożsamości zorganizowanej przez Deltę, przedstawił się jako Agent Parrot z FBI i przejął śledztwo.</p>
<p>
Przeszukując dom Ridgewayów, agenci odkryli kuchnię umazaną krwią, ślady strzałów z shotguna i zegar w piekarniku zatrzymany na 02:28:13. Na ulicy, gdzie Way zabił ostatnią ofiarę i popełnił samobójstwo, znajdował się długi, wysprejowany numer. Yoko natychmiast zabezpieczyła karty pamięci techników, aby zapobiec rozpowszechnieniu liczby. Agenci dowiedzieli się również, że jutro ma przybyć specjalistka ds. matematyki, doktor Comoc, co agenci uznali za zagrożenie. Harry (Jake) przekonał doktor, że jej pomoc nie będzie już potrzebna, a powodem jej odwołania są "cięcia budżetowe" i uznanie numerologii co pasuje "między książki z magią i astrologią".</p>
<p>
Agenci dokonali zmiany części liczb na asfalcie sprayem, aby stworzyć fałszywy trop – z trójek zrobili ósemki. Dodatkowo, podczas przeszukania sypialni państwa Ridgeway, Herc ukradł bieliznę Diny Ridgeway. Na parkingu pobliskiego motelu odnaleźli równiez porzucone auto, którym Way dostał się w okolice domu Ridgeway'ów. Okazało się, samochód nie należał do niego, lecz do Johna Bentona, który zgłosił kradzież kilka godzin wcześniej. Nagranie z motelu pokazało, że Way, wyglądający jak automat, zaparkował i od razu poszedł prosto do domu Ridgewayów. </p>
<h2> Nowy Jork </h2><p>
Następnie agenci udali się do akademika im. Johna J. Halla na uniwersytecie w Nowym Jorku, gdzie mieszkał Way. Budynek miał 30 pięter. Pokój Way'a był pełen matematycznych notatek i książek. Pod futonem znaleźli kserokopię książki "Księga wielu cudów" Flacjusa Klaudana, z XV wieku, z marginesami zapisanymi ręcznie. Książka zawierała równanie Lasquesa, a co ważniejsze, na marginesie Herc odnalazł swój własny numer ubezpieczenia społecznego, bieżącą datę i godzinę oraz koordynaty swojego domu, z napisem "Hello"! To odkrycie kosztowało Herca nieco poczytalności. Inne notatki Way'a zawierały liczby, które okazały się koordynatami 24 komisariatu policji w Nowym Jorku na "dzisiaj". </p>
<p>W komputerze Way'a agenci znaleźli emaila do grupy dyskusyjnej matematyków (Matgeeks) z tytułem "Rozwiązałem równanie Lasquesa", wysłanego wczesnym rankiem. Agentka Parker natychmiast skontaktowała się z Hendersonem, by zablokować listę i ustalić, kto otrzymał wiadomość. Zidentyfikowano trzy osoby poza Way'em, które pobrały maila: Kelly Kaselman (Montana), Loren Badech (Wiesbaden, Niemcy) i Julius Sword (Modesty). Henderson został poinformowany o globalnym zagrożeniu.</p>
<h2> Rozwiązanie równania</h2><p>
Dochodzenie na 24 komisariacie ujawniło, że broń użyta w zbrodni, shotgun, została skradziona z ich zbrojowni dokładnie o 09:21 rano. Broń była wystawiona na zewnątrz z powodu "awarii hydraulicznej" i niepilnowana. Nagranie z monitoringu pokazało, jak Way bierze broń, chowa ją do torby i odchodzi dokładnie w momencie gdy pilnujący jej policjant na kilkanaście sekund opuścił swoje stanowisko.</p>
<p>Agenci sfabrykowali dowody: podrzucili list miłosny od Diny Ridgeway do Michaela Way'a, jej bieliznę oraz jej włosy na łóżko mordercy w akademiku. Michael Way został "romantycznie" połączony z Diną.</p>
<p>Misja zakończyła się sukcesem. Loren Badech w Wiesbaden próbował rozwinąć transparent z numerem na wieży kościoła, lecz "nieszczęśliwie" spadł i zginął na miejscu. Świat został ponownie uratowany przed nadnaturalnym zagrożeniem. Cała akcja kosztowała większość agentów tylko jeden punkt poczytalności, ale Herc, odkrywając matematykę, stracił aż cztery.</p>`,
  },
];
