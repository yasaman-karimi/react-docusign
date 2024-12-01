class Service {
  async register(username, password) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("successful:", data);
      return true;
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  }
  async login(username, password) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      return true;
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  }
  async createEnvelope(firstParty, secondParty) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/envelope/", {
        method: "POST",
        redirect: "follow",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_party: {
            name: firstParty.name,
            email: firstParty.email,
          },
          second_party: {
            name: secondParty.name,
            email: secondParty.email,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create envelope: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.signing_url) {
        console.log("Redirecting to:", data.signing_url);
        window.location.href = data.signing_url;
      } else {
        throw new Error("URL not provided");
      }

      console.log("Envelope created successfully:", data);
      return data;
    } catch (error) {
      console.error("Error during envelope creation:", error);
      throw error;
    }
  }
}
export default new Service();
