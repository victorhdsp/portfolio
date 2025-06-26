"use client";

import React from 'react'
import { MailIcon, MapPinIcon, SendIcon } from 'lucide-react'
import { Button } from '@/src/shared/components/button'
import { contactDatabase } from '@/src/shared/data/contact'
import { sendSubmitTobackend } from './submit'
import { toast } from 'sonner';

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    toast.loading('Enviando mensagem...');
    
    currentTarget.button_submit.disabled = true;

    sendSubmitTobackend(currentTarget, toast)
      .finally(() => {
        currentTarget.button_submit.disabled = false;
        toast.dismiss();
      });
  }

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-dashed border-gray-400 rounded-full">
            <MailIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Se você quiser saber mais você pode entrar em contato comigo por
            e-mail ou através das minhas redes sociais.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">E-mail</h3>
                  <p className="text-gray-600">
                    { contactDatabase.email }
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    São Lourenço, Niterói, Rio de Janeiro, 24060-045
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg">
              <h3 className="font-medium text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href={contactDatabase.linkedin}
                  className="w-10 h-10 border-2 border-gray-300 rounded-md flex items-center justify-center"
                  target='_blank'
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href={contactDatabase.github}
                  className="w-10 h-10 border-2 border-gray-300 rounded-md flex items-center justify-center"
                  target='_blank'
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href={contactDatabase.whatsapp}
                  className="w-10 h-10 border-2 border-gray-300 rounded-md flex items-center justify-center"
                  target='_blank'
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16.5V19a2 2 0 0 1-2 2h-1A16 16 0 0 1 3 5V4a2 2 0 0 1 2-2h2.5a1 1 0 0 1 1 0.76l1 4a1 1 0 0 1-.27 1L7.21 9.79a12.05 12.05 0 0 0 7 7l1.03-1.03a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .76 1V16.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 border-2 border-gray-200 rounded-lg">
            <h3 className="font-medium text-lg mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                ></textarea>
              </div>
              <Button
                name="button_submit"
                type='submit'
                leftIcon={<SendIcon />}
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
