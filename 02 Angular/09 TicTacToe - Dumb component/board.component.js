class BoardController {
    constructor() {
    }

    cellClicked(cell) {
        this.onNextMove({
            $event: {
                board: this.board,
                cell: cell
            }
        });
    }
}

appModule.component("idiBoard", {
    controller: BoardController,
    templateUrl: "board.component.html",
    bindings: {
        "board": "<",
        "onNextMove": "&",
    }
});
