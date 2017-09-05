var produtos = 
				[ {"categoria": "Bebidas Quentes", "itens" : 
						[
							{"id":"1", "item":"Café Expresso", "preco":"R$5.50"},
							{"id":"2", "item":"Café Capuccino", "preco":"R$10.00"},
							{"id":"3", "item":"Chá Preto", "preco":"R$4.00"},
							{"id":"4", "item":"Chá Verde", "preco":"R$6.00"},
							{"id":"5", "item":"Chá de Camomila", "preco":"R$2.50"},
							{"id":"6", "item":"Chá de Maçã", "preco":"R$2.50"},
							{"id":"7", "item":"Chocolate Quente", "preco":"R$4.50"}
						]
			  	  },
					{"categoria": "Bebidas Frias",	"itens" : 
						[
							{"id":"8", "item":"Suco de Laranja", "preco":"R$50.00"},
							{"id":"9", "item":"Suco de Abacaxi", "preco":"R$1.00"},
							{"id": "10", "item": "Refrigerantes", "preco": "R$10.00"},
							{"id": "11", "item": "Frapê de Morango", "preco": "R$7.00"},
							{"id": "12", "item": "Frapê de Uva", "preco": "R$7.00"},
							{"id": "13", "item": "Frapê de Nutella", "preco": "R$7.50"},
							{"id": "14", "item": "Milkshakes", "preco": "R$2.00"}
						]
					},
					{"categoria": "Lanches",	"itens" : 
						[
							{"id":"15", "item":"Misto quente", "preco":"R$1.50"},
							{"id":"16", "item":"Queijo quente", "preco":"R$1.00"},
							{"id":"17", "item":"Pão de Queijo", "preco":"R$2.50"}
						]
					}
				];
				
function carregarPedidos() {
				$("#pedidos tbody").empty();
					var total = 0;
					$.each(pedidos, function(indice, pedido){
						$("#pedidos tbody")
							.append($("<tr />")
								.attr("id", pedido.id)
								.append($("<td />").text(pedido.nome))
								.append($("<td />").text(pedido.quantidade))
								.append($("<td />").text(pedido.valorUnitario))
								.append($("<td />").text(pedido.valorTotal()))
								.append($("<td />")
									.append($("<span />")
										.addClass("glyphicon")
										.addClass("glyphicon-trash")
										.addClass("lixeira")
									)
								)
							);
						total = total + pedido.valorTotal();

					});

					$("#valor-total").text(total);
			}