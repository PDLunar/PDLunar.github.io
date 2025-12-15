document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  if (!toggle) return;

  // 🔹 페이지 로드 시 저장된 상태 복원
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-mode");
  }

  // 🔹 토글 클릭 시
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // 🔹 현재 상태 저장
    localStorage.setItem(
      "dark",
      document.body.classList.contains("dark-mode")
    );
  });
});
