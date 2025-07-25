const responses = {
  login: (req) => {
    // Verify Google token (simplified)
    return { 
      status: 200, 
      body: { name: "User Name" } 
    };
  }
};

const qs = new URLSearchParams(window.location.search);
const action = qs.get('action');
const response = responses[action](qs);

self.postMessage(response);
