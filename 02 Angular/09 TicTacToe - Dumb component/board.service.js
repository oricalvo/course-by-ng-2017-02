class BoardService {
    constructor() {
        this.nextBoardId = 1000;
        this.listeners = [];
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

    newGame() {
        const board = {
            id: this.nextBoardId++,
            rows: this.createBoard(),
            currentPlayer: "X",
        }

        return board;
    }

    nextMove(board, cell) {
        cell.value = board.currentPlayer;

        if(board.currentPlayer == "X") {
            board.currentPlayer = "O";
        }
        else {
            board.currentPlayer = "X";
        }

        this.emit();
    }
}

appModule.service("boardService", BoardService);