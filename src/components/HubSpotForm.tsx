// // src/components/HubSpotForm.tsx
// "use client";

// import { useEffect } from "react";

// declare global {
//   interface Window {
//     hbspt?: {
//       forms: {
//         create: (options: {
//           region: string;
//           portalId: string;
//           formId: string;
//           target: string;
//           onFormReady?: (form: HTMLFormElement) => void;
//           onFormSubmit?: () => void;
//         }) => void;
//       };
//     };
//   }
// }

// export default function HubSpotForm({ whitePaperTitle }: { whitePaperTitle: string }) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://js.hsforms.net/forms/embed/v2.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.hbspt?.forms) {
//         window.hbspt.forms.create({
//           region: "na2",
//           portalId: "244585148",
//           formId: "58637eec-9cae-4790-b9e7-e8cc4f60c182",
//           target: "#hubspot-form-container",
//           onFormReady: (form) => {
//             const input = document.createElement("input");
//             input.type = "hidden";
//             input.name = "last_downloaded_white_paper";
//             input.value = whitePaperTitle;
//             form.appendChild(input);
//           },
//           onFormSubmit: () => {
//             setTimeout(() => {
//               const base = process.env.NEXT_PUBLIC_SITE_URL || "https://psi-molded-plastics.vercel.app";
//               window.location.replace(
//                 `${base}/white-papers/download-success?title=${encodeURIComponent(whitePaperTitle)}`
//               );
//             }, 1000);
//           },
//         });
//       }
//     };

//     return () => script.remove();
//   }, [whitePaperTitle]);

//   return (
//     <div className="max-w-lg mx-auto py-8">
//       <div id="hubspot-form-container" />
//     </div>
//   );
// }





"use client";

import { useEffect } from "react";

export default function HubSpotForm({ whitePaperTitle }: { whitePaperTitle: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244585148",
          formId: "58637eec-9cae-4790-b9e7-e8cc4f60c182",
          target: "#hubspot-form-container",
          onFormReady: (form: HTMLFormElement) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "last_downloaded_white_paper";
            input.value = whitePaperTitle;
            form.appendChild(input);
          },
          onFormSubmit: () => {
            setTimeout(() => {
              const base =
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://psi-molded-plastics.vercel.app";

              window.location.replace(
                `${base}/white-papers/download-success?title=${encodeURIComponent(
                  whitePaperTitle
                )}`
              );
            }, 1000);
          },
        });
      }
    };

    return () => script.remove();
  }, [whitePaperTitle]);

  return (
    <div className="max-w-lg mx-auto py-8">
      <div id="hubspot-form-container" />
    </div>
  );
}

