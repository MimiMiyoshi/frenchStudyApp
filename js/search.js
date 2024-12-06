$("button").on("click", function () {
  // 動作チェックしましょう🤗
  fetchPokemons();
});

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyBg0aAPYo65Z18rwn8m3k3pGjuOnR2LiPY");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

//   // 2つめのおまじない→ポケモンのデータを取得している場所🤗
// const getAnswer = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     console.log(res, "中身をチェック！resとはレスポンスの意味です🤗");
//     const pokemon = await res.json();
//     console.log(pokemon, "中身をチェック");
//   // この次はこの後書きますが、まずは動かすにはどうするのか？？を学習していただきます🤗注意！この状態ではまだ動いていません🤗
//     // 3つめのおまじないに、jsの形に変換した塊を渡してあげる(pokemonと言う箱が)🤗
//     createPokemon(pokemon);
//   };
