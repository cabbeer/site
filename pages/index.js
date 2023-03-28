import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Grid,
  GridItem,
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
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

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
          <Heading as="h1" variant="page-title">
            Kabir Sewani
          </Heading>
          <Heading as="h3" size="sm">
            Developer. Designer. Tech Enthusiest.
          </Heading>
          <Spacer mb="5"></Spacer>
        </Flex>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" align="center">
          About
        </Heading>

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'darkOffset')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Paragraph mb={4}>
            A a Full-Stack Web Developer with a decade of experience in Digital
            Marketing and Sales. My extensive background includes creating
            effective websites, campaigns, and sales strategies for startups,
            government agencies, and major studios such as 20th Century Fox.
            Let&apos;s collaborate and create something exceptional together!
          </Paragraph>

          <Spacer mb="5"></Spacer>


          <Paragraph>
            Follow me on twitter <Link>@beeriest</Link>,
          </Paragraph>
          <Paragraph>
            Connect with me on <Link>Linkedin</Link>,
          </Paragraph>
          <Paragraph>
            Or <Link>Send me an email</Link>.
          </Paragraph>
          <Spacer mb="5"></Spacer>
          <Paragraph>
            I like helping people articulate their problems. Feel welcome to
            reach out even if you don&apos;t yet have a clear question in mind.
          </Paragraph>

          
        </Box>
      </Section>
    </Container>

    <Container>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title" align="center">
          Projects
        </Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap="6" justifyContent="center">
          <GridItem colSpan={4}>
            <Box
              bg="#a2f6cf"
              padding="1.5em"
              borderRadius="11px"
              color={useColorModeValue('darkOffset.500', 'darkOffset')}
            >
              <Heading as="h3" size="md">
                PersonalChef.live
              </Heading>
              <Paragraph>
                A self-hostable open-source project that empowers chefs to
                showcase their culinary skills and connect with local customers
                seeking homemade dishes. Built with love using Pocketbase,
                Next.js, Chakra UI, React, and React Query.
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
          </GridItem>

          <GridItem colSpan={2}>
            <Box bg="#aee8fa" padding="1.5em" borderRadius="11px">
              <Heading as="h3" size="md">
                TimeCraft
              </Heading>
              <Paragraph>
                An open-source project for scheduling interview appointments.
                Built with Express, React, SQL, and Node, and tested with Jest,
                Storybook, and Cypress.
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
          </GridItem>

          <GridItem colSpan={2}>
            <Box bg="#aee8fa" padding="1.5em" borderRadius="11px">
              <Heading as="h3" size="md">
                Lockbox
              </Heading>
              <Paragraph>
                A secure open-source password manager built with Express, React,
                Postgres, and Node, and encrypted with bcryptjs. Perfect for
                managing personal, team, or client passwords.
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
          </GridItem>
        </Grid>
      </Section>
    </Container>
    <Container>
      <Section>
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

      <Section>
        <Heading as="h3" variant="section-title" align="center">
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
