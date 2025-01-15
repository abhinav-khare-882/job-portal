import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      <div className="w-2/5 text-4xl text-center font-semibold text-mine-shaft-100">
        Never want to miss any
        <span className="text-bright-sun-400">Job News</span>
      </div>
      <div className="flex rounded-xl gap-4 bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
          className="[&_input]:text-mine-shaft-100 font-semibold"
          variant="unstyled"
          placeholder="Your@email.com"
          size="xl"
        />
        <Button
          size="lg"
          color="brightSun.4"
          variant="filled"
          className="!rounded-lg"
        >
          Subscribe
        </Button>
        ;
      </div>
    </div>
  );
};

export default Subscribe;
