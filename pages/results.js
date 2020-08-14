/* eslint no-unused-vars: 0 */
import React, { useState } from "react";
import { Flex, Heading, Button, Box, Text } from "rebass";
import { Input } from "@rebass/forms";
import Head from "next/head";

import Link from "next/link";
import GraphHeading from "../components/GraphHeading";
import BarGraph from "../components/BarGraph";
import Nav from "../components/Nav";
import ColorBox from "../components/ColorBox";

const Quote = ({ text, size }) => {
  return (
    <Box p={5} sx={{ position: "relative", fontFamily: "Rubik" }}>
      <Box sx={{ position: "absolute", top: 10, left: 10, fontSize: 100 }}>
        "
      </Box>
      <Text sx={{ fontSize: size, fontWeight: 100 }}>{text}</Text>
    </Box>
  );
};

const techStack = [
  {
    question: "What database(s) do you use?",
      data: [
        {text: "Nationbuilder", percentage: "39.53%"},
        {text: "Action Network", percentage: "18.60%"},
        {text: "Custom built", percentage: "18.60%"},
        {text: "Salesforce", percentage: "11.63%"},
        {text: "Kepla", percentage: "6.97%"},
        {text: "Autopilot", percentage: "4.65%"},
        {text: "CiviCRM", percentage: "4.65%"},
        {text: "Other", percentage: "23.26%", description: "Other: Union Ware, Member Solutions, Redicase, Looker, Raisers Edge, IMiS, Kudos, Campaign Monitor, Drip, Airtable"},
      ],
  },
  {
    question: "What website manager do you use?",
      data: [
        {text: "Wordpress", percentage: "48.84%"},
        {text: "Nationbuilder", percentage: "39.53%"},
        {text: "Custom built", percentage: "20.93%"},
        {text: "Squarespace", percentage: "16.28%"},
        {text: "Drupal", percentage: "16.28%"},
        {text: "Other", percentage: "11.63%", description: "Other: Membership Solutions, Wix, Forestry CMS, Prismic CMS, Raisely"},
      ],
  },
  {
    question: "What do you use to send emails?",
      data: [
        {text: "Mailchimp", percentage: "39.53%"},
        {text: "Nationbuilder", percentage: "37.21%"},
        {text: "Action Network", percentage: "23.26%"},
        {text: "Campaign Monitor", percentage: "18.60%"},
        {text: "Custom built", percentage: "13.95%"},
        {text: "Autopilot", percentage: "4.65%"},
        {text: "Other", percentage: "20.93%", description: "Other: Membership Solutions, Braze, Mailgun, Active Campaign, CiviMail, Drip, Marketo, Supporterbase, Raisely"},
      ],
  },
  {
    question: "What do you use to create petitions and/or targeted emails to decision makers?",
      data: [
        {text: "DoGooder", percentage: "35.90%"},
        {text: "Nationbuilder", percentage: "30.77%"},
        {text: "Megaphone", percentage: "30.77%"},
        {text: "Custom", percentage: "25.64%"},
        {text: "Action Network", percentage: "25.64%"},
        {text: "Change.org", percentage: "10.26%"},
        {text: "CampaignNow", percentage: "7.96%"},
        {text: "WordPress", percentage: "5.13%"},
        {text: "Other", percentage: "10.26%", description: "Other: Survey Monkey, Engaging Networks, Community Run, New/Mode"},
      ],
  },
  {
    question: "What do you use to send SMS and/or P2P texts?",
      data: [
        {text: "Callhub", percentage: "54.16%"},
        {text: "Twilio", percentage: "29.17%"},
        {text: "Custom built", percentage: "4.17%"},
        {text: "Other", percentage: "45.83%", description: "Other: ThruText, SMS Broadcast, SMS Magic, Plivo, DirectSMS, 5CentSMS, New/Mode, Spoke, Burst SMS, Vidcorp, Strive"},
      ],
  },
  {
    question: "What do you use to log contact with volunteers/members?",
      data: [
        {text: "Nationbuilder", percentage: "33.33%"},
        {text: "Custom built", percentage: "23.33%"},
        {text: "Callhub", percentage: "20.00%"},
        {text: "Kepla", percentage: "6.67%"},
        {text: "Salesforce", percentage: "6.67%"},
        {text: "Other", percentage: "20.00%", description: "Other: Jira, Excel, RaisersEdge, Union Central, Pipedrive, Airtable"},
      ],
  },
  {
    question: "What do you use for fundraising?",
      data: [
        {text: "Raisely", percentage: "41.94%"},
        {text: "Action Network", percentage: "22.58%"},
        {text: "Custom", percentage: "22.58%"},
        {text: "Nationbuilder", percentage: "19.35%"},
        {text: "Chuffed", percentage: "12.90%"},
        {text: "GoFundMe", percentage: "6.45%"},
        {text: "Other", percentage: "6.45%", description: "Other: Salesforce, RaisersEdge"},
      ],
  }
];

// { text: "", percentage: "%" },
const demo = [
  {
    question: "What is your gender?",
    data: [
      {
        text: "Female",
        percentage: "38.1%",
      },
      { text: "Male", percentage: "52.4%" },
      { text: "Genderqueer", percentage: "4.8%" },
      { text: "Non Binary", percentage: "4.8%" },
    ],
  },
  {
    question: "What is your age?",
    data: [
      { text: "18 - 24", percentage: "4.9%" },
      { text: "25 - 34", percentage: "70.4%" },
      { text: "35 - 44", percentage: "19.5%" },
      { text: "45 - 54", percentage: "4.9%" },
    ],
  },
  {
    question: "Do you identify as:",
    data: [
      { text: "A person of colour", percentage: "7.8%" },
      { text: "A person with a disability", percentage: "15.8%" },
      { text: "Aboriginal and/or Torres Strait Islander", percentage: "2.7%" },
      { text: "None of the above", percentage: "73.7%" },
    ],
  },
];

const structural = [
  {
    question: "What issues does your organisation focus on?",
    data: [
      {
        text: "Workers rights",
        percentage: "41.9%",
      },
      { text: "Environment and climate change", percentage: "38.7%" },
      {
        text: "Representing other organisations/peak body",
        percentage: "25.8%",
      },
      { text: "Economic justice", percentage: "22.6%" },
      { text: "Women's rights", percentage: "22.6%" },
      { text: "Indigenous rights", percentage: "19.4%" },
      { text: "Service provision", percentage: "19.4%" },
      { text: "Asylum seekers", percentage: "12.9%" },
      { text: "Disability advocacy", percentage: "12.9%" },
      { text: "Education", percentage: "12.9%" },
      { text: "Racial justice", percentage: "12.9%" },
      { text: "Health", percentage: "9.7%" },
      { text: "Queer rights", percentage: "9.7%" },
      { text: "Tech/digital agency", percentage: "6.5%" },
      { text: "Youth", percentage: "6.5%" },
      { text: "Other", percentage: "12.9%" },
    ],
  },
  {
    question: "What is your staff size?",
    data: [
      { text: "0 - 5", percentage: "26.19%" },
      { text: "6 - 20", percentage: "33.33%" },
      { text: "21 - 50", percentage: "11.90%" },
      { text: "51 - 200", percentage: "21.43%" },
      { text: "201 - 1000", percentage: "4.76%" },
      { text: "1001 - 5000", percentage: "2.38%" },
    ],
  },
  {
    question: "How many digital staff do you have?",
    subheading:
      "(e.g. social media or project manager of digital project)",
    data: [
      { text: "0", percentage: "12.20%" },
      { text: "1 - 2", percentage: "39.02%" },
      { text: "3 - 4", percentage: "19.51%" },
      { text: "5 - 6", percentage: "19.51%" },
      { text: "7 - 10", percentage: "4.88%" },
      { text: "11 - 20", percentage: "2.44%" },
      { text: "21 - 5000", percentage: "2.44%" },
    ],
  },
  {
    question: "How many tech staff do you have?",
    subheading:
      "(e.g. developer, data scientist)",
    data: [
      { text: "0", percentage: "51.22%" },
      { text: "1 - 2", percentage: "31.71%" },
      { text: "3 - 4", percentage: "4.88%" },
      { text: "5 - 6", percentage: "4.88%" },
      { text: "7 - 10", percentage: "2.44%" },
      { text: "21 - 10000", percentage: "4.88%" },
    ],
  },
  {
    question: "What's your yearly tech & digital budget?",
    subheading:
      "Yearly budget for tech & digital, not including staff salaries",
    data: [
      { text: "$0", percentage: "12.00%" },
      { text: "$1 - $1,000", percentage: "9.09%" },
      { text: "$1,001 - $5,000", percentage: "21.21%" },
      { text: "$5,001 - $10,000", percentage: "15.15%" },
      { text: "$10,001 - $50,000", percentage: "21.21%" },
      { text: "$50,001 - $100,000", percentage: "24.24%" },
      { text: "$200,001 - $500,000", percentage: "3.03%" },
    ],
  },
];

const App = (props) => {
  return (
    <>
      <Head>
        <title>ProgTech Network Australia</title>
      </Head>
      <Nav />

    <ColorBox end index={2} p={0}>
        <GraphHeading text="Table of Contents" />
        <Box pl={5}>
        <Box><Heading><a href="https://2020report.progtech.net.au/results#respondents">1. Who took part in this report?</a></Heading></Box>
        <Box><Heading>2. What technology are organisations using?</Heading></Box>
        <Box><Heading>3. Needs Analysis</Heading></Box>
        <Box><Heading>4. Solutions</Heading></Box>
        </Box>
      </ColorBox>

      <ColorBox end index={0} p={0}>
        <GraphHeading text="Respondents" id="Respondents"/>
        <Flex flexWrap="wrap">
          {structural.map((data, index) => (
            <BarGraph width={1 / 2} {...data} index={0} />
          ))}
        </Flex>
      </ColorBox>
      <ColorBox end index={1} p={0}>
        <GraphHeading text="Demographics" />
        <Flex flexWrap="wrap">
          {demo.map((data, index) => (
            <BarGraph width={1 / 2} {...data} index={1} />
          ))}
        </Flex>
      </ColorBox>

       <ColorBox end index={3} p={0}>
        <GraphHeading text="Technology Stack" />
        <Flex flexWrap="wrap">
          {techStack.map((data, index) => (
            <BarGraph width={1 / 2} {...data} index={3} />
          ))}
        </Flex>
      </ColorBox>


      <ColorBox end index={2} p={0}>
        <Heading fontSize={[20, 50]} maxWidth={"250px"} m={5}>
          Needs Analysis
        </Heading>
        <Box color="black" width={1 / 2} p={5} pt={0}>
          <p>
            We all know anecdotally that the progressive sector’s tech isn’t
            working as well as we want it to - but what exactly are the problems
            and how widespread are they?
          </p>
          <p>
            Organisations reported both a short term and a long term gap. Our
            tech isn’t working for us, or the communities we work with, on a
            day-to-day basis. But we’re also not doing the long-term planning
            and building we need to set our movements up for success in the
            future.
          </p>
        </Box>
      </ColorBox>

      {/* Question 1 */}
      <ColorBox end index={3} p={0}>
        <Flex flexWrap="wrap">
          <Box width={2 / 5} pt={6} pl={5}>
            <Quote
              size="28px"
              text="Being the only staff member with any understanding of the tools means if something has to happen fast, a lot of work gets put aside OR we can’t respond quickly"
            />
          </Box>
          <ColorBox width={3 / 5} index={3}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              {" "}
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What are the biggest problems with your tech at the moment?
              </Heading>
              <p>
                In short,{" "}
                <strong>
                  the progressive sector wants better tech, but a number of
                  factors are getting in the way
                </strong>
                . Key themes included:
                <br />
              </p>
              <ul>
                <li>
                  A <strong>lack of budget</strong>, capacity and resource
                  prioritisation for tech, which is exacerbated for smaller
                  grassroots organisations by the high costs of many tools and
                  agencies
                </li>
                <li>
                  The <strong>lack of internal tech skills </strong>which is
                  further exacerbated by the
                  <strong> lack of training opportunities</strong> to upskill
                </li>
                <li>
                  <strong>Dissatisfaction with current tech stacks </strong>due
                  to limited functionality and flexibility
                </li>
                <li>
                  The<strong> lack of integration</strong> between multiple
                  tools and platforms
                </li>
              </ul>
              <p>
                <strong>
                  The smaller the organisation&rsquo;s budget, the more
                  frequently these problems were mentioned &ndash;&nbsp;
                </strong>
                particularly the lack of resources, capacity and skills to
                execute a good tech program, as well as dissatisfaction with
                their current tech stack, particularly their CRMs. This often
                caused a reliance on agencies that strained limited budgets, and
                were not suitable for the rapid response nature of
                advocacy.&nbsp;
              </p>
              <p>
                Some larger organisations mentioned a lack of data analytics
                tools, major issues with integrating multiple tools and a theme
                of resistance to change tech from senior management. Even though
                their organisations often had sufficient budgets, large NGOs and
                unions still consistently named the challenge of struggling to
                hire tech staff and lacking the inhouse tech skills for many
                projects.
              </p>
            </Box>
          </ColorBox>
        </Flex>
      </ColorBox>

      {/* Question 2 */}
      <ColorBox end index={0} p={0}>
        <Flex flexWrap="wrap">
          <ColorBox width={3 / 5} index={0}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              {" "}
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What are your organisation's tech priorities for the next 3
                months?
              </Heading>
              <p>
                Survey respondents named a huge range of tech priorities over
                the coming months, but themes included: <br />
                <br />
              </p>
              <ul>
                <li>
                  Significantly <strong>improving existing tools</strong>,
                  particularly websites and CRMs
                </li>
                <li>
                  <strong>Migrating to new tools</strong>, particularly new
                  databases
                </li>
                <li>
                  Further<strong> integrating existing tech&nbsp;</strong>
                </li>
                <li>
                  Improving <strong>data analytics </strong>and reporting
                </li>
                <li>
                  <strong>Fixing bugs</strong>, resolving errors and cleaning
                  data
                </li>
                <li>
                  Growing <strong>social media</strong> channels
                </li>
                <li>
                  <strong>Training</strong> staff and volunteers in tech and
                  digital campaigning
                </li>
                <li>
                  <strong>Responding to COVID-19</strong> including setting up
                  virtual events and better internal communications systems for
                  remote working&nbsp;
                </li>
              </ul>
              <p>
                <br />
                The majority of short-term priorities focussed on
                <strong> improving existing tools</strong>. For most
                organisations, this meant changing from one off-the-shelf
                database to another, rather than building new custom tools
                in-house - likely because of the lack of in-house dev capacity
                across the sector.{" "}
              </p>
            </Box>
          </ColorBox>
          <Box width={2 / 5} pt={6} pr={5}>
            <Quote
              size="28px"
              text="I would love to talk to someone who has used our tech before so we don’t double up on mistakes"
            />
            <Quote
              size="28px"
              text="Any way to connect with people who could do small amounts of coding/web dev would be a huge help!"
            />
          </Box>
        </Flex>
      </ColorBox>

      {/* Question 3 */}
      <ColorBox end index={1} p={0}>
        <Flex flexWrap="wrap">
          <Box width={2 / 5} pt={6} pl={5}>
            <Quote
              size="23px"
              text="[Following up with new volunteers quickly] isn't purely a technical problem, but the fact the [distributed network] tech doesn't exist means the organisational problem is much harder to solve."
            />
            <Quote
              size="28px"
              text="We'd be massively excited to be involved in crafting collaborative tech solutions to support this effort"
            />
          </Box>
          <ColorBox width={3 / 5} index={1}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              {" "}
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What do you wish your organisation could do with technology that
                you can't right now?
              </Heading>
              <p>
                Survey respondents named a huge range of tech priorities over
                the coming months, but themes included: <br />
                <br />
              </p>
              <ul>
                <li>
                  Significantly <strong>improving existing tools</strong>,
                  particularly websites and CRMs
                </li>
                <li>
                  <strong>Migrating to new tools</strong>, particularly new
                  databases
                </li>
                <li>
                  Further<strong> integrating existing tech&nbsp;</strong>
                </li>
                <li>
                  Improving <strong>data analytics </strong>and reporting
                </li>
                <li>
                  <strong>Fixing bugs</strong>, resolving errors and cleaning
                  data
                </li>
                <li>
                  Growing <strong>social media</strong> channels
                </li>
                <li>
                  <strong>Training</strong> staff and volunteers in tech and
                  digital campaigning
                </li>
                <li>
                  <strong>Responding to COVID-19</strong> including setting up
                  virtual events and better internal communications systems for
                  remote working&nbsp;
                </li>
              </ul>
              <p>
                <br />
                The majority of short-term priorities focussed on
                <strong> improving existing tools</strong>. For most
                organisations, this meant changing from one off-the-shelf
                database to another, rather than building new custom tools
                in-house - likely because of the lack of in-house dev capacity
                across the sector.{" "}
              </p>
            </Box>
          </ColorBox>
        </Flex>
      </ColorBox>

      {/* Question 4 */}
      <ColorBox end index={3} p={0}>
        <Flex flexWrap="wrap">
          <ColorBox width={3 / 5} index={3}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              {" "}
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                Do you face any of the following internal roadblocks?
              </Heading>
              <p>
                <strong>
                  Smaller organisations mentioned the lack of capacity and
                  budget{" "}
                </strong>
                as the number one roadblock. Whereas while budget constraints
                were still mentioned by some big organisations, the number one
                roadblock was the{" "}
                <strong>lack of internal tech expertise.&nbsp;</strong>
              </p>
              <p>Other roadblocks mentioned included:&nbsp;</p>
              <ul>
                <li>
                  <strong>No long term planning</strong>
                </li>
                <li>
                  Senior management being<strong> resistant to change</strong>{" "}
                  and new tools
                </li>
                <li>Poor data quality</li>
                <li>
                  Siloing of team, including a disconnect between campaigners
                  and tech team
                </li>
              </ul>
            </Box>

            <Quote
              size="28px"
              text="We never ever get enough money through project funding to be able to invest properly in tech. I have a tiny core budget that does maintenance, just, but no room to grow or innovate at all."
            />
          </ColorBox>
          <Box width={2 / 5} pt={6} pr={5}>
            <Quote
              size="28px"
              text="I think there’s so much more we could do but we don’t even know about it so it’s like we don’t know which skills are missing"
            />
            <Quote
              size="28px"
              text="We need new funding sources urgently for tech."
            />
          </Box>
        </Flex>
      </ColorBox>

      <ColorBox end index={2} p={0}>
        <Heading fontSize={[20, 50]} maxWidth={"250px"} m={5} mt={7}>
          Solutions
        </Heading>
        <Box color="black" width={1 / 2} p={5} pt={0}>
          <p>
            The good news is that between us we have the tools and skills to
            solve these problems collectively, and progressive organisations are
            ready to collaborate to make this happen.
          </p>
          <p>
            Survey participants said they would consider sharing their current
            technology, and contributing to developing new open tools for
            like-minded organisations. People named a wide variety of tech and
            digital skills they wanted to learn - most of which were skills that
            other participants said they were able to share. The majority of
            organisations want to collaborate but just haven’t had the
            relationships or a space to do so.

          </p>
        </Box>

      </ColorBox>

      {/* Question 3 */}
      <ColorBox end index={1} p={0}>
        <Flex flexWrap="wrap">
          <Box width={1 / 2}  >
            <BarGraph
              width={1}
              index={1}
              question="Would you consider helping contribute to developing new open tools for the progressive sector?"
              data={[
                { text: "True", percentage: "85.71%" },
                { text: "False", percentage: "14.29%" },
              ]}
            />
            <BarGraph
            pt={3}
              width={1}
              index={1}
              question="Would you or any other staff want to learn specific tech/digital skills through a workshop or mentoring program?"
              data={[
                { text: "True", percentage: "90.48%" },
                { text: "False", percentage: "9.52%" },
              ]}
            />
        <BarGraph
              width={1}
              pt={3}
              index={1}
              question="Would you or any other staff be able to share your tech/digital skills through either a workshop or mentoring program?"
              data={[
                {text: "Yes", percentage: "80.5%"},
                {text: "No", percentage: "19.5%"},
              ]}
            />



          </Box>
          <Box width={1/2} p={5} pl={0}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What infrastructure do you think we as a movement need to start
                building to be ready for changes coming in the next 3-5 years?
              </Heading>
              <p>
                It is interesting to compare people&rsquo;s long-term and
                movement-wide infrastructure priorities, with their own
                organisation&rsquo;s short-term priorities (Q2) and internal
                &lsquo;wishes&rsquo; (Q3).&nbsp;
              </p>

              <p>
                Long-term priorities that were also mentioned as short-term
                priorities and internal focusses included:&nbsp;
              </p>
              <ul>
                <li>
                  Improving systems <strong>integration</strong>
                </li>
                <li>
                  Building <strong>automation</strong> and machine learning
                </li>
                <li>
                  Further investment in
                  <strong> tech capacity and upskilling staff</strong>
                </li>
                <li>
                  <strong>Improving CRMs</strong>, including making them fit for
                  purpose for Australian organisations (rather than American),
                  for grassroots organising contexts, and for First Nations and
                  POC organisations
                </li>
              </ul>

              <p>
                Long-term movement-wide priorities that were barely mentioned in
                earlier organisational priorities include:&nbsp;
              </p>
              <ul>
                <li>
                  <strong>Improving accessibility</strong> of progressive tech
                </li>
                <li>
                  Collaborating on building better{" "}
                  <strong>movement-wide shared tools</strong>
                </li>
              </ul>

              <p>
                These two long-term priorities &ndash;&nbsp;of accessibility and
                collaboration &ndash; are particularly important to highlight
                given there is a shared analysis of the need, but very few
                organisations currently have the capacity to prioritise them in
                their short-term plans.{" "}
              </p>
            </Box>
          </Box>
        </Flex>
      </ColorBox>

      {/* Question 3 */}
      <ColorBox end index={2} p={0}>
        <Flex flexWrap="wrap">
          <ColorBox width={1 / 2} index={2}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What do you think your organisation can contribute to the
                network?
              </Heading>
              <p>
                The below responses to this question have been grouped and
                listed in order of frequency they were mentioned:&nbsp;
              </p>
              <ul>
                <li>
                  <strong>Advice</strong> and knowledge**
                </li>
                <li>
                  Technical <strong>skills</strong>**
                </li>
                <li>
                  <strong>Capacity</strong> to test new things
                </li>
                <li>
                  Direct <strong>mentoring</strong> of smaller organisations
                </li>
                <li>
                  Openness to <strong>collaboration</strong>
                </li>
                <li>
                  <strong>Sharing tools</strong> and content
                </li>
              </ul>
              <p>
                **A broad range of experience, knowledge and skills areas were
                mentioned including: coding, social media, organising tech and
                design.{" "}
              </p>{" "}
            </Box>
          </ColorBox>
          <Box width={1 / 2} >
          <BarGraph
              width={1}
              index={2}
              question="Which skills are you able to share?"
              data={[{text: "Lead generation", percentage: "10.0%"},
              {text: "Comms", percentage: "40.0%"},
              {text: "Database management", percentage: "20.0%"},
              {text: "List management", percentage: "5.0%"},
              {text: "Emails", percentage: "30.0%"},
              {text: "Social media", percentage: "30.0%"},
              {text: "Project management", percentage: "5.0%"},
              {text: "Organising", percentage: "10.0%"},
              {text: "Running programs for members/vols", percentage: "5.0%"},
              {text: "QGIS", percentage: "5.0%"},
              {text: "Fundraising", percentage: "15.0%"},
              {text: "Web dev", percentage: "30.0%"},
              {text: "Data analysis", percentage: "10.0%"},
              {text: "UI/UX", percentage: "15.0%"},
              {text: "Digital member recruitment", percentage: "10.0%"},
              {text: "Podcasting", percentage: "5.0%"},
              {text: "Integrations", percentage: "5.0%"},
              {text: "Skilling up POC", percentage: "5.0%"},
              {text: "Nationbuilder trainings", percentage: "5.0%"},
              {text: "Data science", percentage: "5.0%"},]}
            />


          </Box>
        </Flex>
      </ColorBox>

      {/* Question 3 */}
      <ColorBox end index={3} p={0}>
        <Flex flexWrap="wrap">
          <Box width={1 / 2}>



          <BarGraph
              width={1}
              index={3}
              question="Which skills are you interested in learning?"
              data={[
                { text: "Data analytics/data science", percentage: "86.2%" },
                { text: "Backend developer", percentage: "51.7%" },
                { text: "Database management", percentage: "51.7%" },
                { text: "Frontend developer", percentage: "51.7%" },
                { text: "IT security", percentage: "44.8%" },
                { text: "UI/UX design", percentage: "44.8%" },
                { text: "Digital adversiting (social media, google ads)", percentage: "41.4%" },
                { text: "Digital fundraising", percentage: "34.5%" },
                { text: "Email (list management, delivery)", percentage: "34.5%" },
                { text: "Social media mangement", percentage: "34.5%" },
                { text: "General digital comms", percentage: "31%" },
                { text: "General IT support", percentage: "24.1%" },
              ]}
            />



          </Box>
          <ColorBox width={1 / 2} index={3}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >
                What do you think your organisation would like to get out of the
                network?
              </Heading>
              <p>
                The below responses to this question have been grouped and
                listed in order of frequency they were mentioned:&nbsp;
              </p>
              <ol>
                <li>
                  <strong>Support and best practice advice</strong> on coding
                  and tech from a diverse brains trust
                </li>
                <li>
                  <strong>Sharing actual tools </strong>and code
                </li>
                <li>
                  Feeling like I am a part of{" "}
                  <strong>a progressive tech community</strong>
                </li>
                <li>
                  <strong>Learning</strong> new tech skills
                </li>
                <li>
                  <strong>Direct support</strong> and capacity injections during
                  rapid response moments
                </li>
                <li>
                <strong>Testing</strong> new tools and solutions collaboratively
                </li>
              </ol>

            </Box>
          </ColorBox>
        </Flex>
      </ColorBox>

      {/* Question 3 */}
      <ColorBox end index={2} p={0}>
        <Flex flexWrap="wrap">
          <ColorBox width={1 / 2} index={2}>
            <Box
              sx={{
                borderRadius: "25px",
                boxShadow: "5px 8px 45px rgb(62 62 62 / 22%)",
              }}
              bg="white"
              color="black"
              p={4}
            >
              <Heading
                fontSize={[20, 30]}
                mb={4}
                sx={{ background: "none !important" }}
              >This is where the Progressive Tech Network comes in
              </Heading>
              <p>
                We are a growing network of progressive member organisations
                committed to teaming up on tech to win. We want a world where
                progressive organisations and activists have the best tools
                possible, and the skills and support to use them.
              </p>
              <p>
                Our network of progressive campaigning organisations and the
                tech vendors &amp; agencies who support us widens access to
                existing tech tools and skills, and drives longer term,
                movement-scale planning around the tech we need to fight for and
                win progressive change.
              </p>
              <p>
                                <strong>
                  If your organisation hasn&rsquo;t yet started a conversation
                  about joining the network and you&rsquo;d like to hear more,{" "}
                </strong>
                <a href="https://progtech.net.au/join">
                  <strong>fill out this form</strong>
                </a>{" "}
                to share what you&rsquo;re keen to get out of it and what your
                organisation could offer.
              </p>
              <p>
                We&rsquo;ll be discussing these survey results and more at our
                launch on August 27, and we&rsquo;d love you to join us!{" "}
                <a href="https://progtech.typeform.com/to/ZAU0MgR5#source=survey-report">
                  Click here to RSVP
                </a>{" "}
                and if you have any questions, please get in touch at{" "}
                <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a>
              </p>
            </Box>
          </ColorBox>
          <Box width={1 / 2}  pr={5}>
          <BarGraph
              width={1}
              index={2}
              question="Would your organisation be willing to share any technology with other progressive organisations?"
              data={[
                {text: "Yes", percentage: "80.5%"},
                {text: "No", percentage: "19.5%"},
            ]}
            />
          <BarGraph
              width={1}
              index={2}
              pt={3}
              question="Would you like to see your organisation join the Progressive Tech Network to team up more on tech across our movements?"
              data={[
                {text: "Yes", percentage: "97.6%"},
                {text: "No", percentage: "2.4%"},
              ]}
            />
          </Box>
        </Flex>
      </ColorBox>

    </>
  );
};

export default App;
