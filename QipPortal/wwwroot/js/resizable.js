var resizer = document.querySelector("#resizableSideBar");
var sidebarResize = document.querySelector("#sidebarbass");
var sidebarBS = document.querySelector("#sidebarBS");
var navBarhead = document.querySelector(".navBarhead");

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", resize, false);
  }, false);
});

function resize(e) {
    var isResize = true;
    if (e.x >= 400 || e.x <= 310) {
        isResize = false;
    } else {
        resizeStyles(e);
    }
}

function resizeStyles(e) {
    const size = `${e.x}px`;
    navBarhead.style.width = `calc(100% - ${size})`;
    navBarhead.style.left = size;
    sidebarResize.style.maxWidth = size;
    sidebarBS.style.maxWidth = size;
}