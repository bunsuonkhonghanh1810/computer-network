document.addEventListener('DOMContentLoaded', () => {
    // Lấy các element từ HTML
    const searchBar = document.getElementById('search-bar');
    const resultsContainer = document.getElementById('results-container');
    const mainPage = document.getElementById('main-page');
    const answerPage = document.getElementById('answer-page');
    const questionTitle = document.getElementById('question-title');
    const answerList = document.getElementById('answer-list');
    const backButton = document.getElementById('back-button');

    // Hàm chuẩn hóa chuỗi: chuyển thành chữ thường và loại bỏ dấu tiếng Việt
    const normalizeString = (str) => {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Hàm hiển thị kết quả tìm kiếm
    const displayResults = (results) => {
        resultsContainer.innerHTML = ''; // Xóa kết quả cũ

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>Không tìm thấy câu hỏi phù hợp.</p>';
            return;
        }

        results.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-item';
            resultDiv.textContent = item.question;
            
            // Thêm sự kiện click để xem chi tiết đáp án
            resultDiv.addEventListener('click', () => {
                showAnswer(item);
            });

            resultsContainer.appendChild(resultDiv);
        });
    };

    // Hàm hiển thị trang đáp án
    const showAnswer = (item) => {
        mainPage.classList.add('hidden'); // Ẩn trang chủ
        answerPage.classList.remove('hidden'); // Hiện trang đáp án

        questionTitle.textContent = item.question;
        answerList.innerHTML = ''; // Xóa đáp án cũ

        // Xử lý trường hợp có nhiều đáp án (cách nhau bởi dấu xuống dòng)
        const answers = item.answer.split('\n');
        answers.forEach(ans => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-item';
            answerDiv.textContent = ans;
            answerList.appendChild(answerDiv);
        });
    };

    // Sự kiện khi người dùng nhập vào thanh tìm kiếm
    const clearBtn = document.getElementById('clear-search');

    const updateClearButtonVisibility = (value) => {
        if (!clearBtn) return;
        if (value && value.length >= 1) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    };

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const normalizedSearchTerm = normalizeString(searchTerm);

        // Show clear button as soon as there's at least 1 character
        updateClearButtonVisibility(searchTerm);

        if (searchTerm.length < 2) { // Chỉ tìm khi nhập ít nhất 2 ký tự
            resultsContainer.innerHTML = '';
            return;
        }

        // Lọc câu hỏi từ dữ liệu
        const filteredQuestions = ALL_QUESTIONS.filter(q => 
            normalizeString(q.question).includes(normalizedSearchTerm)
        );

        displayResults(filteredQuestions);
    });

    // Clear button behavior: clear input, hide results, focus input
    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchBar.value = '';
            updateClearButtonVisibility('');
            resultsContainer.innerHTML = '';
            searchBar.focus();
        });
    }

    // Sự kiện khi nhấn nút "Quay Lại"
    backButton.addEventListener('click', () => {
        answerPage.classList.add('hidden'); // Ẩn trang đáp án
        mainPage.classList.remove('hidden'); // Hiện lại trang chủ
    });
});