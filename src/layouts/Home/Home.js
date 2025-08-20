import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { ProfileWithResume } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import liveapp from '../../assets/liveapp.jpg';
import campus from '../../assets/campus.jpg';
import bakongApp from '../../assets/bakong.jpg';
import camboTicket from '../../assets/cambo-ticket.jpg'; // Add this line if you have an image, otherwise use a placeholder

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
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

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
        title="Live. by Wonderpass"
        description="A super app for events, ticketing, and digital experiences. Architected core features as reusable SwiftUI modules, and led a team to deliver seamless cross-platform experiences."
        buttonText="View on App Store"
        buttonLink="https://apps.apple.com/kh/app/live-by-wonderpass/id1561469242"
        image={liveapp}
        imageAlt="Live. by Wonderpass app screenshot"
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Campus App"
        description="A modern campus management and student engagement platform. Supporting real-time notifications, event management, and seamless integrations."
        buttonText="View project"
        buttonLink="https://campus.wonderpass.asia"
        alternate
        image={campus}
        imageAlt="Campus App screenshot"
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Bakong Mini Service"
        description="A cross-platform payment and mini service solution, integrating Bakong, Wing Bank, and more. Led backend and mobile teams, managed CI/CD, and engineered MongoDB sync workflows."
        buttonText="View project"
        buttonLink="https://apps.apple.com/kh/app/bakong/id1440829141"
        image={bakongApp}
        imageAlt="Bakong Mini Service screenshot"
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Cambo Ticket"
        description={"Platform: iOS (Swift, SwiftUI), Android, Web\n\nCambo Ticket is a nationwide bus, taxi, ferry booking app that enables users to search, reserve, and purchase tickets across Cambodia."}
        buttonText="View project"
        buttonLink="#"
        image={camboTicket}
        imageAlt="Cambo Ticket app screenshot"
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
