// Fragen und Antworten definieren
const questions = [
    {
      question: "Welcher berühmte Regenwald erstreckt sich über einen großen Teil Panamas?",
      options: ["Amazonas-Regenwald", "Regenwald-Darién", "Borneo-Regenwald", "Kongobecken-Regenwald"],
      answer: 1, // Index der korrekten Antwort (0-basiert)
      background: "url(bild1.jpg)" // Pfad zum Hintergrundbild
    },
    {
      question: "Welche Tierart ist ein Nationalsymbol Panamas und auch auf dem 1-Cent-Münzstück abgebildet?",
      options: ["Harpyieadler", "Faultier", "Papagei", "Affe"],
      answer: 0,
      background: "url(bild2.jpg)"
    },
    {
        question: "Welche indigene Volksgruppe ist für ihre kunstvollen Molas bekannt?",
        options: ["Mapuche", "Maori", "Kuna", "Inuit"],
        answer: 2,
        background: "url(bild3.jpg)"
    },
    {
        question: "Welcher berühmte Strand in Panama ist bei Surfern aufgrund seiner hohen Wellen sehr beliebt?",
        options: ["Santa Catalina", "Copacabana-Strand", "Bondi Beach", "Zuma Beach"],
        answer: 0,
        background: "url(bild4.jpg)"
    },
    {
        question: "Welche bekannte Inselgruppe vor der Küste Panamas ist für ihre weißen Sandstrände und klaren Gewässer bekannt?",
        options: ["Malediven", "Bahamas", "Hawaii-Inseln", "San-Blas-Inseln"],
        answer: 3,
        background: "url(bild5.jpg)"
    },
    {
        question: "Wie heißt der größte See in Panama?",
        options: ["Lake Miraflores", "Lake Gatun", "Lake Bayano", "Lake Alajuela"],
        answer: 1,
        background: "url(bild6.jpg)"
    },
    {
        question: "Welches Fest wird in Panama jedes Jahr im November gefeiert und ist eines der wichtigsten kulturellen Ereignisse des Landes?",
        options: ["Karneval", "Neujahr", "Unabhängigkeitstag", "Tag der Märtyrer"],
        answer: 0,
        background: "url(bild7.jpg)"
    },
    {
        question: "Wie viele Provinzen gibt es in Panama?",
        options: ["5", "7", "10", "11"],
        answer: 2,
        background: "url(bild8.jpg)"
    },
    {
        question: "Welche tropische Frucht ist ein wichtiger Exportartikel für Panama?",
        options: ["Banane", "Ananas", "Mango", "Avocado"],
        answer: 1,
        background: "url(bild9.jpg)"
    },
    {
        question: "Welcher Fluss bildet einen Teil der natürlichen Grenze zwischen Panama und Costa Rica?",
        options: ["Río Chagres", "Río Tarcoles", "Río Tuira", "Río Sixaola"],
        answer: 3,
        background: "url(bild10.jpeg)"
    },
    // Weitere Fragen...
  ];
  
  let currentQuestionIndex = 0;
  let punkte = 0;
  
  // Funktion zum Laden einer Frage
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
  
    // Frage und Antwortoptionen aktualisieren
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Antwortoptionen erstellen
    optionsContainer.innerHTML = ""; // Vorherige Optionen löschen
    currentQuestion.options.forEach(function (option, index) {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      optionsContainer.appendChild(button);
  
      // Event Listener für Auswahl der Optionen
      button.addEventListener("click", function () {
        checkAnswer(index);
      });
    });
  
    // Hintergrundbild aktualisieren
    document.body.style.backgroundImage = currentQuestion.background;
  }
  
  // Funktion zum Überprüfen der Antwort
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.answer) {
      alert("Richtig!");
      punkte = punkte + 1;
    } else {
      alert("Falsch!");
    }
  
    // Nächste Frage laden oder Spiel beenden
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz beendet! Ihr habt " + punkte + " erreicht!");
    }
  }
  
  // Quiz starten
  loadQuestion();