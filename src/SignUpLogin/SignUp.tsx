import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const icon1 = <IconLock size={18} stroke={1.5} />;

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        withAsterisk
        label="Full Name"
        description="Input description"
        placeholder="Your Name"
      />
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
      <PasswordInput
        withAsterisk
        leftSection={icon1}
        label="Confirm Password"
        placeholder="COnfirm Password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>Terms & Conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Have an account?
        <Link
          to="/login"
          className="text-bright-sun-400 hover:underline"
        ></Link>
      </div>
    </div>
  );
};

export default SignUp;
