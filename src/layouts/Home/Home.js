import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { ProfileWithResume } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import liveapp from '../../assets/liveapp.jpg';
import campus from '../../assets/campus.jpg';

const disciplines = [
  'Passionate',
  'Innovative',
  'Architect',
  'Mentor',
  'Leader'
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="iOS Developer"
        description="Design portfolio of Meang Atithkithya — a iOS developer working on mobile
          apps with a focus on performance, experience, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Forval Cambodia"
        description="Forval (Cambodia) is a JAPANESE COMPANY who provides «ONE STOP» and «TOTAL» services to our beloved customer in CAMBODIA!"
        buttonText="View Project"
        buttonLink="https://apps.apple.com/kh/app/live-by-wonderpass/id1561469242"
        image={liveapp}
        imageAlt="Forval Cambodia app screenshot"
      />
 <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="ACLEDA Bank Plc."
        description="ACLEDA mobile is a FinTech Application running on Smart Phone, enabling customers to do banking transactions from anywhere, anytime."
        buttonText="View on App Store"
        buttonLink="https://apps.apple.com/us/app/acleda-mobile/id1196285236"
        alternate
        image={campus}
        imageAlt="ACLEDA Bank Plc. app screenshot"
      />
      <ProfileWithResume
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer/>
    </div>
  );
};
