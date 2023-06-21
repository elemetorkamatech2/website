const MOCK_WEBSITES = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "facebook.png",
      permissions: ["user"],
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com/",
      icon: "twitter.png",
      permissions: ["user"],
    },
    {
      id: 3,
      name: "Google",
      url: "https://www.google.com/",
      icon: "google.png",
      permissions: ["admin", "user"],
    },
  ];
  
  const initialState = {
    websites: MOCK_WEBSITES,
  };
  
  export default initialState;