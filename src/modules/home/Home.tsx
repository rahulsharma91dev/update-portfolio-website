import { profile } from "@/data/profile";
import Icon from "@/shared/Icon";
import CountUp from "@/shared/CountUp";
import ScrollLink from "@/shared/ScrollLink";

export default function Home() {
  return (
    <section id="home" className="section section--hero" aria-label="Home">
      <div className="section__inner">
        <h2 className="hero__title" data-reveal>
          <span className="hero__line" aria-hidden="true" />
          <span className="u-accent">I&apos;m {profile.name}.</span>
          <br />
          {profile.role}
        </h2>
        <p className="hero__text" data-reveal>{profile.heroIntro}</p>
        <div className="hero__actions" data-reveal>
          <ScrollLink to="projects" className="outline-btn">View my work<span className="round-btn"><Icon name="arrowRight" /></span></ScrollLink>
          <ScrollLink to="about" className="outline-btn outline-btn--muted">More about me<span className="round-btn round-btn--muted"><Icon name="arrowRight" /></span></ScrollLink>
        </div>
        <dl className="stats" data-reveal>
          {profile.stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <dt className="stats__label">{s.label}</dt>
              <dd className="stats__value"><CountUp value={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
