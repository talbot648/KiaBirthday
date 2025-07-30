    function checkAnswers() {
      const answers = {
        q1: "paris",
        q2: "castle park",
        q3: "chinese",
        q4: "stourhead"
      };

      let allCorrect = true;

      for (let key in answers) {
        const input = document.getElementById(key);
        const userAnswer = input.value.trim().toLowerCase();
        if (userAnswer === answers[key]) {
          input.classList.add("correct");
          input.classList.remove("incorrect");
        } else {
          input.classList.add("incorrect");
          input.classList.remove("correct");
          allCorrect = false;
        }
      }

      document.getElementById("code").style.display = allCorrect ? "block" : "none";
    }
  const codeDiv = document.getElementById("code");

  if (allCorrect) {
    codeDiv.style.display = "block";
    codeDiv.style.animation = "fadeInUp 0.6s ease-out";
  } else {
    codeDiv.style.display = "none";
  }
