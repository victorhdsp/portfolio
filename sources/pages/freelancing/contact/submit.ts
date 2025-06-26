import { toast as _toast } from "sonner";

export default async function sendSubmitTobackend(currentTarget: HTMLFormElement, toast: typeof _toast) {
  const formData = new FormData(currentTarget);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  await fetch('/api/freelancing/contact/submit', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    if (data.id) {
      toast.success('Mensagem enviada com sucesso!');
      currentTarget?.reset();
    } else {
      console.error('Erro ao enviar mensagem:', data);
      toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
  })
  .catch(error => {
    console.error('Erro ao enviar mensagem:', error);
    toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.');
  });
}