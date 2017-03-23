class BoardService {
    constructor() {
        this.listeners = [];

        this.newGame();
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if(index!=-1) {
            this.listeners.splice(index, 1);
        }
    }

    emit() {
        for(let l of this.listeners) {
            l();
        }
    }

    createBoard() {
        const rows = [];

        for(let y=0; y<3; y++) {
            let row = [];
            rows.push(row);

            for(let x=0; x<3; x++) {
                let cell = {
                    y: y,
                    x: x,
                    value: undefined,
                };

                row.push(cell);
            }
        }

        return rows;
    }

    tooglePlayers() {
        if(this.currentPlayer == "X") {
            this.currentPlayer = "O";
        }
        else {
            this.currentPlayer = "X";
        }
    }

    newGame() {
        this.rows = this.createBoard();
        this.currentPlayer = "X";

        this.emit();
    }

    nextMove(cell) {
        cell.value = this.currentPlayer;
        this.tooglePlayers();

        this.emit();
    }
}

appModule.service("boardService", BoardService);