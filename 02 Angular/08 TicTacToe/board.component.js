class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
        this.rows = this.boardService.rows;

        this.boardService.subscribe(()=> {
            this.rows = this.boardService.rows;
        });
    }

    cellClicked(cell) {
        this.boardService.nextMove(cell);
    }
}

appModule.component("idiBoard", {
    controller: BoardController,
    templateUrl: "board.component.html",
});
