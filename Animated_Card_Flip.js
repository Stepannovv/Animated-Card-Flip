// Получаем элементы карточек и кнопок
var $cards = $(".card-object"),
  $faceButtons = $(".face");

// Назначаем обработчик клика на кнопки
$faceButtons.on("click", flipCard);

function flipCard(event) {
  event.preventDefault();

  var $btnFace = $(this),
    $card = $btnFace.closest(".card-object"); // Используем closest для поиска родительского элемента карточки

  if ($card.hasClass("flip-in")) {
    closeCards();
  } else {
    closeCards();
    openCard($card);
  }
}

function closeCards() {
  $cards.each(function () {
    var $this = $(this);
    $this
      .filter(".flip-in")
      .removeClass("flip-in")
      .queue(function () {
        // Принудительный пересчёт для анимации
        var reflow = this.offsetHeight;
        $this.addClass("flip-out").dequeue();
      });
  });
}

function openCard($card) {
  $card.removeClass("flip-out").queue(function () {
    // Принудительный пересчёт для анимации
    var reflow = this.offsetHeight;
    $(this).addClass("flip-in").dequeue();
  });
}
