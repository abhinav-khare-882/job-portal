import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const icon1 = <IconLock size={18} stroke={1.5} />;

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        withAsterisk
        leftSection={icon}
        label="email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={icon1}
        label="Password"
        placeholder="Password"
      />
      <Button autoContrast variant="filled">
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
