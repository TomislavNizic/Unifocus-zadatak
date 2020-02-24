~ Kako pokrenuti aplikaciju?
1. Raspakirati sadržaj zip datoteke na lokaciju po želji.  
2. Instalirati najnoviji Node.js LTS runtime https://nodejs.org/en/
3. Pokrenuti NodeJS terminal te u komandnoj liniji upisati te navigirati do lokacije 
   u kojoj je projekt raspakiran
   Npr. " cd C:/Users/Tomislav App "
4. U terminal zatim upisati: cd ime-aplikacije (u ovome slucaju "cd zadatak")
5. Zatim upisati npm install za instalaciju potrebnih node_modules paketa unutar projektnog foldera
4. Zaključno nakon instalacije u terminal upisujemo naredbu: npm start 
5. Nakon upisane naredbe npm start trebao bi se pokrenuti lokalni razvojni server, te se aplikaciju
   može pregledati i isprobati u web pregledniku upisujući "http://localhost:3000/" u adresnu traku,
   ukoliko preglednik automatski ne otvori stranicu.

~ Napomena o aplikaciji
Aplikacija trenutno zadovoljava zadane funkcionalnosti :
      - 2 stranice (rute) - "Table View" i "Chart View" uz react routing metodu
      - import podataka u tablicu sa mocky.io predloženog linka
      - Kreirane komponente statefull (TableView) te spojena na state, te stateless komponenta (Country) 
        koja sadrži tablicu i css styling
      - Kreirana forma za unos novih podataka u tablicu, te submit button koji podatke pohranjuje u state
      - Input polja population i size smiju primati samo brojcane vrijednosti
      - Chart view prikazuje iste podatke kao sto su u tablici


~ Korišteni software i paketi pri izradi aplikacije : 
- Node Js. : https://nodejs.org/en/
- IntelliJIdea https://www.jetbrains.com/idea/download/
- React-router-dom (npm install --save react-router-dom)
- Axios (npm install axios)
- Redux paket (npm install --save redux)
- Redux-Adapter (npm install --save redux-adapter)
- React-redux (npm install --save react-redux)
- Redux Thunk (npm install --save redux-thunk)
- Redux DevTools (https://github.com/zalmoxisus/redux-devtools-extension#usage)
- Victory chart library (npm install --save victory)