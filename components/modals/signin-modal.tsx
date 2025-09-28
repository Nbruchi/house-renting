"use client";

import useSigninModal from "@/hooks/use-signin-modal";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "./modal";
import Heading from "../heading";
import Input from "../inputs/Input";
import Button from "../button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSignUpModal from "@/hooks/use-signup-modal";

const SignInModal = () => {
  const router = useRouter();
  const signinModal = useSigninModal();
  const signupModal = useSignUpModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggle = useCallback(() => {
    signinModal.onClose();
    signupModal.onOpen();
  }, [signinModal, signupModal]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    await signIn("credentials", {
      ...data,
    })
      .then(() => {
        toast.success("Signed in successfully");
        router.refresh();
        signinModal.onClose();
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Sign in to your account" center />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Don't have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Sign in"
      isOpen={signinModal.isOpen}
      onClose={signinModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      disabled={isLoading}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default SignInModal;
