import { profile } from "@/data/profile";
import { Section, SectionHead } from "@/shared/Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  const rows = [
    ["Email", profile.email],
    ["Phone", profile.phone],
    ["Location", profile.location],
    ["Web", profile.website.replace("https://www.itsrahulsharma.com/", "")],
  ];
  return (
    <Section id="contact">
      <SectionHead id="contact" index="04" label="Contact Us" title="Let's work" accent="together" />
      <p className="lead" data-reveal>Have a project in mind or a role to fill? Send a message and I&apos;ll get back to you.</p>
      <div className="grid" data-reveal>
        <dl className="card contact-info">
          {rows.map(([k, v]) => (
            <div className="contact-info__row" key={k}>
              <dt className="card__meta">{k}</dt>
              <dd className="card__title">{v}</dd>
            </div>
          ))}
        </dl>
        <ContactForm />
      </div>
      <footer className="footer">© {new Date().getFullYear()} itsrahulsharma.com — All rights reserved</footer>
    </Section>
  );
}
