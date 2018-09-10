// Primeiro pegue o elemento <table>
// que ja esta la no HTML.
const table = document.querySelector("table")

// Depois defina um tamanho para
// a nossa tabela. Tamanho significa
// numero de celulas e colunas.
const size = 4
// Inicial uma lista que ira conter
// todos os <td>s da pagina organizados
// como eles estao arganizados na pagina.
let matrix = []
// Entao crie um loop que vai rodar por todas
// as celulas da tabela. Ele tera um loop dentro
// do outro, o loop externo sera pelas linhas
// e o interno pelas celulas de cada linha.
for (let i = 0; i < size; i++) {
	// Crie um novo elemento <tr> que ira
	// receber todos os <td>
	const row = document.createElement("tr")
	// Crie uma nova lista para colocar na 
	// nova `matrix`.
	let cell_list = []
	for (let j = 0; j < size; j++) {
		// Crie um novo elemento <td>.
		const cell = document.createElement("td")
		// Coloque esse elemento dentro la <tr>
		// que criamos no loop externo.
		row.appendChild(cell)
		// Coloque o novo <td> criado dentro
		// da nossa `matrix`.
		cell_list.push(cell)
	}
	// Coloque o <tr> recem populado, dentro
	// da nossa <table>.
	table.appendChild(row)
	// Coloca a nova linha dentro da nossa `matrix`.
	matrix.push(cell_list)
}
var backgroundImage =[ "url(01.gif)", "url(02.gif)", "url(03.gif)", "url(04.gif)", "url(05.gif)", "url(06.gif)" , "url(07.gif)", "url(08.gif)", "url(09.gif)", "url(10.gif)", "url(11.gif)", "url(12.gif)", "url(13.gif)" , "url(14.gif)" , "url(15.gif)" , "url(16.gif)" , "url(17.gif)" , "url(18.gif)" , "url(19.gif)" , "url(20.gif)"  ]
for (const [row_index, row] of matrix.entries()) {
	for (const [cell_index, cell] of row.entries()) {
		// Para cada celula na tabela,
		// escute pelo envento de clique.
		cell.addEventListener("click", event => {
            cell.style.backgroundImage = backgroundImage[Math.floor(Math.random()*backgroundImage.length)]

    





			// Primeiro tire a pintura
			// de todos os elementos pintados.
			// for (const painted_cell of document.querySelectorAll("backgroundImage")) {
			// 	//painted_cell.classList.remove("painted")
			// }

			// Agora pinte todos os elementos
			// da mesma linha do elemento atual.
			// for (const cell_to_paint of matrix[row_index]) {
			// 	cell_to_paint.style.backgroundImage = backgroundImage[Math.floor(Math.random()*backgroundImage.length)]
			// }
			
			// // Agora pinte todos os elementos
			// // da mesma coluna do elemento atual.
			// for (const row_to_paint of matrix) {
			// 	row_to_paint[cell_index].style.backgroundImage = backgroundImage [Math.floor(Math.random()*backgroundImage.length)]
			// }
		})
	}
}