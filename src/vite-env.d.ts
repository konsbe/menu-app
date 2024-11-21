declare module '*.svg' {
    import * as React from 'react'
  
    export const ReactComponent: React.FunctionComponent<
      React.ComponentProps<'svg'> & { title?: string }
    >
    export default ReactComponent
  }
  
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_GOOGLE_MAP_API_KEY: string;
  readonly VITE_PUBLIC_GOOGLE_API_KEY: string;
  readonly VITE_PUBLIC_GOOGLE_SHEET_ID: string;
  // Add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}