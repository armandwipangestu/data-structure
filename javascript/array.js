/*
╭── Array ─────────────────────────────────────────────────────────────────╮
│  Membuat variable Array dengan keyword:                                  │
│  * var_type var_name = ["value1", "value2", value3]                      │
│                                                                          │
│  Value pada array dapat berisi berbagai macam tipe data                  │
│  string, integer, object, dll                                            │
╰──────────────────────────────────────────────────────────────────────────╯
*/

const arr = ["a", "b", "c", "d"];
console.log(arr[2]); // c

/*
╭── Array Length ──────────────────────────────────────────────────────────╮
│  Array Length merupakan API dari javascript untuk mengetahui jumlah      │
│  value dari array, untuk menggunakan API ini gunakan keyword:            │
│  * var_name.length                                                       │
│                                                                          │
│  Value dari API ini berisi integer jumlah value dari variable array      │
╰──────────────────────────────────────────────────────────────────────────╯
*/

console.log(arr.length); // 4

/*
╭── Multi Dimensi Array ───────────────────────────────────────────────────╮
│  Multi Dimensi Array adalah Array yang berada di dalam Array             │
│  untuk menggunakan API ini gunakan keyword:                              │
│  * var_type var_name = [                                                 │
│       [value1, value2, value3],                                          │
│       [value4, value5, value6],                                          │
│       [value7, value8, value9],                                          │
│    ]                                                                     │
╰──────────────────────────────────────────────────────────────────────────╯
*/

const arr_multidimension = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr_multidimension);
