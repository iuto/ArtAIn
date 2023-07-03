const images = [
  [
    { src: "images/incorrect-Girl with a Pearl Earring1.webp", label: "Incorrect" },
    { src: "images/answer-Girl with a Pearl Earring.webp", label: "Answer" },
    { src: "images/incorrect-Girl with a Pearl Earring2.webp", label: "Incorrect" },
    { src: "images/incorrect-Girl with a Pearl Earring3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/incorrect-The Milkmaid1.webp", label: "Incorrect" },
    { src: "images/incorrect-The Milkmaid2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Milkmaid3.webp", label: "Incorrect" },
    { src: "images/answer-The Milkmaid.webp", label: "Answer" },
  ],
  [
    { src: "images/incorrect-Mona Lisa1.webp", label: "Incorrect" },
    { src: "images/answer-Mona Lisa.webp", label: "Answer" },
    { src: "images/incorrect-Mona Lisa2.webp", label: "Incorrect" },
    { src: "images/incorrect-Mona Lisa3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/answer-The Starry Night.webp", label: "Answer" },
    { src: "images/incorrect-The Starry Night1.webp", label: "Incorrect" },
    { src: "images/incorrect-The Starry Night2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Starry Night3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/incorrect-The Scream1.webp", label: "Incorrect" },
    { src: "images/answer-The Scream.webp", label: "Answer" },
    { src: "images/incorrect-The Scream2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Scream3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/incorrect-The Gleaners1.webp", label: "Incorrect" },
    { src: "images/incorrect-The Gleaners2.webp", label: "Incorrect" },
    { src: "images/answer-The Gleaners.webp", label: "Answer" },
    { src: "images/incorrect-The Gleaners3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/answer-The Last Supper.webp", label: "Answer" },
    { src: "images/incorrect-The Last Supper1.webp", label: "Incorrect" },
    { src: "images/incorrect-The Last Supper2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Last Supper3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/incorrect-The Great Wave off Kanagawa1.webp", label: "Incorrect" },
    { src: "images/answer-The Great Wave off Kanagawa.webp", label: "Answer" },
    { src: "images/incorrect-The Great Wave off Kanagawa2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Great Wave off Kanagawa3.webp", label: "Incorrect" },
  ],
  [
    { src: "images/incorrect-Liberty Leading the People1.webp", label: "Incorrect" },
    { src: "images/incorrect-Liberty Leading the People2.webp", label: "Incorrect" },
    { src: "images/incorrect-Liberty Leading the People3.webp", label: "Incorrect" },
    { src: "images/answer-Liberty Leading the People.webp", label: "Answer" },
  ],
  [
    { src: "images/answer-The Night Watch.webp", label: "Answer" },
    { src: "images/incorrect-The Night Watch1.webp", label: "Incorrect" },
    { src: "images/incorrect-The Night Watch2.webp", label: "Incorrect" },
    { src: "images/incorrect-The Night Watch3.webp", label: "Incorrect" },
  ],
];

const quizData = [
  {
    images: [
      { src: "path_to_image1", label: "Option" },
      { src: "path_to_image2", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-Girl with a Pearl Earring.webp",
    title: "真珠の耳飾りの少女",
    author: "ヨハネス・フェルメール",
  },
  {
    images: [
      { src: "path_to_image3", label: "Option" },
      { src: "path_to_image4", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Milkmaid.webp",
    title: "牛乳を注ぐ女",
    author: "ヨハネス・フェルメール",
  },
  {
    images: [
      { src: "path_to_image5", label: "Option" },
      { src: "path_to_image6", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-Mona Lisa.webp",
    title: "モナ・リザ",
    author: "レオナルド・ダ・ヴィンチ",
  },
  {
    images: [
      { src: "path_to_image7", label: "Option" },
      { src: "path_to_image8", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Starry Night.webp",
    title: "星月夜",
    author: "ヴィンセント・ファン・ゴッホ",
  },
  {
    images: [
      { src: "path_to_image9", label: "Option" },
      { src: "path_to_image10", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Scream.webp",
    title: "叫び",
    author: "エドヴァルド・ムンク",
  },
  {
    images: [
      { src: "path_to_image11", label: "Option" },
      { src: "path_to_image12", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Gleaners.webp",
    title: "落ち穂拾い",
    author: "ジャン＝フランソワ・ミレー",
  },
  {
    images: [
      { src: "path_to_image13", label: "Option" },
      { src: "path_to_image14", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Last Supper.webp",
    title: "最後の晩餐",
    author: "レオナルド・ダ・ヴィンチ",
  },
  {
    images: [
      { src: "path_to_image15", label: "Option" },
      { src: "path_to_image16", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Great Wave off Kanagawa.webp",
    title: "冨嶽三十六景《神奈川沖浪裏》",
    author: "葛飾北斎",
  },
  {
    images: [
      { src: "path_to_image17", label: "Option" },
      { src: "path_to_image18", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-Liberty Leading the People.webp",
    title: "民衆を導く自由の女神",
    author: "ウジェーヌ・ドラクロワ",
  },
  {
    images: [
      { src: "path_to_image17", label: "Option" },
      { src: "path_to_image18", label: "Option" },
      // ...
    ],
    answerImage: "images/answer-The Night Watch.webp",
    title: "夜警",
    author: "レンブラント・ファン・レイン",
  },
];

const scoreImage = [
  "images/score01.webp",
  "images/score02.webp",
  "images/score03.webp",
  "images/score05.webp",
  "images/score06.webp",
  "images/score07.webp",
  "images/score08.webp",
  "images/score09.webp",
  "images/score10.webp",
];

const correctAnswers = [
  0, // 1つ目の問題の正解のインデックス
  3, // 2つ目の問題の正解のインデックス
  // 新たな問題の正解のインデックスを追加
  1, // 3つ目の問題の正解のインデックス
  0, // 4つ目の問題の正解のインデックス
  // さらに追加の問題の正解のインデックスをここに追加
  0, // 5つ目の問題の正解のインデックス
  1, // 6つ目の問題の正解のインデックス
  // ウジェーヌ・ドラクロワの「民衆を導く自由の女神」の正解のインデックスを追加
  0, // 7つ目の問題の正解のインデックス
  0, // 8つ目の問題の正解のインデックス
];

let currentQuestion = 0;
let score = 0;

function displayImages() {
  const imagesContainer = document.getElementById("images");
  imagesContainer.innerHTML = "";

  for (let i = 0; i < images[currentQuestion].length; i++) {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "image-wrapper";

    const img = document.createElement("img");
    img.src = images[currentQuestion][i].src;
    img.addEventListener("click", () => checkAnswer(i));
    imgWrapper.appendChild(img);

    imagesContainer.appendChild(imgWrapper);
  }
}

function endGame() {
  const imagesContainer = document.getElementById("images");
  const successAnimation = document.getElementById("success-animation");
  const failureScreen = document.getElementById("failure-screen");
  const h1 = document.getElementById("game-title");

  imagesContainer.style.display = "none";
  successAnimation.style.display = "none";
  failureScreen.style.display = "none";
  h1.style.display = "block";
  h1.innerHTML = `ゲーム終了！<br>あなたのスコアは ${score} / ${images.length} です！`;

  // スコアに応じた写真を追加する
  const scoreImages = document.createElement("div");
  scoreImages.classList.add("score-images");

  const image = document.createElement("img");
  if (score === 0) {
    image.src = "images/score00.webp";
  } else {
    const scoreImageIndex = score - 1;
    if (scoreImageIndex < scoreImage.length) {
      image.src = scoreImage[scoreImageIndex];
    } else {
      image.src = scoreImage[scoreImage.length - 1];
    }
  }
  image.alt = `Score ${score}`;
  image.classList.add("no-hover");
  scoreImages.appendChild(image);

  h1.appendChild(scoreImages);

  const link = document.createElement("a");
  const tweetText = `私のスコアは ${score} / ${images.length} です！名画とAIで生成した画像を当てるゲーム「ArtAIn」 https://artain.app 作成者：@iuto_025`; // スコアに応じたテキストを作成
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`; // ツイートのURLを作成
  link.href = tweetUrl;
  link.textContent = "Twitterでつぶやく";

  const twitterIcon = document.createElement("img");
  twitterIcon.src = "images/twitter.webp";
  twitterIcon.alt = "Twitter";
  link.insertBefore(twitterIcon, link.firstChild);

  h1.appendChild(link);
  link.classList.add("twitter-button");
}

function displayFailureScreen() {
  const imagesContainer = document.getElementById("images");
  const successAnimation = document.getElementById("success-animation");
  const failureScreen = document.getElementById("failure-screen");
  const answerImage = document.getElementById("answer-image");
  const answerTitle = document.getElementById("answer-title");
  const answerAuthor = document.getElementById("answer-author");
  const h1 = document.querySelector("h1");
  const nextButton = document.getElementById("next-button");

  imagesContainer.style.display = "none";
  successAnimation.style.display = "none";
  failureScreen.style.display = "flex";
  answerImage.src = images[currentQuestion][0].src;
  answerTitle.textContent = "タイトル: " + quizData[currentQuestion].title;
  answerAuthor.textContent = "作者: " + quizData[currentQuestion].author;

  h1.style.display = "none";
  nextButton.style.display = "block";
}

function checkAnswer(selectedIndex) {
  const imagesContainer = document.getElementById("images");
  const message = document.getElementById("message");
  const successAnimation = document.getElementById("success-animation");
  const failureScreen = document.getElementById("failure-screen");
  const h1 = document.querySelector("h1");

  const answerImage = document.getElementById("answer-image");
  const answerTitle = document.getElementById("answer-title");
  const answerAuthor = document.getElementById("answer-author");
  const nextButton = document.getElementById("next-button");

  const answerImage2 = document.getElementById("answer-image2");
  const answerTitle2 = document.getElementById("answer-title2");
  const answerAuthor2 = document.getElementById("answer-author2");
  const nextButton2 = document.getElementById("next-button2");

  if (images[currentQuestion][selectedIndex].label === "Answer") {
    score++;
    message.textContent = "";
    imagesContainer.style.display = "none";
    successAnimation.style.display = "flex";
    failureScreen.style.display = "none";
    h1.style.display = "none";
    answerImage.src = quizData[currentQuestion].answerImage;
    answerTitle.textContent = "タイトル: " + quizData[currentQuestion].title;
    answerAuthor.textContent = "作者: " + quizData[currentQuestion].author;

    nextButton.style.display = "block";
  } else {
    message.textContent = "";
    imagesContainer.style.display = "none";
    successAnimation.style.display = "none";
    failureScreen.style.display = "flex";
    h1.style.display = "none";
    answerImage2.src = quizData[currentQuestion].answerImage;
    answerTitle2.textContent = "タイトル: " + quizData[currentQuestion].title;
    answerAuthor2.textContent = "作者: " + quizData[currentQuestion].author;

    nextButton2.style.display = "block";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < images.length) {
    const imagesContainer = document.getElementById("images");
    const successAnimation = document.getElementById("success-animation");
    const failureScreen = document.getElementById("failure-screen");
    const h1 = document.querySelector("h1");

    imagesContainer.style.display = "grid";
    successAnimation.style.display = "none";
    failureScreen.style.display = "none";
    displayImages();
    h1.style.display = "block";
    h1.textContent = "正しい写真を選んでください";

    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "none";

    const retryButton = document.getElementById("retry-button");
    if (!imagesContainer || !successAnimation || !failureScreen || !h1) {
      console.error("必要な要素が見つかりません。");
      return;
    }
    
    retryButton.style.display = "none";
  } else {
    endGame();
  }
}

const nextButton = document.getElementById("next-button");
console.log(nextButton); // ボタン要素が正しく取得できているか確認するためにログ出力

// ボタン要素が正しく取得できている場合、クリックイベントが正しく設定されているか確認するためにログ出力
if (nextButton) {
  console.log(nextButton.onclick);
}

displayImages();