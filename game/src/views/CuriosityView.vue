<template>
  <div>
    <!-- hero section -->
    <div class="hero">
      <div class="hero__content">
        <p class="intro-text">la sapevi questa?</p>
        <h1 class="big-text">Curiosità sul mondo animale</h1>
      </div>
      <video autoplay muted loop class="hero__video">
        <source src="../assets/curiosity/bg__hero.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- page-intro section -->
    <div class="grid page-intro my-5">
      <div class="col">
        <p>
          Per chi ha voglia di osservarlo, il regno animale è una fonte
          inesauribile di sorprese!<br />Oltre 5 milioni di specie lo popolano
          e, con le loro più disparate forme, gli incredibili colori, le
          sorprendenti strategie comportamentali e tanto altro, lo trasformano
          in un vero e proprio pozzo delle meraviglie.
        </p>
        <p>
          Noi di <b>Animal House</b> veniamo incontro a tutti gli amanti
          curiosi: informazioni, aneddoti, stranezze e tanto altro, per
          assicurarti una piacevole esperienza di navigazione.
        </p>
      </div>
    </div>

    <!-- keyword section -->
    <div class="grid">
      <div class="col">
        <h3 class="keyword__title">In questa pagina</h3>
        <p class="keyword__text">
          Divertiti con i simpatici video sui nostri amici animali in fondo alla
          pagina e impara nuove cose consultando le carte bifronte. Accedi alle
          aree di interesse con un click.
        </p>
      </div>
    </div>
    <div class="grid keyword mb-5">
      <div class="grid">
        <div class="col">
          <a
            type="button"
            class="btn keyword__button"
            href="#card"
            style="background: #9341b3"
          >
            <img src="../assets/curiosity/button1.png" alt="" />
          </a>
          <h4 style="color: #9341b3">conoscenza</h4>
        </div>
      </div>
      <div class="grid">
        <div class="col">
          <a
            type="button"
            class="btn keyword__button"
            href="#card"
            style="background: #177bb5"
          >
            <img src="../assets/curiosity/button2.png" alt="" />
          </a>
          <h4 style="color: #177bb5">aneddoti</h4>
        </div>
      </div>
      <div class="grid">
        <div class="col">
          <a
            type="button"
            class="btn keyword__button"
            href="#gallery"
            style="background: #469374"
          >
            <img src="../assets/curiosity/button3.png" alt="" />
          </a>
          <h4 style="color: #469374">divertimento</h4>
        </div>
      </div>
    </div>

    <!-- poster section -->
    <div class="poster">
      <div class="poster__content">
        <p>
          <b>Solo istinto</b>? Macché. Gli animali hanno emozioni, sono
          intelligenti e sanno bene chi sono. E come comportarsi con gli
          altri.<br />
          Animal House non ha mai pensato fosse diversamente: la nostra missione
          continua ad essere quella di voler trasmettere comprensione e amore
          per gli animali al maggior numero di persone possibile.<br />Ci siamo
          molto divertiti a selezionare immagini, storie e aneddoti per te;
          siamo sicuri che ne rimarrai soddisfatto!
        </p>
        <p>
          Per sapere di più sul nostro percorso e
          <b>ciò in cui crediamo</b> accedi all'area
          <router-link :to="{ path: '/chi-siamo' }"
            ><button
              type="button"
              class="btn btn-warning"
              style="border: 1px solid black"
            >
              chi siamo
            </button></router-link
          >
          o scrivici agli indirizzi in descrizione forniti alla sezione
          <router-link :to="{ path: '/contatti' }"
            ><button
              type="button"
              style="border: 1px solid black"
              class="btn btn-warning"
            >
              contatti
            </button></router-link
          >.
        </p>
      </div>
      <div class="poster__img">
        <video autoplay muted loop>
          <source
            src="../assets/curiosity/video__poster.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <!-- card section -->
    <div class="container-fluid" id="card" style="margin-bottom: 80px">
      <div class="grid">
        <div class="col">
          <h3 class="card__title big-text">Gira la carta!</h3>
          <p class="card__intro">
            Mettiti alla prova indovinando età, alimentazione e habitat di ogni
            specie!<br />
            Scopri se sei un vero esperto sul regno animale giocando al nostro
            <router-link :to="{ path: '/quiz' }"
              ><button
                type="button"
                class="btn btn-warning"
                style="border: 1px solid black"
              >
                quiz
              </button></router-link
            >
            oppure accedi a quiz dedicati tramite il bottone sul retro della
            carta.
          </p>
          <p class="small card__collaboration-desc">
            — Idea nata in collaborazione con
            <abbr title="World Wide Fund for Nature">WWF</abbr>,
            l'organizzazione internazionale a tutela dell'ambiente e degli
            animali.<br />Scopri di più al sito
            <a
              href="https://www.pandaclub.ch/it/home"
              target="_blank"
              rel="noopener noreferrer"
              class="card__collaboration"
              >Panda Club</a
            >.
          </p>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div
          v-for="(category, index) in this.categories"
          :key="category"
          class="col"
        >
          <div class="card-container mx-auto mt-5">
            <div class="card card-front">
              <div class="card-body">
                <h5
                  class="card__name"
                  :style="{
                    color: this.changeColor(`${index}`),
                    'border-color': this.changeColor(`${index}`),
                  }"
                >
                  {{ category.name }}
                </h5>
                <p>{{ category.desc }}</p>
              </div>
            </div>
            <div class="card card-back">
              <div
                class="card-body"
                :style="{ 'background-color': this.changeColor(`${index}`) }"
              >
                <h5 class="card__name">Carta d'identità</h5>
                <p><i class="bi bi-balloon"></i> Età: {{ category.età }}</p>
                <p>
                  <i class="bi bi-egg"></i> Alimentazione:
                  {{ category.alimentazione }}
                </p>
                <p>
                  <i class="bi bi-globe-americas"></i> Habitat:
                  {{ category.habitat }}
                </p>
                <button type="button" class="btn btn-success">
                  Vai al quiz!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video gallery section -->
    <div class="video__container" id="gallery">
      <div class="grid">
        <div class="col">
          <h3 class="big-text video__title">Simpatici video di animali!</h3>
        </div>
      </div>
      <div class="grid">
        <div class="col">
          <p class="video__intro">
            Ecco alcuni video di animali che ti strapperanno un sorriso!
          </p>
        </div>
      </div>
      <div class="video__list">
        <div class="video">
          <video src="../assets/curiosity/gallery1.mp4" muted controls />
        </div>
        <div class="video">
          <video src="../assets/curiosity/gallery2.mp4" muted controls />
        </div>
        <div class="video">
          <video src="../assets/curiosity/gallery3.mp4" muted controls />
        </div>
      </div>
    </div>
    <div class="video__container">
      <div class="video__list">
        <div class="video">
          <video src="../assets/curiosity/gallery4.mp4" muted controls />
        </div>
        <div class="video">
          <video src="../assets/curiosity/gallery5.mp4" muted controls />
        </div>
        <div class="video">
          <video src="../assets/curiosity/gallery6.mp4" muted controls />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CuriosityView",
  data() {
    return {
      categories: [
        {
          name: "Animali australiani",
          desc: "Australia, terra di canguri e teneri koala... E poi? Se il vostro concetto di “animali australiani” si ferma a questi due marsupiali, è il caso di organizzare un viaggio sull'isola per scoprire le specie più incredibili e strane del Pianeta!",
          età: "per i koala fino a 15 anni.",
          alimentazione: "foglie di eucalipto, ma a volte anche altre foglie.",
          habitat: "foreste di eucalipto in Australia.",
        },
        {
          name: "Animali delle Galapagos",
          desc: "Alle isole Galapagos potrai vedere tante specie animali che non si trovano in nessun altro posto al mondo! Pensa che circa l'80% degli uccelli terrestri, il 97% dei rettili e dei mammiferi terrestri e più del 20% delle specie marine sono esclusive dell'arcipelago.",
          età: "alcuni esemplari di tartarughe giganti delle Galapagos hanno superato i 175 anni.",
          alimentazione: "principalmente sono animali erbivori.",
          habitat: "Isole delle Galapagos.",
        },
        {
          name: "Aquila Reale",
          desc: "Il piumaggio è di colore bruno scuro con penne dorate sul capo che ricordano una corona, conferendole il titolo di aquila “reale”!",
          età: "fino a 30 anni.",
          alimentazione:
            "soprattutto marmotte, ma anche volpi rosse, lepri, uccelli, giovani camosci e caprioli.",
          habitat: "in tutto l'emisfero nord.",
        },
        {
          name: "Bombo",
          desc: "I bombi supporteranno agricoltori nel monitoraggio delle coltivazioni: con minuscoli zaini hitech attaccati al dorso, i bombi sorvolano piante e fiori, realizzando un monitoraggio delle coltivazioni!",
          età: "da una settimana per i fuchi fino a un anno per la regina.",
          alimentazione: "nettare e polline.",
          habitat:
            "a dipendenza della specie in boschi, prati, campi ma anche pietraie.",
        },
        {
          name: "Bonobo",
          desc: "Rispetto ad altri primati, mostrano interesse emotivo per le situazioni che cementano i legami sociali, come il sesso e il reciproco “spulciamento”: una peculiarità che li aiuta a fare gruppo!",
          età: "fino a 40 anni in cattività, mentre in natura è sconosciuta.",
          alimentazione: "frutta, foglie, fiori, semi e piccoli vertebrati.",
          habitat: "Repubblica Democratica del Congo (Africa).",
        },
        {
          name: "Camaleonte",
          desc: "I loro occhi rappresentano un caso unico nel mondo animale: possono ruotare e mettere a fuoco indipendentemente l'uno dall'altro e così, senza spostarsi, il camaleonte è in grado di osservare l'ambiente circostante a 360°!",
          età: "dai 6 agli 8 anni.",
          alimentazione:
            "principalmente carne, come cavallette, coleotteri, farfalle e altri insetti.",
          habitat:
            "principalmente Africa, ma anche Europa, penisola araba, India, Sri Lanka e Stati Uniti (Hawaii e Florida).",
        },
        {
          name: "Castoro",
          desc: "Naturalmente, tutti sanno della loro capacità di costruire dighe. Ma lo sapevate, per esempio, che questi animali curiosi sono insolitamente romantici?",
          età: "fino a 21 anni.",
          alimentazione: "foglie, piante erbacee, corteccia, frutti e mais.",
          habitat: "Europa, Asia e in Nordamerica vive il Castoro americano.",
        },
        {
          name: "Cervo",
          desc: "Il cervo è il simbolo della rigenerazione vitale. Per il rinnovarsi periodico delle sue corna, che sono paragonate anche ai rami degli alberi, assumono un valore allegorico di sviluppo e di unione tra le forze superiori e quelle inferiori!",
          età: "fino a 20 anni circa.",
          alimentazione: "diverse piante ed erbe ma anche muschio o corteccia.",
          habitat: "dall'est Europa all'est dell'Asia.",
        },
        {
          name: "Cetacei",
          desc: "Un gruppo di scienziati assicura che i suoni emessi dalle megattere sono molto simili alla musica pop. Infatti, si ritiene che i loro versi siano così accattivanti che anche gli altri membri del gruppo li ripetono e, quando si annoiano a emettere gli stessi suoni, ne inventano di nuovi!",
          età: "la “Eubalaena japonica” anche fino a 70 anni.",
          alimentazione:
            "a seconda della specie: piccoli crostacei (krill), seppie, polpi e pesci.",
          habitat:
            "in tutti gli oceani, in parte anche nei fiumi (delfini di fiume).",
        },
        {
          name: "Coccinella",
          desc: "Alcune tra le specie più comuni possono essere facilmente riconosciute semplicemente contando i punti che decorano le elitre. Quella più comune e diffusa che ne ha sette!",
          età: "1-2 anni, a dipendenza se sopravvive all'inverno.",
          alimentazione: "afidi.",
          habitat: "praticamente dappertutto, anche nei giardini.",
        },
        {
          name: "Coccodrillo",
          desc: "Come sappiamo i coccodrilli generano timore in chi li avvista. In realtà, quando li si sogna, acquisiscono un significato positivo!",
          età: "dai 20 agli oltre 70 anni in base alla specie.",
          alimentazione:
            "da giovani si cibano di insetti, pesci o piccoli mammiferi. Da adulti mangiano anche prede più grandi.",
          habitat:
            "soprattutto fiumi e laghi delle zone calde e umide dell'Asia, Africa, Australia e dell'America.",
        },
        {
          name: "Coralli",
          desc: "Forse non tutti sanno che il corallo è una vera e propria magia della natura: è una sostanza organica che riunisce forme e caratteristiche del regno minerale, vegetale e animale!",
          età: "per un polipo singolo da 2 anni a diverse centinaia di anni. Per una colonia da 5 anni a diverse centinaia di anni.",
          alimentazione:
            "plancton e zucchero prodotto dalla fotosintesi delle alghe.",
          habitat: "in tutti i mari del mondo.",
        },
        {
          name: "Dugongo",
          desc: "La leggenda delle sirene, le bellissime “donne-pesce” che incantano i marinai per poi farli schiantare sugli scogli, ha origini antichissime ma ad alimentarla fu con ogni probabilità dall'avvistamento di un mammifero marino: si tratta proprio del dugongo!",
          età: "fino a 70 anni.",
          alimentazione: "alghe.",
          habitat: "acque costiere dell'Oceano Pacifico e Indiano.",
        },
        {
          name: "Elefante",
          desc: "Anche tra gli elefanti ci sono i mancini! Si può capire facilmente la loro preferenza tra il raccogliere oggetti a destra o a sinistra dalla lunghezza delle zanne... lì sono più corte!",
          età: "fino a 70 anni.",
          alimentazione: "foglie, rami, corteccia, erba e frutti.",
          habitat:
            "nei paesi africani a sud del Sahara e in diversi paesi dell'Asia, ad esempio India, Thailandia, Vietnam e Cina.",
        },
        {
          name: "Farfalle",
          desc: "Sapevi che le farfalle nelle culture orientali sono interpretate come un'incarnazione dell'anima, proprio come facevano gli antichi greci?",
          età: "da qualche giorno fino a un anno, a dipendenza della specie (senza metamorfosi).",
          alimentazione:
            "da adulti nettare, linfa degli alberi o polline. Allo stadio di bruco principalmente foglie.",
          habitat: "da fiumi e prati fino ai nevai in alta montagna.",
        },
        {
          name: "Foche, otarie e trichechi",
          desc: "Ne vuoi sapere una in più sui trichechi? L'etimologia del nome è “cavalluccio marino che cammina sui denti”!",
          età: "per le foche tra i 30-35 anni.",
          alimentazione:
            "a dipendenza della specie pesci, crostacei e molluschi.",
          habitat:
            "a dipendenza della specie nei grandi oceani, in alcuni mari e laghi.",
        },
        {
          name: "Formica",
          desc: "Le formiche di fuoco sono in grado di formare delle strutture simili a zattere quando si trovano immerse nell'acqua. Come fanno? Usando i loro stessi corpi: si aggrappano l'una all'altra e formano una vera e propria rete!",
          età: "la regina fino a 20 anni; le operaie fino a 5 anni e i maschi pochi giorni.",
          alimentazione: "altri insetti, melata e qualche pianta.",
          habitat: "Europa centrale e settentrionale, Asia settentrionale.",
        },
        {
          name: "Giaguaro",
          desc: "Gli indigeni del Sud America lo chiamano “Jag War”, che tradotto significa “colui che caccia volando”. Il giaguaro si è guadagnato questa definizione per la sua tecnica di caccia: si avvicina di soppiatto alla preda per poi avventarsi con un balzo sulla sua schiena!",
          età: "fino a 10-12 anni.",
          alimentazione: "cervi, tapiri, armadilli, pesci e uccelli.",
          habitat: "America centrale e meridionale.",
        },
        {
          name: "Gipeto barbuto",
          desc: "È uno dei più grandi uccelli europei, ma la sua convivenza con l'uomo è sempre stata complicata... Nei nostri quiz la risposta al mistero!",
          età: "da 30 a 40 anni.",
          alimentazione: "ossa e carcasse di animali morti.",
          habitat: "nelle zone di montagna in Asia, Africa ed Europa.",
        },
        {
          name: "Giraffa",
          desc: "Perché si dice che la giraffa ha più di un cuore? In realtà il cuore è uno solo, ma è molto più grande rispetto a quello di altri ruminanti. Può arrivare a pesare anche più di 11 chili!",
          età: "oltre i 20 anni.",
          alimentazione:
            "di preferenza foglie, germogli e giovani rami di acacia.",
          habitat: "savana africana.",
        },
        {
          name: "Gorilla",
          desc: "Essendo simili per il 98% agli umani, corrono il rischio di contrarre alcune nostre malattie come influenza e raffreddore, che potrebbero essere letali per loro. Per questo motivo solo pochi visitatori al giorno, massimo otto, ottengono il permesso per vedere da vicino i gorilla di montagna!",
          età: "fino a 35 anni.",
          alimentazione: "frutta, foglie, rami di arbusti secchi ed erbe.",
          habitat:
            "diverse regioni dell'Africa centrale, come Repubblica Democratica del Congo, Uganda e Ruanda.",
        },
        {
          name: "Lemuri",
          desc: "Non solo è noto da anni che i primati possono apprendere più rapidamente nuove competenze studiando i loro coetanei, ma uno studio del 2018 rivela che tra i lemuri succede anche qualcosa di ancora più interessante: più un lemure esegue una nuova abilità, più popolare diventa tra gli altri lemuri!",
          età: "molto variabile, dai 12 ai 30 anni.",
          alimentazione: "foglie, frutti, insetti e larve.",
          habitat: "solo in Madagascar e nelle isole Comore.",
        },
        {
          name: "Leone",
          desc: "Nell'antica Roma e in Grecia, i leoni avevano una alta considerazione sociale. Si riteneva che i leoni fossero rappresentanti dell'eleganza e della forza, oltre ad essere gli animali che stavano in cima della catena alimentare e che quindi emanavano una forte aura e doti di comando!",
          età: "fino a 20 anni.",
          alimentazione:
            "ungulati, ad esempio zebre, antilopi, gnu, diverse specie di cervi; ma anche animali più grossi come bufali.",
          habitat:
            "steppe e savane africane nel sud del deserto del Sahara e foresta di Gir in India.",
        },
        {
          name: "Leopardo",
          desc: "Con “pantera” si intende l'insieme di tutte le specie di un particolare gruppo di felidi. Nel caso dei leopardi, la pantera nera non è altro che un leopardo affetto da una forma di melanismo, che conserva ancora le macchie del suo tipico manto, ma esse sono nascoste dal pigmento scuro della melanina!",
          età: "circa 12-15 anni.",
          alimentazione:
            "cervi, caprioli, capre, ma anche coleotteri, rettili, uccelli o carcasse di animali morti.",
          habitat:
            "nella regione dell'Himalaya, nella catena del Caucaso, in Iran, Afghanistan, Turkmenistan, Russia, Cina e Corea del Nord.",
        },
        {
          name: "Lepri e conigli",
          desc: "Per il loro aspetto tenero, conigli e lepri vengono considerati animali da fiaba, mentre sono davvero straordinari, con tanto altro da raccontare e per noi da conoscere!",
          età: "Le lepri 1-5 anni, i conigli fino ai 9 anni.",
          alimentazione:
            "erba, erbe aromatiche, frutta, semi, cereali, ramoscelli e corteccia.",
          habitat:
            "ovunque tranne nelle isole delle Indie occidentali e del Sudest asiatico, del Madagascar e del sud del America del Sud.",
        },
        {
          name: "Lince",
          desc: "Sapevi che esiste la costellazione della lince? Essa viene chiamata così in quanto per vederla bisogna avere gli “occhi di lince”!",
          età: "fino a 17 anni.",
          alimentazione:
            "caprioli, camosci, conigli, ogni tanto anche scoiattoli.",
          habitat: "Europa, Asia centrale e orientale, Siberia.",
        },
        {
          name: "Lupo",
          desc: "I corvi e i lupi hanno un rapporto speciale, tanto che i primi sono chiamati “uccelli lupo” in diverse culture. Quando i corvi trovano una carcassa, essi producono forti rumori per attirare l'attenzione dei lupo!",
          età: "fino a 12 anni.",
          alimentazione:
            "a dipendenza dell'habitat: caprioli, camosci, cervi, cinghiali e alci.",
          habitat: "territori isolati in Nordamerica, Europa e Asia.",
        },
        {
          name: "Marmotta",
          desc: "La marmotta ha un vero e proprio sport preferito: il pugilato! Ebbene sì, le marmotte amano azzuffarsi, ovviamente giocando, l'uno con l'altro sotto il caldo del sole e finiscono le loro lotte rotolando sul terreno!",
          età: "fino a 15 anni.",
          alimentazione: "foglie, erba e fiori.",
          habitat: "oltre il limite del bosco nelle Alpi e nei Carpazi.",
        },
        {
          name: "Meduse",
          desc: "Con soli 2.5 cm di lunghezza, tentacoli compresi, la medusa Irukandji vince il titolo di medusa più piccola al mondo. Ma attenzione a sottovalutarla, è tra le meduse più velenose esistenti!",
          età: "sono gli animali più longevi sul pianeta. La medusa “Turritopsis dohrnii” è una medusa immortale.",
          alimentazione: "piccoli crostacei e pesci, altre meduse.",
          habitat: "in tutti i mari, alcune specie anche in acqua dolce.",
        },
        {
          name: "Okapi",
          desc: "In Italia è nato il primo esemplare di okapi, creatura tanto rara quanto affascinante: “Italo” è nato presso il Parco Zoo di Falconara, ad Ancona, e la sua nascita rappresenta un passo verso la conservazione della specie!",
          età: "longevità media di 20-30 anni.",
          alimentazione: "principalmente foglie da alberi e cespugli.",
          habitat: "foresta pluviale.",
        },
        {
          name: "Orango",
          desc: "Un enorme frutto spinoso, chiamato durian, è il frutto preferito degli oranghi: questo è più conosciuto per la sua terribile puzza, che è stata paragonata a liquami, carne marcia e calzini puzzolenti. Gustoso, no?",
          età: "fino a 40 anni.",
          alimentazione: "frutta, foglie, germogli, corteccia e insetti.",
          habitat: "Sumatra e Borneo.",
        },
        {
          name: "Orso bruno",
          desc: "La gobba presente sulla parte superiore della schiena aiuta a riconoscere l'orso bruno; nessun'altra specie di orso, infatti, presenta questa caratteristica fisica. Si pensa che la gobba di questo animale, fatta di muscoli, lo aiuti a scavare la tana!",
          età: "da 25 a 30 anni.",
          alimentazione:
            "piante erbacee, bacche, frutta, radici, miele, pesci, insetti, erba, carcasse e uova.",
          habitat: "foreste, steppe, alpi o tundra artica.",
        },
        {
          name: "Orso polare",
          desc: "L'orso polare non è bianco. Sebbene venga chiamato anche orso bianco, in realtà i suoi peli sono trasparenti. Il manto dell'orso polare è formato da peli cavi traslucidi che catturano i raggi solari e li convogliano verso la cute, che appaiono bianchi perché le cavita disperdono e riflettono la luce!",
          età: "fino a 25 anni.",
          alimentazione:
            "foche degli anelli, foche dalla sella, giovani trichechi, beluga, narvali, pesci e uccelli marini.",
          habitat:
            "regione artica attorno al Polo Nord, Norvegia, Russia, Alaska, Canada e Groenlandia.",
        },
        {
          name: "Panda Gigante",
          desc: "Hanno zampe con... sei “dita”! Le zampe anteriori hanno in più un cuscinetto carnoso che li aiuta, ad esempio, ad arrampicarsi sugli alberi!",
          età: "fino a 20 anni.",
          alimentazione:
            "soprattutto bambù, ma anche altre piante e in parte anche carne di roditori e ungulati.",
          habitat: "Cina.",
        },
        {
          name: "Panda Rosso",
          desc: "Il panda rosso, come il panda gigante, utilizza spesso uno stratagemma curioso per bere: mette la zampetta nell'acqua e poi la lecca!",
          età: "da 8 fino a 10 anni.",
          alimentazione:
            "principalmente bambù, ma anche radici, ghiande, bacche, licheni, uova di uccelli e pulcini.",
          habitat:
            "Nepal, Bhutan, Myanmar, India settentrionale e alcune regioni della Cina.",
        },
        {
          name: "Pangolino",
          desc: "Il nome “pangolino” deriva dalla lingua malese e significa “colui che si arrotola”. I primi esploratori europei lo chiamarono anche “carciofo a quattro zampe”!",
          età: "in media tra i 13 ai 20 anni.",
          alimentazione: "formiche e termiti.",
          habitat:
            "Africa del Sud e Africa centrale, India, Cina e sud-est asiatico.",
        },
        {
          name: "Pernice bianca",
          desc: "Il nome scientifico della pernice bianca “Lagopus muta”. Il termine “muta”; è riferito al particolarissimo canto del maschio, un rauco “kroo rr kkkk” che può apparire strozzato ed è molto riconoscibile quando riecheggia nel silenzio degli alpeggi!",
          età: "l'età massima registrata è 9 anni.",
          alimentazione: "piante e bacche.",
          habitat:
            "nelle regioni di alta montagna come le Alpi e nella tundra europea, asiatica e nordamericana.",
        },
        {
          name: "Pesci",
          desc: "Come fanno i pesci a vivere per mesi nelle bocce di vetro? Gli scienziati iniziarono il falso mito secondo cui tutti i pesci avrebbero una scarsa memoria! Sappiamo che non è così, ma consigliamo di dare ai nostri pesci acquari più grandi per limitargli situazioni di stress!",
          età: "in media 10 anni.",
          alimentazione:
            "a dipendenza della grandezza, della specie e dell'età, insetti, piccoli crostacei e pesci.",
          habitat:
            "in acque dolci e in acque salate. Nei corsi d'acqua nordamericani, europei e nel Nord Atlantico.",
        },
        {
          name: "Pinguini",
          desc: "Si potrebbe far vivere i pinguini al Polo Nord? In teoria sì, e qualcuno ci ha provato agli inizi del '900. Durante l'esperimento dei pinguini scomparvero e altri furono uccisi dalle popolazioni locali. Da allora non si è più cercato di popolare il Polo Nord con animali non originari di quell'habitat ",
          età: "fino a 20 anni.",
          alimentazione:
            "calamari, piccoli pesci e krill, che sono piccoli crostacei.",
          habitat:
            "Antartide, poche specie vivono anche in Nuova Zelanda, Australia, Sud America, Sud America, Sud Africa e sulle isole Galapagos.",
        },
        {
          name: "Pipistrelli",
          desc: "Non si nutrono di sangue umano, non si impigliano nei capelli e il loro arrivo non è foriero di disgrazie!",
          età: "mediamente 3-5 anni. Vi sono esemplari oltre i 40 anni.",
          alimentazione: "in Svizzera principalmente insetti e ragni.",
          habitat:
            "dappertutto ad eccezione di Artico, Antartico e alcune isole remote.",
        },
        {
          name: "Polpi, seppie e calamari",
          desc: "Questi molluschi tentacolati sono parenti di cozze e lumache. E i ricercatori continuano a scoprire ancora nuove specie!",
          età: "da un mese fino a 5 anni in base alla specie.",
          alimentazione:
            "pesci, altri cefalopodi, granchi, bivalvi, lumache e altri animali marini.",
          habitat: "in tutti i mari ad eccezione del Mar Nero.",
        },
        {
          name: "Ragni",
          desc: " Per non restare intrappolati nelle loro tele, i ragni si muovono sui raggi delle stesste, meno appiccicose, e hanno zampe ricoperte di minuscoli peli oleosi, con cui riescono a scivolare sui fili come se avessero i pattini!",
          età: "la maggior parte dei ragni non supera i 2 anni di vita.",
          alimentazione:
            "è differente a seconda della specie; principalmente insetti, talvolta anche i ragni più piccoli.",
          habitat: "ovunque nel mondo, ma non in Antartide.",
        },
        {
          name: "Rane, rospi e raganelle",
          desc: "Questi animali hanno la pelle liscia e umida, di varie colorazioni, che differiscono da specie a specie: i colori vivaci ed ad alto contrasti delle rane velenose, come il rosso, il giallo e il blu macchiati di nero, sono segno di avvertimento per potenziali predatori!",
          età: "fino a 6 anni.",
          alimentazione: "insetti, ragni e lumache.",
          habitat:
            "la raganella comune in molti stati europei, dalla Grecia fino al sud della Svezia, e dal Portogallo fino al Mar Caspio. Raganella padana: in Svizzera e in Italia.",
        },
        {
          name: "Rapaci notturni",
          desc: "Quando un rapace deve difendere il proprio territorio attua la difesa attiva, ovvero gonfia il suo piumaggio per sembrare più grande e inizia a ticchettare con il becco in segno d'avvertimento! ",
          età: "da dipendenza della specie da 6 fino a 25 anni.",
          alimentazione: "piccoli mammiferi, uccelli e pesci.",
          habitat:
            "ad eccezione dell'Antartide, i rapaci notturni sono presenti in tutte le regioni del mondo.",
        },
        {
          name: "Riccio",
          desc: "Per allevare al meglio un riccio in casa è importante ricordare che non si tratta di un animale domestico qualunque; infatti, è un animale piuttosto riservato, che ha bisogno dei suoi spazi per vivere tranquillo e che non gradisce manifestazioni di affetto troppo “calorose”!",
          età: "in media 3-4 anni, ma può vivere anche fino a 7-8 anni.",
          alimentazione:
            "principalmente insetti, ma anche lombrichi e millepiedi.",
          habitat:
            "in molti paesi europei, dalla Spagna fino alla Scandinavia e al nord-est della Russia.",
        },
        {
          name: "Rinoceronte",
          desc: "Sono animali molto territoriali e delimitano la loro area con... le loro feci!",
          età: "da 30 a 50 anni.",
          alimentazione: "rami, foglie, erba, frutta.",
          habitat:
            "in diverse regioni in Africa il rinoceronte bianco e il rinoceronte nero. In diverse regioni in Asia: rinoceronte indiano, rinoceronte di Giava e rinoceronte di Sumatra.",
        },
        {
          name: "Serpenti",
          desc: "I serpenti sono privi di artigli o ventose, quindi per arrampicarsi usano unicamente la loro forza muscolare. Tendendo alcuni muscoli, su entrambi i lati del corpo si forma una sorta di bordo che permette loro di fare presa sulle superfici ruvide!",
          età: "in media da 10 a 25 anni.",
          alimentazione:
            "a dipendenza della specie e delle dimensioni, si nutrono di termiti a coccodrilli.",
          habitat:
            "quasi dappertutto, ad eccezione di Artide, Antartide, Islanda, Irlanda e Nuova Zelanda.",
        },
        {
          name: "Squalo",
          desc: "La pelle degli squali si contraddistingue per la durezza. Non hanno squame e la loro pelle permette agli squali di ottimizzare il loro movimento in acqua, assicurando loro una straordinaria idro-dinamicità!",
          età: "in base alla specie dai 20 ai 30 anni.",
          alimentazione:
            "pesci, foche o tartarughe marine; alcune specie si nutrono di plancton, che sono minuscoli organismi che galleggiano negli oceani.",
          habitat: "oceani; alcune specie vivono in acqua dolce.",
        },
        {
          name: "Tigre",
          desc: "La maggior parte delle tigri ha gli occhi gialli, ma le tigri bianche di solito hanno gli occhi blu, a causa del fatto che il gene degli occhi blu è collegato al gene della pelliccia bianca. A questi è collegato anche il gene per gli occhi incrociati o lo strabismo!",
          età: "fino a 15 anni.",
          alimentazione:
            "a seconda dell'habitat cervi, cinghiali, bovini selvatici, scimmie, uccelli, rettili e pesci.",
          habitat:
            "Russia, India, Bangladesh, Nepal, Bhutan, Sumatra, sud-est asiatico, Thailandia e Malesia.",
        },
        {
          name: "Volpe artica",
          desc: "Ha un manto bianco che le permette di camuffarsi e sfuggire ai predatori. Con il cambiamento di stagione, cambia anche il colore del suo manto che diviene marrone!",
          età: "tra i 3 e i 6 anni.",
          alimentazione:
            "piccoli mammiferi come topi e lemming, uccelli, pesci morti, carcasse di animali, bacche.",
          habitat: "nord America, nord Europa e Russia.",
        },
      ],
      colors: [
        "#e3427d",
        "#f0c808",
        "#469374",
        "#9341b3",
        "#19abff",
        "#e68653",
        "#c4331c",
      ],
    };
  },
  methods: {
    changeColor(index) {
      for (let i = 0; i <= 6; i++) {
        if (index % 6 == i) {
          return this.colors[i];
        }
      }
    },
  },
};
</script>

<style>
/* hero section */
.hero {
  height: 38vh;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  overflow: hidden;
  box-shadow: rgba(133, 126, 126, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.hero:after {
  content: " ";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
}

.hero__content {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  z-index: 1;
  position: relative;
}

.hero__content h1,
.hero__content p {
  color: #ffd60a;
}

.hero__video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  bottom: 0;
}

/* page-intro section */
.page-intro {
  text-align: center;
  font-size: 22px;
  font-style: italic;
  color: #0000008c;
}

@media (max-width: 768px) {
  .page-intro {
    font-size: 19px;
    text-align: justify;
  }
}

/* keyword section */
.keyword {
  text-align: center;
}

.keyword__title {
  color: #ffd60a;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.keyword__button {
  border-radius: 100%;
  border: 0.5px solid #0000008c;
  padding: 15px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.keyword__button:hover {
  transform: scale(1.05);
}

.keyword__button img {
  max-width: 100%;
}

.keyword h4 {
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
}

.keyword__text {
  font-size: 22px;
  text-align: center;
}

@media (max-width: 768px) {
  .keyword__text {
    font-size: 17px;
    text-align: justify;
  }
}

/* poster section */
.poster {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
  background: url("../assets/curiosity/bg__poster.png") no-repeat center center;
}

.poster__img {
  width: 65%;
  height: 100%;
}

.poster__img video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.poster__content {
  width: 35%;
  padding: 50px;
  text-align: left;
  font-size: 17px;
}

.page-link {
  color: #177bb5;
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
  }

  .poster__content {
    text-align: justify;
  }

  .poster__img,
  .poster__content {
    width: 100%;
  }
}

/* card section */
.card__title {
  text-align: center;
  color: #ffd60a;
}

.card__intro {
  text-align: center;
  font-size: 22px;
}

.card__collaboration-desc {
  text-align: right;
  color: #0000008c;
}

.card__collaboration {
  text-decoration: none;
  color: #177bb5;
}

.card-container {
  width: 18rem;
  perspective: 200rem;
  position: relative;
  height: 389px;
}

.card-container:hover .card-front {
  transform: rotateY(180deg);
}

.card-container:hover .card-back {
  transform: rotateY(0deg);
}

.card {
  transition: all 0.9s;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
}

.card-back {
  transform: rotateY(180deg);
}

.card-back .card-body {
  position: relative;
}

.card-body {
  border-radius: 20px;
}

.card-back a {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -15% 0 0 -23%;
}

.card__name {
  text-align: center;
  margin: 15px auto;
  font-weight: 900;
  font-size: 25px;
}

.card-body button {
  position: fixed;
  right: 15px;
  bottom: 15px;
  color: #fff;
  font-size: 14px;
  border: none;
  background-color: #2c3e50;
}

@media (max-width: 768px) {
  .card__intro {
    font-size: 17px;
    text-align: justify;
  }
}

/* video gallery section */
.video__container {
  position: relative;
  margin-bottom: 50px;
  width: 100%;
}

.video__title {
  text-align: center;
  color: #ffd60a;
}

.video__intro {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
}

.video__container .video__list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.video__container .video__list .video {
  height: 250px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  overflow: hidden;
}

.video__container .video__list .video video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s linear;
}

.video__container .video__list .video:hover video {
  transform: scale(1.03);
}
</style>

<!--
https://www.youtube.com/watch?v=jVhwJgLOoGw
-->

<!--
<blockquote>
          <p>
            Fino a quando non hai amato un animale, una parte della tua anima
            sarà sempre senza luce.
          </p>
          <footer>Anatole France —</footer>
        </blockquote>



cancella colibrì, tracce animali
-->
