// Select all score input fields
const scoreInputs = document.querySelectorAll(".score");

// Add an input event to every score input
scoreInputs.forEach(function (input) {

    input.addEventListener("input", function () {

        // Get the row containing the input
        const row = input.closest("tr");

        // Select the four score inputs in this row
        const ca1Input = row.querySelector(".ca1");
        const ca2Input = row.querySelector(".ca2");
        const ca3Input = row.querySelector(".ca3");
        const examInput = row.querySelector(".exam");

        // Convert input values to numbers
        let ca1 = Number(ca1Input.value);
        let ca2 = Number(ca2Input.value);
        let ca3 = Number(ca3Input.value);
        let exam = Number(examInput.value);

        // Validate CA scores
        if (ca1 > 10) {
            ca1 = 10;
            ca1Input.value = 10;
            alert("CA 1 cannot be more than 10.");
        }

        if (ca2 > 10) {
            ca2 = 10;
            ca2Input.value = 10;
            alert("CA 2 cannot be more than 10.");
        }

        if (ca3 > 10) {
            ca3 = 10;
            ca3Input.value = 10;
            alert("CA 3 cannot be more than 10.");
        }

        // Validate Exam score
        if (exam > 70) {
            exam = 70;
            examInput.value = 70;
            alert("Exam score cannot be more than 70.");
        }

        // Prevent negative scores
        if (ca1 < 0) {
            ca1 = 0;
            ca1Input.value = 0;
        }

        if (ca2 < 0) {
            ca2 = 0;
            ca2Input.value = 0;
        }

        if (ca3 < 0) {
            ca3 = 0;
            ca3Input.value = 0;
        }

        if (exam < 0) {
            exam = 0;
            examInput.value = 0;
        }

        // Calculate total score
        const total = ca1 + ca2 + ca3 + exam;

        // Find the Total and Grade cells
        const totalCell = row.querySelector(".total");
        const gradeCell = row.querySelector(".grade");

        // Display the total
        totalCell.textContent = total;

        // Determine the grade
        let grade;

        if (total >= 70) {
            grade = "A";
        } else if (total >= 60) {
            grade = "B";
        } else if (total >= 50) {
            grade = "C";
        } else if (total >= 45) {
            grade = "D";
        } else if (total >= 40) {
            grade = "E";
        } else {
            grade = "F";
        }

        // Display the grade
        gradeCell.textContent = grade;
    });

});