var customers = [
	{ id: 1000, 
		name: "Waldorf Electronics", 
		address: "123 Any Street",
		city: "Berlin",
		state: "Germany",
		postalcode: "ABC123",
		creditlimit: 100000
	},
	{ id: 1010, 
		name: "Google", 
		address: "1 Google Way",
		city: "Mountain View",
		state: "California",
		postalcode: "12345",
		creditlimit: 1000000
	},
	{ id: 1020, 
		name: "Native Instruments", 
		address: "2 Guitar Way",
		city: "New York",
		state: "New York",
		postalcode: "10101",
		creditlimit: 10000
	}
];

function listCustomers() {
	var id, name, address, csz, creditlimit;

	for(var idx = 0; idx < customers.length; idx++) {
		id = customers[idx].id;
		name = customers[idx].name;
		address = customers[idx].address;
		csz = customers[idx].city + ", " + customers[idx].state + " | " + customers[idx].postalcode;
		creditlimit = parseInt(customers[idx].creditlimit);

		formatTableRow(id, name, address, csz, creditlimit);
	}
}

function formatTableRow(id, name, address, csz, creditlimit) {
	var tbodyCtrl = document.getElementById("customerTable");
	var trCtrl = document.createElement("tr");
	tbodyCtrl.appendChild(trCtrl);

	formatTableData(trCtrl, id);
	formatTableData(trCtrl, name);
	formatTableData(trCtrl, address);
	formatTableData(trCtrl, csz);
	formatTableData(trCtrl, creditlimit);
}

function formatTableData(trCtrl, data) {
	var tdCtrl = document.createElement("td");
	trCtrl.appendChild(tdCtrl);
	var textCtrl = document.createTextNode(data);
	tdCtrl.appendChild(textCtrl);
}