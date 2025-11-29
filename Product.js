// ===================== HÀM RENDER SẢN PHẨM ========================

function renderProducts(list) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <!-- Nếu ảnh lỗi thì hiện ảnh thay thế -->
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/150'">
                <h3>${p.name}</h3>
                <p class="price">${p.price}</p>
            </div>
        `;
    });
}