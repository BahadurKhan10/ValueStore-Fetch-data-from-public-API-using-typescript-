// Fetching Data from FakeStoreAPi 
// 

interface ItemDetails {
    title: string;
    description: string;
    price: number;
    image: string;
  }


fetch("https://fakestoreapi.com/products")
  .then((data: Response) => {
    return data.json();
  })
  .then((objectData: ItemDetails[]) => {
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
  .catch((err: Error) => {
    console.error(err, "Error in fetching data");
  });



