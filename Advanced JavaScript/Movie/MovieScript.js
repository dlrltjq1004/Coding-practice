const findNamesFromMoviesScript = (movieScript) => {
  // 질문 하기
  // 1.인풋은 한글만 들어오나요?
  // 2.공백이 포함되어 있나요?
  // 3.영문 제목도 포함되나요?
  // 4.대소문자 구분을 해야하나요?
  // 5.같은 이름이 다양한 형태로 표현되는 경우도 따져야 하나요? (Michael == Mike)
  // 무비 이름을 가지고 있는 리스트를 반환 하기만 하면 되나요?

  // forEach 사용 하는 방법
  let forEachArray = [];
  movieScript.forEach((movie) => {
    const movieName = movie.name;
    forEachArray.push(movieName);
  });
  return forEachArray;
  // map을 사용하는 방법
  const mapArray = movieScript.map((movie) => movie.name.trimStart().trimEnd());
  // forEach 와 map 을 사용하지 않고 구현

  let movieNames = [];
  for (movie of movieScript) {
    movieNames.push(movie.name);
  }
  return movieNames;

  let movieNames2 = [];
  for (let i = 0; i < movieScript.length; i++) {
    movieNames2.push(movieScript[i].name);
  }
  return movieNames2;
};

const isValid = () => {
  return;
};

const isTrim = (str) => {
  if (typeof str !== "String") {
    return console.log(
      `isTrim Different Type Error: input is not a String in value ${str}`
    );
  }
  return str.trimStart().trimEnd();
};

const getType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

typeof "str";

const isAnagram = (tab, math) => {};

// 홀짝 반환하는 함수

// 소수점 인지 확인하는 함수?
