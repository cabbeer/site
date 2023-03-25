import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex,
  Center,
  Spacer,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Flex
          flexGrow={1}
          flexDirection={'column'}
          flexWrap={'wrap'}
          alignItems={'center'}
        >
          <Heading as="h2" variant="page-title">
            Kabir Sewani
          </Heading>
          <p>Developer. Designer. Tech Enthusiest.</p>
        </Flex>
      </Box>

      <Section>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'darkOffset')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Paragraph mb={4}>
            As a full-stack developer with a background in digital marketing, I
            pride myself on creating websites and campaigns that are effective
            and data-driven. Let&apos;s collaborate and create something
            exceptional together!
          </Paragraph>
          <Spacer mb="5"></Spacer>
          <Paragraph>
            I like helping people articulate their problems. Feel welcome to
            reach out even if you don&apos;t yet have a clear question in mind.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" align="center">
          About
        </Heading>
        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/about"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Read About My Experience & Ethos
          </Button>
        </Box>
      </Section>
    </Container>
    <Container>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" align="center">
          Projects
        </Heading>

        <Flex columns={[1, 2, 2]} gap={6}>
          <Box
            bg="#a2f6cf"
            padding="1.5em"
            borderRadius="11px"
          >
            <Heading as="h3" size="md">
              PersonalChef.live
            </Heading>
            <Paragraph>
              A self-hostable open-source project that empowers chefs to showcase their culinary skills and connect with local customers seeking homemade dishes. Built with love using Pocketbase, Next.js, Chakra UI, React, and React Query.

            </Paragraph>

            <Button
              as={NextLink}
              href="/about"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
            >
              View on Github
            </Button>
          </Box>

          <Box
            bg="#aee8fa"
            padding="1.5em"
            borderRadius="11px"
          >

            <Heading as="h3" size="md">
              TimeCraft
            </Heading>
            <Paragraph>
              An open-source project for scheduling interview appointments. Built with Express, React, SQL, and Node, and tested with Jest, Storybook, and Cypress.

            </Paragraph>
            <Button
                as={NextLink}
                href="/about"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
            >
              View on Github
            </Button>

          </Box>
        </Flex>
      </Section>
    </Container>
    <Container>
      <Section>
        <BioSection>
          <BioYear>ExpertSession</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/about"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            More Things I've Made
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" align="center">
          On the web
        </Heading>
        <Center>
          <List>
            <ListItem>
              <BioYear>Connect with me on twitter</BioYear>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @inkdrop_app (English)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @craftzdog (日本語)
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
          </List>
        </Center>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on deep
          learning, UX design, and the web
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
