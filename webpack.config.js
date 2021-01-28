// 기본적으로 여기서 사용하는 웹팩 기능은
// js나 css 최신문법이 적용된 모듈 파일을 구형문법으로 바꾼 모듈파일로 return하는 것
// 원래는 js용이기 때문에, css는 별도로 다 설정해야한다.
// ex) es6문법 js => 구형 js, scss/sass => css

// 엔트리/아웃풋 경로 만듦
const path = require("path"); // 자바스크립트 path 모듈 불러오기
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // __dirname 현재 작업폴더인 yotube 를 나타냄. 여기에 assets/js/main.js 더해라
const OUTPUT_DIR = path.join(__dirname, "static"); //현재 작업폴더에 "static" 이라는 폴더를 만들고 거기다가 아웃풋 저장해라

// config 설정 들어감.
const config = {
  entry: ["@babel/polyfill", ENTRY_FILE], // 엔트리 파일 경로
  mode: MODE,
  module: {
    // 파일 바꾸는 규칙을 입력
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/, // 찾을 파일의 확장자
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { overrideBrowserslist: "cover 99.5%" }],
                ],
              },
            },
          },
          { loader: "sass-loader" },
        ], //use
      },
    ], //rules
  }, //module
  output: {
    path: OUTPUT_DIR, // 아웃풋 파일 경로
    filename: "[name].js", // 아웃풋 파일 이름 설정
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })], // 플러그인 쓸건데, ExtractCSS이거고 아웃풋 파일 이름은 style.css로 한다.
};

module.exports = config;

// ExtractCSS.extract([
//     { loader: "css-loader" },         // 드디어 css를 읽어줌.
//     { loader: "postcss-loader",        // 브라우저 별 호환을 위해 css 내 변수들에 별도의 접두사가 필요한데 그거 해줌
//       options: {
//           postcssOptions : {
//               plugins : [autoprefixer({ browsers : "cover 99.5%"})]
//           }
//       }
//       },

//     { loader: "scss-loader" },        // sass를 css 문법으로 변환
//   ]),
