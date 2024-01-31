/// <reference types="vite/clients"/>

interface ImportMetaEnv {
    readonly VITE_APPWRITE_PROJECT_ID: string,
    readonly VITE_APPWRITE_URL: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }