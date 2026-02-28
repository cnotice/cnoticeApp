
    

// copied from marquee subjects .js
// used in ??
function parseJwt(token) {
        try {
          // Split the token to get the payload (second part)
          const base64Url = token.split('.')[1];
      
          // Decode Base64URL to JSON
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
      
          // Parse JSON and return the payload
          return JSON.parse(jsonPayload);
        } catch (error) {
          console.error("Failed to parse JWT:", error);
          return null;
        }
      }
      
      // Example usage
      // const token = "your.jwt.token";
      const token = localStorage.getItem("authToken");
      const payload = parseJwt(token);
      console.log("Decoded Payload:", payload);
      console.log("designation:", payload.designation);