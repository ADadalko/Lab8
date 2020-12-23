let numbers = [];
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

$("button:first").on("click", function () {
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
let column1 = [0, 10, 20, 30, 40, 50, 60, 70];
let column2 = [1, 11, 21, 31, 41, 51, 61, 71];
let column3 = [2, 12, 22, 32, 42, 52, 62, 72];
let column4 = [3, 13, 23, 33, 43, 53, 63, 73];
let column5 = [4, 14, 24, 34, 44, 54, 64, 74];
let column6 = [5, 15, 25, 35, 45, 55, 65, 75];
let column7 = [6, 16, 26, 36, 46, 56, 66, 76];
let column8 = [7, 17, 27, 37, 47, 57, 67, 77];
let column9 = [8, 18, 28, 38, 48, 58, 68, 78];
let column10 = [9, 19, 29, 39, 49, 59, 69, 79];
  let values = [];
  $('input[type="checkbox"]:checked').each(function () {
    values.push($(this).val());
  });
  counter = 5 - values.length; //счетчик знаков после запятой
  alert(counter);
  for (let i = 0; i < 80; i++) {
    numbers[i] = $(`td:eq(${i})`).html();
    numbers[i] = parseFloat(numbers[i]).toFixed(counter);
    $(`td:eq(${i})`).text(numbers[i]);
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
  alert(numbers1);
  for (let i = 0; i < 80; i++) {
    $(`td:eq(${column1[i]})`).html(numbers1[i]);
    $(`td:eq(${column2[i]})`).html(numbers2[i]);
    $(`td:eq(${column3[i]})`).html(numbers3[i]);
    $(`td:eq(${column4[i]})`).html(numbers4[i]);
    $(`td:eq(${column5[i]})`).html(numbers5[i]);
    $(`td:eq(${column6[i]})`).html(numbers6[i]);
    $(`td:eq(${column7[i]})`).html(numbers7[i]);
    $(`td:eq(${column8[i]})`).html(numbers8[i]);
    $(`td:eq(${column9[i]})`).html(numbers9[i]);
    $(`td:eq(${column10[i]})`).html(numbers10[i]);
  }
});

$("button:last").on("click", function () {
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
  let column1 = [0, 10, 20, 30, 40, 50, 60, 70];
  let column2 = [1, 11, 21, 31, 41, 51, 61, 71];
  let column3 = [2, 12, 22, 32, 42, 52, 62, 72];
  let column4 = [3, 13, 23, 33, 43, 53, 63, 73];
  let column5 = [4, 14, 24, 34, 44, 54, 64, 74];
  let column6 = [5, 15, 25, 35, 45, 55, 65, 75];
  let column7 = [6, 16, 26, 36, 46, 56, 66, 76];
  let column8 = [7, 17, 27, 37, 47, 57, 67, 77];
  let column9 = [8, 18, 28, 38, 48, 58, 68, 78];
  let column10 = [9, 19, 29, 39, 49, 59, 69, 79];
    let values = [];
    $('input[type="checkbox"]:checked').each(function () {
      values.push($(this).val());
    });
    counter = 5 - values.length; //счетчик знаков после запятой
    alert(counter);
    for (let i = 0; i < 80; i++) {
      numbers[i] = $(`td:eq(${i})`).html();
      numbers[i] = parseFloat(numbers[i]).toFixed(counter);
      $(`td:eq(${i})`).text(numbers[i]);
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
    alert(numbers1);
    for (let i = 0; i < 80; i++) {
      $(`td:eq(${column1[i]})`).html(numbers1[i]);
      $(`td:eq(${column2[i]})`).html(numbers2[i]);
      $(`td:eq(${column3[i]})`).html(numbers3[i]);
      $(`td:eq(${column4[i]})`).html(numbers4[i]);
      $(`td:eq(${column5[i]})`).html(numbers5[i]);
      $(`td:eq(${column6[i]})`).html(numbers6[i]);
      $(`td:eq(${column7[i]})`).html(numbers7[i]);
      $(`td:eq(${column8[i]})`).html(numbers8[i]);
      $(`td:eq(${column9[i]})`).html(numbers9[i]);
      $(`td:eq(${column10[i]})`).html(numbers10[i]);
    }
  });