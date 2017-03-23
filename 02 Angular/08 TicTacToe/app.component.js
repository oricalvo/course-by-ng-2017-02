class AppController {
    constructor(boardService) {
        this.boardService = boardService;
    }

    newGame() {
        this.boardService.newGame();
    }
}

appModule.component("idiApp", {
    controller: AppController,
    templateUrl: "app.component.html",
});
