export class ProjectsData {
  _projectList = [
    {
      id: "1",
      title: "Gift Of Life",
      desc: "Android app developed with the noble idea to help people connect to nearby hospitals/blood banks to donate or receive blood",
      link: "https://github.com/bssughosh/GiftOfLife",
      motivation: "",
      results: "",
      role: "",
      tools: [
        "JAVA",
        "XML",
        "SQLITE3",
        "FIREBASE AUTH",
        "FIREBASE REALTIME DATABASE",
      ],
    },
    {
      id: "2",
      title: "Mini Operating System",
      desc: "A JAVA Application developed which mirrors the main functionalities of a Linux Kernel, i.e., Process, I/O, File and Memory Management",
      link: "https://github.com/bssughosh/Mini-OS-Linux-Kernel",
      motivation: "",
      results: "",
      role: "",
      tools: ["JAVA"],
    },
    {
      id: "3",
      title: "Business Vision",
      desc: "Website developed for wholesalers to sell their products to retails with ease and authenticity by validating wholesalers with Aadhar and GST Number",
      link: "https://github.com/bssughosh/Business-Vision-Website",
      motivation: "",
      results: "",
      role: "",
      tools: ["PYTHON (DJANGO)", "HTML5", "CSS", "JAVASCRIPT", "MYSQL"],
    },
    {
      id: "4",
      title: "Fabric Defect Detection",
      desc: "A MATLAB program which can detect defects on an image of a piece of fabric by just identifying the damaged region.",
      link: "https://github.com/bssughosh/fabric-defect-detection",
      motivation: "",
      results: "",
      role: "",
      tools: ["MATLAB"],
    },
    {
      id: "5",
      title: "Agri Guide",
      desc: "This mobile and web applications was built to help farmers to understand the most profitable crop to grow by predicting weather and yield for that time",
      link: "https://github.com/bssughosh/agri-guide",
      motivation: "",
      results: "",
      role: "",
      tools: [
        "PYTHON (FLASK API, MACHINE LEARNING)",
        "FLUTTER CLEAN ARCHITECTURE",
        "HEROKU (API HOSTING)",
        "FIREBASE AUTH",
        "FIREBASE CLOUD FIRESTORE",
        "APP HOSTING",
      ],
    },
    {
      id: "6",
      title: "Invest.io",
      desc: "This website was developed for stock market enthusiasts to visualise the stock trends and help invest in the profitable ones",
      motivation: "",
      results: "",
      role: "",
      tools: [
        "PYTHON (FLASK API, MACHINE LEARNING)",
        "REACT.JS",
        "HEROKU (API HOSTING)",
        "SQLITE3",
      ],
    },
  ];

  getAllProjects() {
    return this._projectList;
  }

  getProject(id) {
    return this._projectList.filter((item) => item.id === id)[0];
  }
}
