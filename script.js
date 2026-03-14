const data = window.siteData;

const text = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const html = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
};

const initialsFromName = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const renderLinks = (links) =>
  links
    .map((link) => {
      const external =
        link.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${link.href}"${external}>${link.label}</a>`;
    })
    .join("");

const renderContactList = () => {
  const items = [
    { label: data.profile.location, href: "" },
    { label: "Email", href: `mailto:${data.profile.email}` },
    { label: "GitHub", href: data.profile.github },
    { label: "Website", href: data.profile.website },
  ];

  return items
    .map((item) => {
      if (!item.href) {
        return `<p>${item.label}</p>`;
      }
      const external =
        item.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${item.href}"${external}>${item.label}</a>`;
    })
    .join("");
};

const renderBio = (items) =>
  items.map((item) => `<p>${item}</p>`).join("");

const renderPublications = (items) =>
  items
    .map(
      (item) => `
        <article class="publication-item">
          <p class="publication-title">${item.title}</p>
          <p>${item.authors}</p>
          <p>${item.venue}</p>
          <p>${item.note}</p>
          <p class="publication-links">${renderLinks(item.links)}</p>
        </article>
      `
    )
    .join("");

document.title = `${data.profile.name} | Homepage`;
text("profile-name", data.profile.name);
text("profile-role", data.profile.title);
text("profile-affiliation", data.profile.affiliation);
text("profile-fallback", initialsFromName(data.profile.name));
text("interest-line", data.interests.join(", "));
text("contact-note", data.contactNote);

html("contact-list", renderContactList());
html("bio-list", renderBio(data.bio));
html("publication-list", renderPublications(data.publications));

const profilePhoto = document.getElementById("profile-photo");
const profileFallback = document.getElementById("profile-fallback");

if (data.profile.photo) {
  profilePhoto.src = data.profile.photo;
  profilePhoto.classList.remove("hidden");
  profileFallback.classList.add("hidden");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
