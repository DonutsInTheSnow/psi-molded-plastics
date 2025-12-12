// src/components/HubSpotForm.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create(options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmit?: (form: HTMLFormElement) => void;
        }): void;
      };
    };
  }
}

export default function HubSpotForm({ whitePaperTitle }: { whitePaperTitle: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244585148",
          formId: "58637eec-9cae-4790-b9e7-e8cc4f60c182",
          target: "#hubspot-form-container",
          onFormSubmit: (form) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "last_downloaded_white_paper";
            input.value = whitePaperTitle;
            form.appendChild(input);
          },
        });
      }
    };

    return () => {
      script.remove();
    };
  }, [whitePaperTitle]);

  return (
    <div className="max-w-lg mx-auto">
      <div id="hubspot-form-container" />
    </div>
  );
}