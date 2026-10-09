import { profile } from "@/data/profile";
import Icon from "@/shared/Icon";
import ScrollLink from "@/shared/ScrollLink";
import Typing from "@/shared/Typing";
import Photo from "./Photo";

export default function LeftPanel() {
  return (
    <aside className="left-panel" aria-label="Personal information">
      <div className="left-panel__media" aria-hidden="true">
        <span className="left-panel__initials">RS</span>
        <Photo src={profile.photo} />
        <div className="left-panel__shade" />
      </div>
      <span className="left-panel__logo">RS_</span>
      <ul className="left-panel__social">
        <li><a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
        <li><a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a></li>
        <li><a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a></li>
      </ul>
      <div className="left-panel__status"><span className="left-panel__dot" />{profile.availability}</div>
      <div className="left-panel__body">
        <h1 className="left-panel__title"><Typing phrases={profile.typing} /></h1>
        <p className="left-panel__text">{profile.tagline}</p>
        <address className="left-panel__details">
          {profile.location}<br />{profile.email}<br />{profile.phone}
        </address>
        <div className="left-panel__actions">
          <ScrollLink to="contact" className="round-btn" label="Go to contact"><Icon name="arrowUpRight" /></ScrollLink>
          <ScrollLink to="contact" className="pill-btn">Let&apos;s talk</ScrollLink>
          <a className="link-btn" href={profile.cvUrl} download><Icon name="download" />Download CV</a>
        </div>
      </div>
    </aside>
  );
}
