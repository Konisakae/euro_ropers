var labels = [];

var ptos = 0;

while (ptos <= 21) {
  labels.push(ptos);
  ptos++;
}
const data = {
  labels: labels,
  datasets: [
     {
      label: "Eva",
      display: false,
      backgroundColor: "#E035387F",
      borderColor: "#E03538",
      data: [
        0, 5, 10, 11, 14, 15, 16, 19, 20, 21, 22, 25, 26, 31, 31, 34, 39, 42, 42,42,47,47,47],
    },
     {
      label: "Javi",
      backgroundColor: "#4273577F",
      borderColor: "#427357",
      data: [
        0, 3, 8, 8, 10, 13, 16, 18, 21, 22, 23, 25, 25, 30, 33, 35, 38, 39,44,45,45,46,46 ],
    },
   
   
    {
      label: "Abuelo",
      display: false,
      backgroundColor: "#F681457f",
      borderColor: "#F68145",
      data: [0, 2, 3, 3, 6, 8, 10, 15, 16, 17, 18, 21, 21, 22, 27, 30, 32, 37, 42,43,44,44,44],
    },
    {
      label: "Lucas",
      backgroundColor: "#52A4757F",
      borderColor: "#52A475",
      data: [0, 3, 4, 5, 8, 11, 13, 15, 15, 16, 16, 18, 20, 21, 26, 29, 31, 34, 37,39,40,40,40],
    },
    {
      label: "Asier",
      display: false,
      backgroundColor: "#1A6F957F",
      borderColor: "#1A6F95",
      data: [0, 1, 2, 3, 5, 7, 10, 12, 12, 12, 12, 12, 14, 15, 20, 23, 25, 30, 35,36,37,37,37],
    },
       {
      label: "Nic",
      backgroundColor: "#9EDBA37F",
      borderColor: "#9EDBA3",
      data: [0, 1, 1, 1, 3, 4, 5, 8, 8, 8, 9, 12, 13, 13, 16, 19, 22, 25, 28,29,34,35,35],
    },
     {
      label: "Josemanuel",
      display: false,
      backgroundColor: "#39464A7F",
      borderColor: "#39464A",
      data: [0, 2, 2, 2, 5, 5, 5, 7, 10, 11, 11, 14, 14, 16, 16, 18, 20, 25, 30,31,32,33,33],
    },
    {
      label: "Pablo N.",
      display: false,
      backgroundColor: "#FDD46B7F",
      borderColor: "#FDD46B",
      data: [
        0, 2, 7, 8, 11, 12, 12, 14, 17, 18, 18, 20, 20, 22, 22, 25, 26, 29, 30,31,32,32,32],
    },
   

 
    
    {
      label: "Darío",
      backgroundColor: "#5F2D407F",
      borderColor: "#5F2D40",
      data: [0, 3, 4, 5, 8, 9, 11, 13, 13, 14, 15, 17, 19, 20, 23, 25, 25, 25, 25,27,28,28,29],
    },
    {
      label: "Pablo",
      backgroundColor: "#68A8D77F",
      borderColor: "#68A8D7",
      data: [0, 1, 3, 4, 5, 6, 6, 6, 7, 7, 12, 13, 14, 14, 15, 15, 16, 17, 18,18, 20,22,14],
    },
  ],
};
