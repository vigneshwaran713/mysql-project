document.getElementById("scholarshipForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let marks = parseFloat(document.getElementById("marks").value);
    let category = document.getElementById("category").value;
    let income = parseFloat(document.getElementById("income").value);
    let gender = document.getElementById("gender").value;

    let eligible = [];

    if (marks >= 85) {
        eligible.push("Merit Scholarship");
    }

    if (category === "SC" || category === "ST") {
        eligible.push("SC/ST Government Grant");
    }

    if (income < 200000) {
        eligible.push("Low Income Support Scholarship");
    }

    if (gender === "Female") {
        eligible.push("Girls Education Scholarship");
    }

    document.getElementById("result").innerHTML =
        eligible.length > 0
        ? "You are eligible for:<br>" + eligible.join("<br>")
        : "No scholarships matched.";
});
