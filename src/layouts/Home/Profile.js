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

const ProfileText = ({ visible, titleId }) => (
  <>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      Meang Atithkithya
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      iOS Developer @ ACLEDA Bank PLC.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <Link href="mailto:m.atithkithya@gmail.com">m.atithkithya@gmail.com</Link> |
      <Link href="tel:+85599898963">+855 99 898 963</Link> |
      <Link href="tel:+85570868963">+855 70 868 963</Link> |
      <Link href="https://www.linkedin.com/in/meang-atithkithya-3aa011249" target="_blank">LinkedIn</Link> |
      <Link href="https://github.com/kithyajunior" target="_blank">GitHub</Link>
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
                  alt="Meang Atithkithya profile photo"
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
      title: 'iOS Develeoper',
      company: 'ACLEDA Bank Plc.',
      period: 'Jul 2022 – Present',
      items: [
        'Design and develop applications for the native iOS platform.',
        'Ensure application performance, quality, and responsiveness.',
        'Have a basic understanding of Git, both in Xcode and the command line.',
        'Work with Swift and Cocoa Touch.',
        'Experience integrating third-party libraries.',
        'Connect iOS applications to backend services using RESTful APIs.',
        'Build mobile apps and integrate them with backend APIs.',
        'Modernize and improve existing code based on current development standards.',
        'Design intuitive graphical user interfaces to enhance user experience.',
        'Have a foundational understanding of UI/UX design.',
        'Collaborate with the team to define, design, and implement new features.',
        'Identify and resolve bottlenecks and bugs.',
        'Integrated the ACLEDA Bank Mobile app with CSX Trade.',
        'Integrated the ACLEDA Bank Mobile app with offline QR functionality.',
        'Integrated the ACLEDA Bank Mobile app with P2P Chat',
        'Integrated the ACLEDA Bank Mobile app with a Chat Bot',
        'Integrated the ACLEDA Bank Mobile app with notifications.',
        'Integrated the ACLEDA Bank Mobile app with deep linking.',
        'Integrated the ACLEDA Bank Mobile app with a feedback feature.',
        'Updated some part of the Home Screen in the ACLEDA Mobile app.',
        'Added many features to the ACLEDA Mobile app.',
        'Created custom base components for the ACLEDA Bank Mobile app.',
        'Provided Swift programming training to ACLEDA Bank’s new staff.',
        'Fixed bugs in the ACLEDA Mobile Bank app.'
      ]
    },
    {
      title: 'Billing Executive',
      company: 'South East Asia Telecom Cambodia',
      period: 'Nov 2021 – Jul 2022',
      items: [
        'Backup Data',
        'SQL Script generator',
        'Generate report',
        'Monitor user'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Forval Cambodia',
      period: 'Jul 2020 – Nov 2021',
      items: [
        'Design and build desktop application (Inventory Management System, POS Management System, Payroll Management System, Attendent Management System, Fixed Asset Management System and Parking Management System ) & Cross platform project (POS Management Systeme).',
        'Troubleshoot and debug issues.',
        'Optimize for performance and efficiency.',
        'Stay updated on industry trends.',
        'Support Customer.'
      ]
    }
  ];

  const skills = [
    'Having strong knowledge of C#, Oracle, SQL server, MySQL, Swift , Constraints AutoLayout and UI/UX Design .',
    'Having fairly knowledge of C/C++, VB.Net, HTML, CSS, JQuery, JavaScript,TypeScript, and Java.',
    'Good at Microsoft Office: Microsoft Word, Excel.',
    'Fast learning for new technology and Computer programming.',
    'Good at surfing internet.',
    'REST & gRPC APIs',
    'Performance Optimization',
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
                alt="Meang Atithkithya profile photo"
                className={styles.resumeAvatar}
              />
            </div>
            <div className={styles.resumeHeaderText}>
              <Heading level={2} as="h2" className={styles.resumeName}>Meang Atithkithya</Heading>
              <div className={styles.resumeTitle}>iOS Developer @ ACLEDA Bank Plc.</div>
              <div className={styles.resumeContact}>
              <Link href="mailto:m.atithkithya@gmail.com">m.atithkithya@gmail.com</Link> |
              <Link href="tel:+85599898963">+855 99 898 963</Link> |
              <Link href="tel:+85570868963">+855 70 868 963</Link> |
              <Link href="https://www.linkedin.com/in/meang-atithkithya-3aa011249" target="_blank">LinkedIn</Link> |
              <Link href="https://github.com/kithyajunior" target="_blank">GitHub</Link>
              </div>
            </div>
          </div>
          <div className={styles.resumeGrid}>
            <div>
              <Heading level={4} as="h3">Profile</Heading>
              <Text as="p">Self-motivated strong organized, reliable, dedicated, hardworking developer. Open to new challenges that
require good solutions and best practices. Hardworking, Responsible, Honest, Creative, Energetic, and
Dependable are what I respect and follow.</Text>

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
