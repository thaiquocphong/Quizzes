const quizData = [
    {
        question: "Trong chương trình Scratch bạn có thể làm được gì?",
        a: "Trò chơi",
        b: "Ứng dụng",
        c: "Hoạt ảnh",
        d: "Tất cả đều đúng",
        correct: "d",
    },
    {
        question: "Cụm từ nào dưới đây thể hiện đúng cho CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Central Simple Style Sheets",
        correct: "b",
    },
    {
        question: "Ngôn ngữ HTML là viết tắt của cụm từ nào dưới đây?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext and links markup language",
        correct: "a",
    },
    {
        question: "Trong CODE.ORG, các nhóm tuổi có thể học lập trình?",
        a: "4-7 tuổi",
        b: "7-14 tuổi",
        c: "14-18 tuổi",
        d: "Tất cả đều đúng",
        correct: "d",
    },
    {
        question: "Thunkable là flatform dùng để lập trình ra các sản phẩm chạy trên?",
        a: "Smartphone",
        b: "Laptop",
        c: "Desktop",
        d: "Ipad",
        correct: "a",
    },
    {
        question: "Cospaces edu là công cụ lập trình tạo sản phẩm chủ yếu trên?",
        a: "2D",
        b: "1D",
        c: "3D",
        d: "Tất cả đều sai",
        correct: "c",
    },
    {
        question: "Để có một website đẹp chúng ta cần dùng gì để làm?",
        a: "HTML CSS JS",
        b: "Python",
        c: "MySQL/SQL Server",
        d: "Dùng tất cả",
        correct: "d",
    },
    {
        question: "Ngôn ngữ lập trình nào được đánh giá là mạnh nhất?",
        a: "C/C++",
        b: "Python",
        c: "Java",
        d: "Tùy thuộc",
        correct: "d",
    },
]

var quiz = document.querySelector('#quiz')

var question = document.querySelector('#question')

var text_a = document.querySelector('#a_text')
var text_b = document.querySelector('#b_text')
var text_c = document.querySelector('#c_text')
var text_d = document.querySelector('#d_text')

var answerList = document.querySelectorAll('.answer')

var submit = document.querySelector('#submit')

var currentQuestion = 0
var score = 0

function loadQuestion() {
    uncheck()

    question.innerHTML = quizData[currentQuestion].question
    text_a.innerHTML = quizData[currentQuestion].a
    text_b.innerHTML = quizData[currentQuestion].b
    text_c.innerHTML = quizData[currentQuestion].c
    text_d.innerHTML = quizData[currentQuestion].d
}

loadQuestion()

function uncheck() {
    answerList.forEach((answer) => answer.checked = false)
}

function getAnswer() {
    var answer = undefined

    answerList.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id
        }
    })
    return answer
}

submit.addEventListener('click', () => {
    const answer = getAnswer()
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++
        if (currentQuestion < quizData.length) {
            loadQuestion()
        } else {
            quiz.innerHTML = `<h2>Xin chúc mừng! Bạn đã hoàn thành bài kiểm, điểm của bạn là: ${score}/${quizData.length}</h2> <button onclick="location.reload()">Bắt đầu lại</button>`
        }
    }
}) 