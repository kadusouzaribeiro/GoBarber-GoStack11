interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  // Email padrão do qual será enviada a msg, utilizando domínio próprio
  defaults: {
    from: {
      email: 'email@meudominio.com.br',
      name: 'Nome de quem está enviando',
    },
  },
} as IMailConfig;
