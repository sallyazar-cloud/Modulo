(function () {
  const menu = document.querySelector("[data-learning-menu]");
  if (!menu) return;

  const grades = [
    ["KG1", "KG 1"], ["KG2", "KG 2"], ["KG3", "KG 3"],
    ["Grade 1", "Grade 1"], ["Grade 2", "Grade 2"], ["Grade 3", "Grade 3"],
    ["Grade 4", "Grade 4"], ["Grade 5", "Grade 5"], ["Grade 6", "Grade 6"],
    ["Grade 7", "Grade 7"], ["Grade 8", "Grade 8"], ["Grade 9", "Grade 9"]
  ];
  const coreSubjects = [
    ["Vocabulary", "vocabulary"],
    ["Reading", "reading"],
    ["Grammar", "grammar"],
    ["Writing", "writing"]
  ];
  const curriculumSubjects = [
    ...coreSubjects,
    ["Listening", "listening"],
    ["Speaking", "speaking"]
  ];
  const currentGrade = new URLSearchParams(window.location.search).get("grade")
    || localStorage.getItem("miss-salma-selected-grade")
    || "KG1";
  const nestedPage = window.location.pathname.includes("/reading/")
    || window.location.pathname.includes("/grammar/");
  const pathPrefix = nestedPage ? "../" : "";
  const panel = document.createElement("div");
  panel.className = "learning-menu-panel";

  function addGroup(title) {
    const group = document.createElement("section");
    group.className = "learning-menu-group";
    const heading = document.createElement("h2");
    heading.textContent = title;
    const links = document.createElement("div");
    links.className = "learning-menu-grades";
    grades.forEach(grade => {
      const gradeDetails = document.createElement("details");
      gradeDetails.className = "learning-menu-grade";
      gradeDetails.open = grade[0] === currentGrade;
      const gradeSummary = document.createElement("summary");
      gradeSummary.textContent = grade[1];
      const subjectLinks = document.createElement("div");
      subjectLinks.className = "learning-menu-grade-subjects";
      const gradeSubjects = /^Grade [1-9]$/.test(grade[0]) ? curriculumSubjects : coreSubjects;
      gradeSubjects.forEach(subject => {
        const link = document.createElement("a");
        link.href = `${pathPrefix}grade-activities.html?grade=${encodeURIComponent(grade[0])}#${subject[1]}`;
        link.textContent = subject[0];
        subjectLinks.append(link);
      });
      gradeDetails.append(gradeSummary, subjectLinks);
      links.append(gradeDetails);
    });
    group.append(heading, links);
    panel.append(group);
  }

  const summary = document.createElement("summary");
  summary.textContent = "Resources";
  menu.setAttribute("aria-label", "Resources");
  menu.append(summary);
  addGroup("Choose a class");
  menu.append(panel);

  menu.addEventListener("click", event => {
    if (event.target.closest("a")) menu.open = false;
  });

  document.addEventListener("click", event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
})();
