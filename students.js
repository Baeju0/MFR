// 학생 성적 데이터
const students = [
    {name: 'Alice', scores: {math: 85, english: 92, science: 88}},
    {name: 'Bob', scores: {math: 76, english: 81, science: 95}},
    {name: 'Charlie', scores: {math: 89, english: 74, science: 91}},
    {name: 'David', scores: {math: 80, english: 85, science: 87}},
    {name: 'Eve', scores: {math: 90, english: 93, science: 99}}
];

// 1. 학생들의 평균 점수 계산(map)
const studentsWithAverage = students.map(function (student) {
    let studentScore = Object.values(student.scores);
    let studentAvg = studentScore.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
    return studentAvg/studentScore.length;
});
console.log("학생들의 평균 점수:", studentsWithAverage);


// 2. 평균 점수가 85점 이상인 학생 필터링(filter)
const highAchievers = studentsWithAverage.filter(function (score) {
    return score >= 85;
});
console.log("우수 학생들:", highAchievers);


// 3. 전체 학생들의 평균 점수 계산 (reduce)
const totalAverageScore = studentsWithAverage.reduce(function (avgP, StudentS) {
    return avgP + StudentS;
}, 0)/ students.length;
console.log("전체 평균 점수:", totalAverageScore);


// 4. 최고 평균 점수를 받은 학생 찾기 (reduce)
// const topStudent = '';
const topStudent = studentsWithAverage.reduce(function (bigyo, stAvg) {
    if (stAvg > bigyo) {
        return stAvg;
    } else {
        return bigyo;
    }
}, 0);
console.log("최고 평균 점수를 받은 학생:", topStudent);


// 5. 수학에서 최고 점수를 받은 학생 찾기 (reduce)
// const topMathStudent = '';
const topMathStudent = students.map(function (st) {
    let maScore = Object.values(st.scores);
    return {name: st.name, scores : maScore[0]};
});
console.log("수학에서 최고 점수를 받은 학생:", topMathStudent);


// 6. 모든 학생들의 점수를 과목별로 합치기 (reduce)
const subjectScores = '';
console.log("과목별 점수 합계:", subjectScores);


// 7. 과목별 평균 점수 계산하기 (map)
const subjectAverages = '';
console.log("과목별 평균 점수:", subjectAverages);

