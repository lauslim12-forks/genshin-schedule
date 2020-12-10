import React, { memo, ReactNode, useEffect, useState } from "react";
import {
  Button,
  chakra,
  Heading,
  Icon,
  LightMode,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useConfig } from "../../utils/configs";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import Favicon180x180 from "../../public/favicon-180x180.png";
import Time from "../../assets/tutorial/Time.jpg";
import Resin from "../../assets/tutorial/Resin.jpg";
import Tasks from "../../assets/tutorial/Tasks.jpg";
import Map from "../../assets/tutorial/Map.jpg";
import Domains from "../../assets/tutorial/Domains.jpg";
import Message from "../../assets/tutorial/Message.jpg";

type Page = "start" | "time" | "resin" | "tasks" | "map" | "domains" | "final";
const Pages: Page[] = ["start", "time", "resin", "tasks", "map", "domains", "final"];

const TutorialModal = () => {
  const [open, setOpen] = useConfig("tutorial");
  const [page, setPage] = useState<Page>(Pages[0]);

  useEffect(() => setPage(Pages[0]), [open]);

  return (
    <LightMode>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="lg"
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pt={5} px={8}>
            {(() => {
              switch (page) {
                case "start":
                  return <StartPage />;

                case "time":
                  return <TimePage />;

                case "resin":
                  return <ResinPage />;

                case "tasks":
                  return <TasksPage />;

                case "map":
                  return <MapPage />;

                case "domains":
                  return <DomainsPage />;

                case "final":
                  return <FinalPage />;
              }
            })()}
          </ModalBody>

          <ModalFooter>
            {page === Pages[Pages.length - 1] ? (
              <Button
                variant="ghost"
                colorScheme="blue"
                rightIcon={<Icon as={FaCheck} />}
                onClick={() => setOpen(false)}
              >
                Yes, Paimon
              </Button>
            ) : (
              <Button
                variant="ghost"
                colorScheme="blue"
                rightIcon={<Icon as={FaChevronRight} />}
                onClick={() => setPage(Pages[Pages.indexOf(page) + 1])}
              >
                Next
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LightMode>
  );
};

const PageTemplate = ({
  image,
  heading,
  children,
}: {
  image?: ReactNode;
  heading?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <VStack spacing={6}>
      {image}

      <VStack spacing={2} textAlign="center">
        <Heading size="md">{heading}</Heading>
        {children}
      </VStack>
    </VStack>
  );
};

const StartPage = () => {
  return (
    <PageTemplate
      image={<chakra.img src={Favicon180x180} w={32} borderRadius="md" boxShadow="md" />}
      heading="Welcome!"
    >
      <p>Genshin Schedule helps you keep track of time-related game activities in Genshin Impact.</p>
    </PageTemplate>
  );
};

const TimePage = () => {
  return (
    <PageTemplate image={<chakra.img src={Time} borderRadius="md" boxShadow="md" />} heading="Server Clock">
      <p>Displays the current server time accurately regardless of your timezone.</p>
    </PageTemplate>
  );
};

const ResinPage = () => {
  return (
    <PageTemplate image={<chakra.img src={Resin} borderRadius="md" boxShadow="md" />} heading="Resin Calculator">
      <p>Tracks your resins and estimates when it will recharge without having to open the game.</p>
    </PageTemplate>
  );
};

const TasksPage = () => {
  return (
    <PageTemplate image={<chakra.img src={Tasks} borderRadius="md" boxShadow="md" />} heading="Task Scheduler">
      <p>Tracks open world resources and reminds you as soon as they respawn.</p>
    </PageTemplate>
  );
};

const MapPage = () => {
  return (
    <PageTemplate image={<chakra.img src={Map} borderRadius="md" boxShadow="md" />} heading="Resource Map">
      <p>Marks open world resources using customizable pins without limit.</p>
    </PageTemplate>
  );
};

const DomainsPage = () => {
  return (
    <PageTemplate image={<chakra.img src={Domains} borderRadius="md" boxShadow="md" />} heading="Domain View">
      <p>Shows which domains can be cleared for ascension materials and artifacts for the day.</p>
    </PageTemplate>
  );
};

const FinalPage = () => {
  return (
    <PageTemplate image={<chakra.img src={Message} w="xs" />} heading="Paimon's Message">
      <p>
        Being efficient is great, but make sure to have fun as well. Take regular breaks and don't burn yourself out!
      </p>
      <p>You can view this tutorial again in the Customize page.</p>
    </PageTemplate>
  );
};

export default memo(TutorialModal);