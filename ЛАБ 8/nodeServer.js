const http = require("http");
const fs = require("fs");

let numbers1 = [];
let numbers2 = [];
let numbers3 = [];
let numbers4 = [];
let numbers5 = [];
let numbers6 = [];
let numbers7 = [];
let numbers8 = [];
let numbers9 = [];
let numbers10 = [];
let numbers = [];
for (let i = 0; i < 80; i++) {
  numbers[i] = Math.random()*100;
  numbers[i] = numbers[i].toFixed(5);
}

fs.writeFile("files/before.txt", JSON.stringify(numbers), function (error) {
  if (error) throw error;
  console.log("Асинхронная запись файла завершена. Содержимое файла:");
  data = fs.readFileSync("files/before.txt", "utf8");
  console.log(JSON.parse(data));
});


for (let i = 0; i < 80; i++) {
    if(i%10==0){
        numbers1.push(numbers[i]);
      }
      if(i == 1 || i == 11 || i == 21 || i == 31 || i == 41 || i == 51 || i == 61 || i == 71){
        numbers2.push(numbers[i]);
      }
      if(i == 2 || i == 12 || i == 22 || i == 32 || i == 42 || i == 52 || i == 62 || i == 72){
        numbers3.push(numbers[i]);
      }
      if(i == 3 || i == 13 || i == 23 || i == 33 || i == 43 || i == 53 || i == 63 || i == 73){
        numbers4.push(numbers[i]);
      }
      if(i == 4 || i == 14 || i == 24 || i == 34 || i == 44 || i == 54 || i == 64 || i == 74){
        numbers5.push(numbers[i]);
      }
      if(i == 5 || i == 15 || i == 25 || i == 35 || i == 45 || i == 55 || i == 65 || i == 75){
        numbers6.push(numbers[i]);
      }
      if(i == 6 || i == 16 || i == 26 || i == 36 || i == 46 || i == 56 || i == 66 || i == 76){
        numbers7.push(numbers[i]);
      }
      if(i == 7 || i == 17 || i == 27 || i == 37 || i == 47 || i == 57 || i == 67 || i == 77){
        numbers8.push(numbers[i]);
      }
      if(i == 8 || i == 18 || i == 28 || i == 38 || i == 48 || i == 58 || i == 68 || i == 78){
        numbers9.push(numbers[i]);
      }
      if(i == 9 || i == 19 || i == 29 || i == 39 || i == 49 || i == 59 || i == 69 || i == 79){
        numbers10.push(numbers[i]);
      }
}

numbers1.sort(function(a, b){
    return b - a;
  })
  numbers2.sort(function(a, b){
    return b - a;
  })
  numbers3.sort(function(a, b){
    return b - a;
  })
  numbers4.sort(function(a, b){
    return b - a;
  })
  numbers5.sort(function(a, b){
    return b - a;
  })
  numbers6.sort(function(a, b){
    return b - a;
  })
  numbers7.sort(function(a, b){
    return b - a;
  })
  numbers8.sort(function(a, b){
    return b - a;
  })
  numbers9.sort(function(a, b){
    return b - a;
  })
  numbers10.sort(function(a, b){
    return b - a;
  })

  let newArr = numbers1.concat(numbers2, numbers3, numbers4, numbers5, numbers6, numbers7, numbers8, numbers9, numbers10) 

  fs.writeFile("files/ascending.txt", JSON.stringify(newArr), function (error) {
    if (error) throw error;
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    data = fs.readFileSync("files/ascending.txt", "utf8");
    console.log(JSON.parse(data));
  });


  
numbers1.sort(function(a, b){
  return a - b;
})
numbers2.sort(function(a, b){
  return a - b;
})
numbers3.sort(function(a, b){
  return a - b;
})
numbers4.sort(function(a, b){
  return a - b;
})
numbers5.sort(function(a, b){
  return a - b;
})
numbers6.sort(function(a, b){
  return a - b;
})
numbers7.sort(function(a, b){
  return a - b;
})
numbers8.sort(function(a, b){
  return a - b;
})
numbers9.sort(function(a, b){
  return a - b;
})
numbers10.sort(function(a, b){
  return a - b;
})

newArr = numbers1.concat(numbers2, numbers3, numbers4, numbers5, numbers6, numbers7, numbers8, numbers9, numbers10) 

  fs.writeFile("files/descending.txt", JSON.stringify(newArr), function (error) {
    if (error) throw error;
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    data = fs.readFileSync("files/descending.txt", "utf8");
    console.log(JSON.parse(data));
  });

let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ЛАБ 8</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <script type="text/javascript" src="../js/jQuery.js"></script>
  </head>
  <body>
    <button id="button1">Вывести отсортированную таблицу (по возрастанию)</button>
    <button id="button2">Вывести отсортированную таблицу (по убыванию)</button>
    <label name="description">Выберите количество цифр после запятой (по умолчанию число знаков после нуля равно 5):</label>
    <label for="checkbox1"><input type="checkbox" name="checkbox1">-1</label>
    <label for="checkbox2"><input type="checkbox" name="checkbox2">-1</label>
    <label for="checkbox3"><input type="checkbox" name="checkbox3">-1</label>
    <label for="checkbox4"><input type="checkbox" name="checkbox4">-1</label>
    <table>
    <tr><td>${numbers[0]}</td><td>${numbers[1]}</td><td>${numbers[2]}</td><td>${numbers[3]}</td><td>${numbers[4]}</td><td>${numbers[5]}</td><td>${numbers[6]}</td><td>${numbers[7]}</td><td>${numbers[8]}</td><td>${numbers[9]}</td></tr>
    <tr><td>${numbers[10]}</td><td>${numbers[11]}</td><td>${numbers[12]}</td><td>${numbers[13]}</td><td>${numbers[14]}</td><td>${numbers[15]}</td><td>${numbers[16]}</td><td>${numbers[17]}</td><td>${numbers[18]}</td><td>${numbers[19]}</td></tr>
    <tr><td>${numbers[20]}</td><td>${numbers[21]}</td><td>${numbers[22]}</td><td>${numbers[23]}</td><td>${numbers[24]}</td><td>${numbers[25]}</td><td>${numbers[26]}</td><td>${numbers[27]}</td><td>${numbers[28]}</td><td>${numbers[29]}</td></tr>
    <tr><td>${numbers[30]}</td><td>${numbers[31]}</td><td>${numbers[32]}</td><td>${numbers[33]}</td><td>${numbers[34]}</td><td>${numbers[35]}</td><td>${numbers[36]}</td><td>${numbers[37]}</td><td>${numbers[38]}</td><td>${numbers[39]}</td></tr>
    <tr><td>${numbers[40]}</td><td>${numbers[41]}</td><td>${numbers[42]}</td><td>${numbers[43]}</td><td>${numbers[44]}</td><td>${numbers[45]}</td><td>${numbers[46]}</td><td>${numbers[47]}</td><td>${numbers[48]}</td><td>${numbers[49]}</td></tr>
    <tr><td>${numbers[50]}</td><td>${numbers[51]}</td><td>${numbers[52]}</td><td>${numbers[53]}</td><td>${numbers[54]}</td><td>${numbers[55]}</td><td>${numbers[56]}</td><td>${numbers[57]}</td><td>${numbers[58]}</td><td>${numbers[59]}</td></tr>
    <tr><td>${numbers[60]}</td><td>${numbers[61]}</td><td>${numbers[62]}</td><td>${numbers[63]}</td><td>${numbers[64]}</td><td>${numbers[65]}</td><td>${numbers[66]}</td><td>${numbers[67]}</td><td>${numbers[68]}</td><td>${numbers[69]}</td></tr>
    <tr><td>${numbers[70]}</td><td>${numbers[71]}</td><td>${numbers[72]}</td><td>${numbers[73]}</td><td>${numbers[74]}</td><td>${numbers[75]}</td><td>${numbers[76]}</td><td>${numbers[77]}</td><td>${numbers[78]}</td><td>${numbers[79]}</td></tr>
    </table>
    <script type="text/javascript" src="../js/script.js"></script>
  </body>
</html>`;
let css = "";
fs.readFile("css/style.css", "utf8", function (error, data) {
  css = data;
});
let js = "";
fs.readFile("js/script.js", "utf8", function (error, data) {
  js = data;
});
let jQuery = "";
fs.readFile("js/jQuery.js", "utf8", function (error, data) {
  jQuery = data;
});

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        break;
      case "/css/style.css":
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
        break;
      case "/js/script.js":
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(js);
        break;
      case "/js/jQuery.js":
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(jQuery);
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404.Не найдено");
    }
  })
  .listen(3000, () => console.log("Сервер работает"));
