/**
 * Schere-Stein-Papier Spiel
 * Dieses Skript implementiert ein einfaches Schere-Stein-Papier-Spiel gegen den Computer
 * mit Punktesystem und einer visuellen Anzeige der Auswahl und des Ergebnisses.
 */
class RPSGame {
    constructor() {
        // DOM-Elemente
        this.scorePlayer = document.getElementById('score-player');
        this.scoreComputer = document.getElementById('score-computer');
        this.resetButton = document.getElementById('reset-button');
        this.choices = document.getElementById('choices');
        this.resultDisplay = document.getElementById('result-display');
        this.playerChoiceDisplay = document.getElementById('player-choice');
        this.computerChoiceDisplay = document.getElementById('computer-choice');
        this.resultMessage = document.getElementById('result-message');
        
        // Spielstatus
        this.playerScore = 0;
        this.computerScore = 0;
        this.choices = ['rock', 'paper', 'scissors'];
    }

    /**
     * Initialisiert das Spiel durch Hinzufügen von Event-Listenern
     * und Zurücksetzen des Spielstatus.
     */
    start() {
        this.resetButton.addEventListener('click', () => this.#resetGame());
        
        // Event-Listener für die Auswahlelemente hinzufügen
        document.getElementById('rock').addEventListener('click', () => this.#play('rock'));
        document.getElementById('paper').addEventListener('click', () => this.#play('paper'));
        document.getElementById('scissors').addEventListener('click', () => this.#play('scissors'));
        
        // Ergebnisanzeige initial ausblenden
        this.resultDisplay.style.display = 'none';
    }

    /**
     * Führt einen Spielzug durch basierend auf der Spielerauswahl.
     * @param {string} playerChoice - Die Auswahl des Spielers ('rock', 'paper' oder 'scissors').
     */
    #play(playerChoice) {
        // Computer-Auswahl zufällig generieren
        const computerChoice = this.#getComputerChoice();
        
        // Anzeigen der Auswahlen
        this.#displayChoices(playerChoice, computerChoice);
        
        // Bestimmen des Gewinners
        const result = this.#determineWinner(playerChoice, computerChoice);
        
        // Aktualisieren des Punktestands
        this.#updateScore(result);
        
        // Anzeigen des Ergebnisses
        this.#displayResult(result, playerChoice, computerChoice);
    }

    /**
     * Generiert eine zufällige Auswahl für den Computer.
     * @returns {string} Die Auswahl des Computers ('rock', 'paper' oder 'scissors').
     */
    #getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return this.choices[randomIndex];
    }

    /**
     * Bestimmt den Gewinner basierend auf den Auswahlen.
     * @param {string} playerChoice - Die Auswahl des Spielers.
     * @param {string} computerChoice - Die Auswahl des Computers.
     * @returns {string} Das Ergebnis ('win', 'lose' oder 'draw').
     */
    #determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'win';
        }
        
        return 'lose';
    }

    /**
     * Zeigt die Auswahlen von Spieler und Computer an.
     * @param {string} playerChoice - Die Auswahl des Spielers.
     * @param {string} computerChoice - Die Auswahl des Computers.
     */
    #displayChoices(playerChoice, computerChoice) {
        // Anzeige einblenden
        this.resultDisplay.style.display = 'block';
        
        // Auswahl des Spielers anzeigen
        this.playerChoiceDisplay.innerHTML = `
            <img src="/assets/${playerChoice}-solid.svg" alt="${playerChoice}" class="rps-icon">
        `;
        
        // Auswahl des Computers anzeigen
        this.computerChoiceDisplay.innerHTML = `
            <img src="/assets/${computerChoice}-solid.svg" alt="${computerChoice}" class="rps-icon">
        `;
        
        // Passende Farben für die Icons setzen
        const playerIcon = this.playerChoiceDisplay.querySelector('.rps-icon');
        const computerIcon = this.computerChoiceDisplay.querySelector('.rps-icon');
        
        // Spieler-Icon-Farbe
        if (playerChoice === 'rock') {
            playerIcon.style.filter = 'invert(67%) sepia(72%) saturate(1217%) hue-rotate(173deg) brightness(96%) contrast(87%)';
        } else if (playerChoice === 'paper') {
            playerIcon.style.filter = 'invert(72%) sepia(98%) saturate(1066%) hue-rotate(359deg) brightness(103%) contrast(103%)';
        } else {
            playerIcon.style.filter = 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(87%) contrast(96%)';
        }
        
        // Computer-Icon-Farbe
        if (computerChoice === 'rock') {
            computerIcon.style.filter = 'invert(67%) sepia(72%) saturate(1217%) hue-rotate(173deg) brightness(96%) contrast(87%)';
        } else if (computerChoice === 'paper') {
            computerIcon.style.filter = 'invert(72%) sepia(98%) saturate(1066%) hue-rotate(359deg) brightness(103%) contrast(103%)';
        } else {
            computerIcon.style.filter = 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(87%) contrast(96%)';
        }
    }

    /**
     * Aktualisiert den Punktestand basierend auf dem Ergebnis.
     * @param {string} result - Das Ergebnis ('win', 'lose' oder 'draw').
     */
    #updateScore(result) {
        if (result === 'win') {
            this.playerScore++;
            this.scorePlayer.textContent = this.playerScore;
        } else if (result === 'lose') {
            this.computerScore++;
            this.scoreComputer.textContent = this.computerScore;
        }
    }

    /**
     * Zeigt das Ergebnis an.
     * @param {string} result - Das Ergebnis ('win', 'lose' oder 'draw').
     * @param {string} playerChoice - Die Auswahl des Spielers.
     * @param {string} computerChoice - Die Auswahl des Computers.
     */
    #displayResult(result, playerChoice, computerChoice) {
        // CSS-Klassen für die Ergebnisanzeige entfernen
        this.resultMessage.classList.remove('win', 'lose', 'draw');
        
        // Ergebnistext und Styling basierend auf dem Ergebnis
        let resultText = '';
        
        if (result === 'win') {
            resultText = 'Du gewinnst!';
            this.resultMessage.classList.add('win');
        } else if (result === 'lose') {
            resultText = 'Computer gewinnt!';
            this.resultMessage.classList.add('lose');
        } else {
            resultText = 'Unentschieden!';
            this.resultMessage.classList.add('draw');
        }
        
        // Ergebnistext anzeigen
        this.resultMessage.textContent = resultText;
    }

    /**
     * Setzt das Spiel zurück.
     */
    #resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.scorePlayer.textContent = '0';
        this.scoreComputer.textContent = '0';
        this.resultDisplay.style.display = 'none';
    }
}

// Spiel initialisieren
const game = new RPSGame();
game.start();