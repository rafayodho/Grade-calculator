function enter() {
    let free = document.getElementById("free").value;  
    let marks = free;
    {
      if (marks >= 80) {
        Grade = " ( A+ &nbspPass )";
      } else if (marks >= 70) {
        Grade = "( A &nbspPass )";
      } else if (marks >= 60) {
        Grade = "( B &nbspPass )";
      } else if (marks >= 50) {
        Grade = "( C &nbspPass )";
      } else if (marks >= 40) {
        Grade = "( D &nbspPass )";
      } else if (marks >= 33) {
        Grade = "( E &nbspPass )";
      } else if (marks >= 32) {
        Grade = "( F &nbspFail )";
      } else {
        Grade = "( F &nbspFail )";
      }
      //   answer show in web page
  
      document.getElementById("Ans").innerHTML = "Your grade is: " + Grade;
    }
  }