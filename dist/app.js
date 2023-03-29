"use strict";
// Fetching Data from FakeStoreAPi 
// 
fetch("https://fakestoreapi.com/products")
    .then((data) => {
    return data.json();
})
    .then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"width="100" /></td>
      </tr>`;
    });
    const tableBody = document.getElementById("tableBody");
    if (tableBody) {
        tableBody.innerHTML = tableData;
    }
})
    .catch((err) => {
    console.error(err, "Error in fetching data");
});
//# sourceMappingURL=app.js.map