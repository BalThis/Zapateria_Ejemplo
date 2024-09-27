	var datos={};
	var misDatos=(info)=>{
		  console.log(info);
		  datos.productos=info;
		  var html="";
		  html+="<h2>Productos</h2>";
		  html+="<table>";
		  html+="<tr>";
		  html+="<th>FOLIO</th>";
		  html+="<th>DESCRIPCION</th>";
		  html+="<th>TALLA</th>";
		  html+="<th>PRECIO</th>";
		  html+="</tr>";
		  html+="<tbody>";
		  datos.productos.map(producto=>{
			html+="<tr>";
			html+="<td>"+producto.folio+"</td>";
			html+="<td>"+producto.descripcion+"</td>";
			html+="<td>"+producto.talla+"</td>";
			html+="<td>"+producto.precio+"</td>";
			html+="</tr>";
		  });
		  html+="</tbody>";
		  html+="</table>";
		  document.getElementById("res").innerHTML=html;
	};

	misDatos([
		{
			"folio": 1,
			"descripcion": "Botas de piel marrón, tacón alto, punta redonda.", 
			"talla": "24 MX",
			"precio": "2500 MXN", 
		},
		{
			"folio": 2,
			"descripcion": "Sandalias de playa, color rosa, suela de corcho.", 
			"talla": "22 MX",
			"precio": "499 MXN", 
		},
		{
			"folio": 3,
			"descripcion": "Tenis casuales Adidas, color gris, suela de goma.", 
			"talla": "28 MX",
			"precio": "899 MXN", 
		},
		{
			"folio": 4,
			"descripcion": "Zapatillas de ballet, color negro, punta en pico.", 
			"talla": "23 MX",
			"precio": "650 MXN", 
		},
		{
			"folio": 5,
			"descripcion": "Botines de invierno, color negro, forro de piel.", 
			"talla": "20 MX",
			"precio": "1800 MXN", 
		}
	]);