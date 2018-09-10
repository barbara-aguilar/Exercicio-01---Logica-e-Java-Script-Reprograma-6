// Primeiro pegue o elemento <table>
// que ja esta la no HTML.
const table = document.querySelector("table")

// Depois defina um tamanho para
// a nossa tabela. Tamanho significa
// numero de celulas e colunas.
const size = 4

let matrix = []

for (let i = 0; i < size; i++) {

	const row = document.createElement("tr")

	let cell_list = []
	for (let j = 0; j < size; j++) {

		const cell = document.createElement("td")

		row.appendChild(cell)

		cell_list.push(cell)
	}

	table.appendChild(row)

	matrix.push(cell_list)
}
const frase = document.querySelector("p")
var backgroundImage =[ ["url(01.gif)", "Olha o risca faca"], ["url(02.gif)", "Estou muito excitada"], ["url(03.gif)","ta bom querida"], ["url(04.gif)","ta bom Claudia, senta lá!"], ["url(05.gif)", "eita a marmita ta fria."], ["url(06.gif)", "socorrrr"] , ["url(07.gif)", "depois do feedback fiquei abalada"], ["url(08.gif)","beijo Silvia"], ["url(09.gif)", "vamos ta se beijanu?"], ["url(10.gif)", "o código não rodou"], ["url(11.gif)"," uhuuul é sexta feira, tem chopp grátis"], ["url(12.gif)","não entendirrrr"], ["url(14.gif)","olha linda, não liga pros boy"] ,  ["url(15.gif)", "derreti no javascript"] , ["url(16.gif)", "aiiin achei que ia ser só o css, ta foda o js"] , ["url(17.gif)", "vamos tomar só hum chopp.... ops causando no quarto andar"] , ["url(18.gif)", "quenhé JS???"] , ["url(19.gif)", "o código rodou!!! Vitória"] , ["url(20.gif)","nauum aguento maiiiisss"]  ]
for (const [row_index, row] of matrix.entries()) {
	for (const [cell_index, cell] of row.entries()) {

		cell.addEventListener("click", event => {
			for (const painted_cell of document.querySelectorAll("td")) {
				painted_cell.style.backgroundImage = ""
			}
			const rand = Math.floor(Math.random()*backgroundImage.length)
			cell.style.backgroundImage = backgroundImage[rand][0]
			frase.innerHTML= backgroundImage[rand][1]

			
		})
	}
}