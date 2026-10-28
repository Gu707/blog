(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("#theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") root.dataset.theme = "dark";

  function updateThemeIcon() {
    if (!themeButton) return;
    const dark = root.dataset.theme === "dark";
    themeButton.textContent = dark ? "☀" : "☾";
    themeButton.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
  }

  updateThemeIcon();

  themeButton?.addEventListener("click", () => {
    const dark = root.dataset.theme === "dark";
    if (dark) {
      delete root.dataset.theme;
      localStorage.setItem("theme", "light");
    } else {
      root.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    updateThemeIcon();
  });

  menuButton?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(open)));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });

  document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));
})();
