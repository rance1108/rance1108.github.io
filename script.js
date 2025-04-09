document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // !!! 重要：這裡先用一個佔位符 URL
    // !!! 稍後在部署 FastAPI 後，你需要將其替換為你後端的實際 URL
    const apiUrl = 'YOUR_FASTAPI_BACKEND_URL/api/data'; // <--- 稍後修改這裡

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP 錯誤！ 狀態: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // 假設後端返回 { "message": "來自 FastAPI 的資料！" }
            dataContainer.textContent = data.message || JSON.stringify(data);
        })
        .catch(error => {
            console.error('無法獲取資料:', error);
            dataContainer.textContent = `無法載入資料：${error.message}`;
            dataContainer.style.color = 'red';
        });
});