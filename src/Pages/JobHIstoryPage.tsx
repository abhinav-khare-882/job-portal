import { Divider } from "@mantine/core";
import JobHIstory from "../JobHistory/JobHIstory";

const JobHIstoryPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider size="xs" />
      <div className="my-5">
        <JobHIstory />
      </div>
    </div>
  );
};

export default JobHIstoryPage;
