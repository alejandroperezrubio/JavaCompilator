// Extract headers
var col = [];
for (var i = 0; i < tokenTable.length; i++) {
    for (var key in tokenTable[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

// Table element
var table = document.createElement("table");

// Table headers
var tr = table.insertRow(-1);                   // TABLE ROW.

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.className = "table_header";      // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
}

// Add data as rows
for (var i = 0; i < tokenTable.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        var p = document.createElement("span");
        p.className = "chips_container";
        if(j===1){
            for(var n = 0; n < tokenTable[i][col[1]].length; n++){
                var chip = document.createElement("span");
                chip.className = "chip";
                chip.innerHTML = tokenTable[i][col[1]][n];
                p.appendChild(chip);
            }
            tabCell.appendChild(p);
        }else{
            p.innerHTML = tokenTable[i][col[j]];
            tabCell.appendChild(p);
        }
    }
}

// Add table to container
var divContainer = document.getElementById("showData");
divContainer.appendChild(table);
