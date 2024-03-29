"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appWrite/api";

const SignupForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupValidation>) {
    const newUser = await createUserAccount(values);
    console.log(newUser);
  }
  return (
    <Form {...form}>
      <div className='sm:w-420 flex-center flex-col'>
        <div className='flex flex-center flex-row content-center'>
          <img
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 mt-6 rotate-6'
            src='/assets/images/SNAPPER.svg'
          />
          <h2 className=" text-light-3 h3-bold md:h2-bold pt-6 sm:pt-6 font-serif">napper</h2>
        </div>

        <h2 className='h3-bold md:h2-bold pt-2 sm:pt-2'>
          Create a new account
        </h2>
        <p className='text-light-3 small-medium md:base-regular mt-2'>
          To use Snapper, please enter your details
        </p>
        <form
          className='flex flex-col gap-5 w-full mt-4'
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='shad-button_primary'>
            {isLoading ? (
              <div className='flex-center gap-2'>
                <Loader />
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
          <p
            className='text-small-regular 
          text-light-2 text-center mt-2'>
            Already have an account?{" "}
            <Link
              to='/sign-in'
              className='text-primary-500 text-small-semibold ml-1'>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
