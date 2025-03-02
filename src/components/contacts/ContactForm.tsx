'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ErrorMessage from '@/components/contacts/ErrorMessage';
import {
  contactFormSchema,
  TContactFormData,
} from '@/components/contacts/schema';
import { TResultNotification } from '@/types';

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [resultNotification, setResultNotification] =
    useState<TResultNotification | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<TContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleResult = (isSuccess: boolean) => {
    const notification: TResultNotification = {
      title: '',
      message: '',
      isSuccess,
    };
    if (isSuccess) {
      notification.title = 'Message sent';
      notification.message = 'Thank you! I appreciate your time';
    } else {
      notification.title = 'Oops!';
      notification.message = 'Unable to send. Please try again later';
    }
    setResultNotification(notification);
  };

  const onSubmit = async (contactFormData: TContactFormData) => {
    setIsPending(true);
    try {
      const response = await fetch(`/api/sendMail`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (!response.ok) {
        handleResult(false);
        setIsPending(false);
        return;
      }

      const resData = await response.json();
      if (!resData.data.success) {
        handleResult(false);
        setIsPending(false);
        return;
      }

      handleResult(true);
    } catch (err) {
      console.log('err', err);
      // console.error(transcriptErrMsg, err);
      // setMessage(transcriptErrMsg);
    } finally {
      setIsPending(false);
    }
  };

  if (resultNotification)
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2
          className={`font-extrabold text-3xl lg:text-4xl text-center ${
            resultNotification.isSuccess ? 'text-success' : 'text-error'
          }`}
        >
          {resultNotification.title}
        </h2>
        <p className="my-4 text-muted text-center">
          {resultNotification.message}
        </p>
      </div>
    );

  return (
    <div className="flex flex-col py-24">
      <h2 className="font-extrabold text-3xl lg:text-4xl text-center">
        Interested in working together?
      </h2>
      <p className="my-4 text-muted text-center">
        I&apos;m excited to learn about your project
      </p>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 mt-8 px-4 max-w-2xl mx-auto lg:max-w-3xl"
      >
        <div className="w-full flex flex-col gap-4 sm:flex-row">
          {/* Name Field */}
          <div className="flex flex-col w-full">
            {/* <label className="font-medium">Name</label> */}
            <input
              type="text"
              {...register('name')}
              className="p-4 rounded bg-input"
              placeholder="Your name"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full">
            {/* <label className="font-medium">Email</label> */}
            <input
              type="email"
              {...register('email')}
              className="p-4 rounded bg-input"
              placeholder="Email"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col w-full">
          {/* <label className="font-medium">Message</label> */}
          <textarea
            {...register('message')}
            className="resize-y p-4 rounded bg-input"
            placeholder="Project details"
            rows={6}
          />
          <ErrorMessage message={errors.message?.message} />
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="text-lg px-20 py-3 bg-foreground text-background font-bold rounded-full hover:opacity-85 disabled:bg-muted disabled:opacity-80 transition-opacity"
            disabled={isSubmitting || isPending || !isDirty}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
