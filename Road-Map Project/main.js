function home() {
  location.href = "./home.html";
}

let cont = document.getElementsByClassName("content");
console.log(cont);

function undo(event) {
  let block = document.getElementById(event);
  block.style.display = "none";
}

function content(con) {
  let a = document.getElementById(con);
  if (a.style.display == "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function menu(a) {
  let menu = document.getElementById(a);

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function fullStack(f, b) {
  let febe = {
    front: document.getElementById(f),
    back: document.getElementById(b),
  };

  febe.front.style.border = "4px solid  #63f542";
  febe.back.style.border = "4px solid #26ff35";
}

// ----------------------------------------------------------------------------------------------------

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  // Access form data
  const formData = new FormData(event.target);

  // Convert form data to JSON object
  const user = {
    id: formData.get("id"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: btoa(formData.get("password")),
    confirmPassword: btoa(formData.get("c_password")),
  };

  console.log(user);

  if (user.password === user.confirmPassword) {
    console.log("matching");
  } else {
    console.log("Not Matching");
    alert("Password and Confirm Password Not Matching");
    process.exit();
  }

  // Make POST request with fetch API
  fetch("http://localhost:8080/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("1st then ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Parse response body as JSON
    })
    .then((data) => {
      console.log("Response from server:", data);
      if (data === "USER REGITERED SUCCESS FULLY") {
        window.location.href = "index.html  ";
      } else {
        emailError.style.display = "block";
      }
      // Handle success response as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error as needed
    });
}

function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission
  const formData = new FormData(event.target);

  // Convert form data to JSON object
  const user = {
    email: formData.get("email"),
    password: btoa(formData.get("password")),
  };
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("1st then ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Parse response body as JSON
    })
    .then((data) => {
      console.log("Response from server:", data);
      if (data === "USER LOGIN SUCCESSFULLY") {
        window.location.href = "home.html";
      } else {
        emailError.style.display = "block";
      }
      // Handle success response as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error as needed
    });
}
