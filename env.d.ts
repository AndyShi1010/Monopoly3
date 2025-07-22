declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL: string;
        USER: string;
        HOST: string;
        DATABASE_NAME: string;
        PASSWORD: string;
        PORT: number;
        SECRET: string;
      }
    }
  }

export {}