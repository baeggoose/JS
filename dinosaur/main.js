var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var 승빈 = new Image();
승빈.src = "승빈.png";

var 나르 = new Image();
나르.src = "나르.png";
var 스피 = new Image();
스피.src = "스피.png";

// 주인공 좌표, 사이즈정보
var dino = {
  x: 10,
  y: 250,
  width: 100,
  height: 150,
  draw() {
    ctx.fillStyle = "grey";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(승빈, this.x, this.y, this.width, this.height);
  },
  jump() {
    this.y -= 2;
  },
  fall() {
    if (this.y < 250) {
      this.y += 2;
    }
  },
  reset() {
    this.y = 250;
  },
};

// 장애물 좌표, 사이즈정보
class Cactus {
  constructor() {
    this.x = canvas.width; // 창 오른쪽 끝에 맞춰서 나오도록 설정
    this.y = 300;
    this.width = 100;
    this.height = 100;
    this.image = Math.random() < 0.5 ? 나르 : 스피;
  }
  draw() {
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
var cactus여러개 = [];
var animate;
var 점프timer = 0;
var gameOver = false;

function 시간의흐름() {
  animate = requestAnimationFrame(시간의흐름);

  // 캔버스 클리어해줘야 다시 그리지
  ctx.clearRect(
    0,
    0,
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  if (!gameOver) {
    // 180프레임마다 스폰
    if (timer % (Math.floor(Math.random() * 120) + 100) == 0) {
      var cactus = new Cactus();
      cactus여러개.push(cactus);
    }
    timer++;

    // 삭제 기능
    cactus여러개.forEach((a, i, object) => {
      if (a.x < 0) {
        object.splice(i, 1);
      }
    });

    cactus여러개.forEach((a) => {
      a.x -= 2;
      a.draw();
      충돌하냐(dino, a);
    });

    // 쩜프는 여기서
    if (점프중 == true) {
      dino.jump();
      점프timer++;
    } else if (점프중 == false) {
      점프timer = 0;
      dino.fall();
    }

    if (점프timer > 100) {
      점프중 = false;
    }

    dino.draw();
  } else {
    // 게임 오버 상태에서 메시지 그리기
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(
      "Game Over! Press Space to Restart",
      document.documentElement.clientWidth / 4,
      document.documentElement.clientHeight / 2
    );
  }
}

// 게임 시작
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var cactus = new Cactus();

시간의흐름();

// 게임 오버
function 충돌하냐(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);

  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(
      0,
      0,
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    cancelAnimationFrame(animate);
    gameOver = true;
  }
}

var 점프중 = false;

// 스페이스바 누르면
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && gameOver) {
    // 게임 오버 상태에서 스페이스바를 누르면 게임 재시작
    cactus여러개 = [];
    timer = 0;
    dino.reset();
    시간의흐름();
    gameOver = false;
  } else if (e.code === "Space" && !gameOver) {
    점프중 = true;
  }
});
