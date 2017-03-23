class AppController {
    constructor(boardService) {
        this.boardService = boardService;
        this.board1 = this.boardService.newGame();
        this.board2 = this.boardService.newGame();
    }

    newGame() {
        this.board1 = this.boardService.newGame();
    }

    onNextMove($event) {
        console.log($event);

        this.boardService.nextMove($event.board, $event.cell);
    }
}

appModule.component("idiApp", {
    controller: AppController,
    templateUrl: "app.component.html",
});
