"use client";

import useSignupModal from "@/hooks/use-signup-modal";
import axios from "axios";
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
import useSignInModal from "@/hooks/use-signin-modal";

const RegisterModal = () => {
  const signupModal = useSignupModal();
  const signinModal = useSignInModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggle = useCallback(() => {
    signupModal.onClose();
    signinModal.onOpen();
  }, [signinModal, signupModal]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/sign-up", data);
      toast.success("Account created");
      signupModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
          <div>Already have an account?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Register"
      isOpen={signupModal.isOpen}
      onClose={signupModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      disabled={isLoading}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
