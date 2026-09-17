class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printDetails() {
        return `<tr><td>${this.name}</td><td>${this.price}</td></tr>`;
    }
}
updateProductList();

function updateProductList() {
    fetch("./api.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("API-virhe: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const productList = document.getElementById("productList");

            productList.innerHTML = data
                .map(product => `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                `)
                .join("");
        })
        .catch(error => {
            console.error(error);
            document.getElementById("msg").textContent =
                "Tuotteiden lataaminen epäonnistui.";
        });
}

function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    const product = new Product(name, price);

fetch("./api.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
})

.then(response => response.json())

.then(data => {
    document.getElementById("msg").textContent = data.success ? "Tuote lisätty onnistuneesti!" : "Tuotteen lisääminen epäonnistui.";
    updateProductList();
});
}