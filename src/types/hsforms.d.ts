declare global {
  interface Window {
    hbspt?: {
      forms: {
        create(options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: (form: HTMLFormElement) => void;
          onFormSubmit?: () => void;
          onFormSubmitted?: () => void;
        }): void;
      };
    };
  }
}
export {};
