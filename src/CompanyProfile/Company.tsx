import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployee from "./CompanyEmployee";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="h-36 w-36 rounded-3xl -bottom-1/4 absolute left-5 p-2 border-mine-shaft-950 border-8 bg-mine-shaft-950"
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
          <IconMapPin stroke={1.5} className="h-5 w-5" />
          New York, United States
        </div>
      </div>
      <Divider my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_botton]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About tab</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs tab</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutComp />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="employees">
            <CompanyEmployee />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
