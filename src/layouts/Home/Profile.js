import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import { useTheme } from 'components/ThemeProvider';
import { WEBGL } from 'three/examples/jsm/WebGL.js';

if (WEBGL.isWebGLAvailable()) {
  // Initialize your Three.js scene
} else {
  // Show a fallback message or image
  document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

const ProfileText = ({ visible, titleId }) => (
  <>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      Kosal Pen
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lead iOS Developer @ Wonderpass
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <Link href="mailto:kosalpen99@gmail.com">kosalpen99@gmail.com</Link> |
      <Link href="tel:+85512898339">+855 128 98339</Link> |
      <Link href="https://www.linkedin.com/in/kosal-pen-752962128" target="_blank">LinkedIn</Link> |
      <Link href="https://medium.com/@kosalpen99" target="_blank">Medium</Link> |
      <Link href="https://github.com/kosalpen11" target="_blank">GitHub</Link>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Accomplished and hands-on Lead iOS Developer
with over 8 years of experience delivering scalable,
modular, and high-performance iOS applications.
Expert in Swift, SwiftUI, and app architecture using
SPM, Resolver DI, and reusable UI modules. Proven
ability to lead feature delivery end-to-end, from
planning and architecture to code
implementation, CI/CD, and App Store
deployment. Skilled at managing cross-platform
teams and integrating with backend systems,
including secure native-web communication, QR
resale, and payment flows. Passionate about clean
code, great UX, and mentoring developers to build
quality mobile products.
    </Text>
  </>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {(inView) => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={inView} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={inView}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!inView}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={inView}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Kosal Pen profile photo"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={inView}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export const ProfileWithResume = (props) => {
  const theme = useTheme();

  const experiences = [
    {
      title: 'Lead iOS Developer',
      company: 'Wonderpass',
      period: 'Oct 2021 – Present',
      items: [
        'Led full delivery of Bakong Mini Service (iOS, Android, Web, Backend',
        'Built a JSBridge layer in WKWebView to integrate native Swift APIs with web UI.',
        'Led architecture and development of LiveApp, a modular SwiftUI app with dynamic QR resale ticketing, payment calculation, and secure user flows.',
        'Implemented QR-based facility access control with HMAC-SHA256 validation. ',
        'Implemented secure hash validation for iframe-based financial transactions',
        'Developed sync jobs to push local MongoDBdata to cloud using Mongoose CLI + cron.',
        'Mentored mobile team members and led architecture decisions and Agile ceremonies.'
      ]
    },
    {
      title: 'Lead iOS Developer',
      company: 'Spark',
      period: 'Oct 2017 – Sep 2021',
      items: [
        'Delivered and maintained production iOS apps in the transport and logistics domain.',
        'Migrated legacy code to modular MVVM structure, improving testability and long-term maintenance.',
        'Worked closely with backend engineers to align API contracts and release schedules.',
        'Acted as onboarding lead for junior developers and new team hires.'
      ]
    },
    {
      title: 'Junior iOS Developer',
      company: 'Pathmazing',
      period: 'Dec 2016 – Oct 2017',
      items: [
        'Developed UIKit-based iOS apps with polished UI components.',
        'Prototyped Estimote beacon features in collaboration with UX designers.',
        'Streamlined Git workflows and automated builds, reducing integration issues by 20%.'
      ]
    }
  ];

  const skills = [
    'Swift & SwiftUI',
    'UIKit',
    'Resolver (DI)',
    'Modular Architecture',
    'MVVM & Coordinator Pattern',
    'REST & gRPC APIs',
    'Performance Optimization',
    'MongoDB & Mongoose',
    'Node.js & NestJS',
    'Docker & Kubernetes (AWS EKS)',
    'CI/CD (Bitbucket Pipelines)',
    'Payment Integrations on Mini Services (Bakong, Wing Bank)'
  ];

  const education = 'B.Sc. in Computer Science, Royal University of Phnom Penh (2014 – 2018)';
  const achievements = [
    'Delivered LiveApp and Bakong Mini Service across mobile and web with secure, real-time communication',
    'Implemented JSBridge-based native-web sync for payments and iframe control',
    'Built modular Swift packages adopted across internal app projects',
    'Shipped 10+ App Store apps with 100% approval and 4.7★ average user rating.'
  ];

  const certifications = [
  ];

  const languages = ['Khmer (Native)', 'English (Professional Working Proficiency)'];

  const references = [
    { name: 'Mr. Tuy Chandara', role: 'CEO @ Wonderpass', contact: '(+855 99 474 942)' },
    { name: 'Mr. Sopheak Te', role: 'Lead Developer @ Wonderpass', contact: '(+855 96 543 5596 | sopheak4kh@gmail.com)' }
  ];

  return (
    <>
      <Profile {...props} />
      <Section className={styles.resumeSection} as="section" data-theme={theme.themeId}>
        <div className={styles.resumeCard} data-theme={theme.themeId}>
          <div className={styles.resumeHeader}>
            <div className={styles.resumeAvatarWrap}>
              <Image
                reveal
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={[profileImg, profileImgLarge]}
                sizes={`(max-width: ${media.mobile}px) 100vw, 160px`}
                alt="Kosal Pen profile photo"
                className={styles.resumeAvatar}
              />
            </div>
            <div className={styles.resumeHeaderText}>
              <Heading level={2} as="h2" className={styles.resumeName}>Kosal Pen</Heading>
              <div className={styles.resumeTitle}>Lead iOS Developer @ Wonderpass</div>
              <div className={styles.resumeContact}>
                <Link href="mailto:kosalpen99@gmail.com">kosalpen99@gmail.com</Link> |
                <Link href="tel:+85512898339">+855 128 98339</Link> |
                <Link href="https://www.linkedin.com/in/kosal-pen-752962128" target="_blank">LinkedIn</Link> |
                <Link href="https://medium.com/@kosalpen99" target="_blank">Medium</Link> |
                <Link href="https://github.com/kosalpen11" target="_blank">GitHub</Link>
              </div>
            </div>
          </div>
          <div className={styles.resumeGrid}>
            <div>
              <Heading level={4} as="h3">Profile</Heading>
              <Text as="p">Passionate Lead iOS Developer with 8+ years of experience architecting modular, high-performance mobile apps. Driving 25% engagement lifts through context-aware features, 99.8% data consistency via offline sync, and sub-second transaction flows. Mentored engineers, built open-source Swift packages, and shipped 10+ App Store–approved apps with 4.7★ average ratings.</Text>

              <Heading level={4} as="h3">Experience</Heading>
              {experiences.map(exp => (
                <div key={exp.title} className={styles.resumeSectionBlock}>
                  <strong className="font-bold">{exp.title} — {exp.company} | {exp.period}</strong>
                  <ul>
                    {exp.items.map((i, idx) => (
                      <li key={idx}><Text as="span">{i}</Text></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <Heading level={4} as="h3">Skills</Heading>
              <ul>{skills.map(skill => (
                <li key={skill}><Text as="span">{skill}</Text></li>
              ))}</ul>

              <Heading level={4} as="h3">Education</Heading>
              <Text as="p">{education}</Text>

              <Heading level={4} as="h3">Achievements</Heading>
              <ul>{achievements.map(a => (
                <li key={a}><Text as="span">{a}</Text></li>
              ))}</ul>

              {/* <Heading level={4} as="h3">Certifications</Heading>
              <ul>{certifications.map(c => (
                <li key={c}><Text as="span">{c}</Text></li>
              ))}</ul> */}

              <Heading level={4} as="h3">Languages</Heading>
              <ul>{languages.map(l => (
                <li key={l}><Text as="span">{l}</Text></li>
              ))}</ul>

              <Heading level={4} as="h3">References</Heading>
              <ul>{references.map(r => (
                <li key={r.name}>
                  <Text as="strong">{r.name}</Text> – {r.role}<br />
                  <Text as="span">{r.contact}</Text>
                </li>
              ))}</ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
