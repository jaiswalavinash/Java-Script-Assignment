let mybtn1 = document.getElementById("fetchBtn");
let mybtn2 = document.getElementById("backupBtn");

// div with id content
let content = document.getElementById("content");
function getData() {
  url = "https://jsonplaceholder.typicode.com/todos";
  const fetchRes = fetch(url);
  fetchRes
    .then((res) => res.json())
    .then((d) => {
      mybtn1.addEventListener("click", () => {
        for (i = 0; i < d.length; i++) {
          if ((d[i].completed = true)) {
            let para = document.createElement("p");
            para.innerHTML = JSON.stringify(d[i]);
            content.appendChild(para);
            console.log(d[i]);
          }
        }
      });
      mybtn2.addEventListener("click", () => {
        console.log("avinash");
        for (i = 0; i < d.length; i++) {
          if (d[i].completed != true) {
            let para = document.createElement("p");
            para.innerHTML = JSON.stringify(d[i]);
            content.appendChild(para);
            console.log(d[i]);
          }
        }
      });
    });
}
getData();
