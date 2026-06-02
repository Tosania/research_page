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

const renderPublicationLinks = (links = []) => {
  if (!links.length) {
    return "";
  }

  return `<p class="publication-links">${renderLinks(links)}</p>`;
};

const renderContactList = () => {
  const items = [
    { label: "Location", value: data.profile.location, href: "" },
    { label: "Email", value: data.profile.email, href: `mailto:${data.profile.email}` },
    { label: "GitHub", value: "Tosania", href: data.profile.github },
    { label: "Website", value: "tosania.top", href: data.profile.website },
  ];

  return items
    .map((item) => {
      const content = `
        <span class="contact-label">${item.label}</span>
        <span class="contact-value">${item.value}</span>
      `;

      if (!item.href) {
        return `<p>${content}</p>`;
      }

      const external =
        item.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${item.href}"${external}>${content}</a>`;
    })
    .join("");
};

const renderBio = (items) =>
  items.map((item) => `<p>${item}</p>`).join("");

const renderPublicationImage = (item) => {
  if (!item.image) {
    return "";
  }

  return `
    <figure class="publication-media">
      <img src="${item.image}" alt="${item.imageAlt || item.title}" />
    </figure>
  `;
};

const renderPublications = (items) =>
  [...items]
    .reverse()
    .map(
      (item) => `
        <article class="publication-item${item.image ? "" : " no-media"}">
          ${renderPublicationImage(item)}
          <div class="publication-body">
            <h3 class="publication-title">${item.title}</h3>
            <p class="publication-authors">${item.authors}</p>
            <p class="publication-venue">${item.venue}</p>
            <p class="publication-note">${item.note}</p>
            ${renderPublicationLinks(item.links)}
          </div>
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
