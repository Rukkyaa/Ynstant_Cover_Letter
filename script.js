let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

const isTouchDevice = () => {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
};

const	objects_found_elem = document.getElementById("objects_found");
let		objects_found = [];
let		nb_object_found = 0;

function updateObjectsFound() {
	objects_found_elem.innerHTML = "<p>Objets trouvés: " + nb_object_found + "/3</p>";
	if (nb_object_found == 3) {
		objects_found_elem.style.color = "#00ff00";
		flashlight.style.display = "none";
	}
}

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

const	lock = document.getElementById("lock");
const	lock_text = document.getElementById("lock_text");
const	lock_hidden = document.getElementById("lock_hidden");

lock_hidden.addEventListener("click", () => {
	lock_text.classList.add("visible");
	lock.classList.add("hidden");
	lock_hidden.classList.add("hidden");
	if (!objects_found.includes("lock")) {
		nb_object_found++;
		objects_found.push("lock");
	}
	updateObjectsFound();
});

lock_hidden.addEventListener("mouseenter", () => {
	lock_hidden.style.cursor = "pointer";
});

lock_text.addEventListener("mouseleave", () => {
	lock_text.classList.remove("visible");
});

lock_text.addEventListener("transitionend", () => {
	if (!lock_text.classList.contains("visible")) {
		lock.classList.remove("hidden");
		lock_hidden.classList.remove("hidden");
	}
});

const	glass = document.getElementById("glass");
const	glass_text = document.getElementById("glass_text");
const	glass_hidden = document.getElementById("glass_hidden");

glass_hidden.addEventListener("click", () => {
	glass_text.classList.add("visible");
	glass.classList.add("hidden");
	glass_hidden.classList.add("hidden");
	if (!objects_found.includes("glass")) {
		nb_object_found++;
		objects_found.push("glass");
	}
	updateObjectsFound();
});

glass_hidden.addEventListener("mouseenter", () => {
	glass_hidden.style.cursor = "pointer";
});

glass_text.addEventListener("mouseleave", () => {
	glass_text.classList.remove("visible");
});

glass_text.addEventListener("transitionend", () => {
	if (!glass_text.classList.contains("visible")) {
		glass.classList.remove("hidden");
		glass_hidden.classList.remove("hidden");
	}
});

const	usb = document.getElementById("usb");
const	usb_text = document.getElementById("usb_text");
const	usb_hidden = document.getElementById("usb_hidden");

usb_hidden.addEventListener("click", () => {
	usb_text.classList.add("visible");
	usb.classList.add("hidden");
	usb_hidden.classList.add("hidden");
	if (!objects_found.includes("usb")) {
		nb_object_found++;
		objects_found.push("usb");
	}
	updateObjectsFound();
});

usb_hidden.addEventListener("mouseenter", () => {
	usb_hidden.style.cursor = "pointer";
});

usb_text.addEventListener("mouseleave", () => {
	usb_text.classList.remove("visible");
});

usb_text.addEventListener("transitionend", () => {
	if (!usb_text.classList.contains("visible")) {
		usb.classList.remove("hidden");
		usb_hidden.classList.remove("hidden");
	}
});

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);