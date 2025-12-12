// // src/components/Prose.tsx
// import { HTMLAttributes } from "react";

// interface ProseProps extends HTMLAttributes<HTMLDivElement> {
//   dangerouslySetInnerHTML?: { __html: string };
// }

// export function Prose({
//   children,
//   dangerouslySetInnerHTML,
//   ...rest
// }: ProseProps) {
//   if (dangerouslySetInnerHTML) {
//     return (
//       <div
//         {...rest}
//         dangerouslySetInnerHTML={dangerouslySetInnerHTML}
//         className="prose prose-lg max-w-none
//                    prose-headings:font-bold prose-headings:text-gray-100 prose-headings:tracking-tight
//                    prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6
//                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
//                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-6
//                    prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
//                    prose-strong:text-white prose-strong:font-bold
//                    prose-ul:my-6 prose-ol:my-6
//                    prose-li:text-gray-300 prose-li:my-2 prose-li:marker:text-blue-400
//                    prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-950/30 prose-blockquote:text-gray-200 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic
//                    prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-12 prose-img:mx-auto
//                    prose-hr:border-gray-800"
//       />
//     );
//   }

//   return (
//     <div
//       {...rest}
//       className="prose prose-lg max-w-none
//                  prose-headings:font-bold prose-headings:text-gray-100 prose-headings:tracking-tight
//                  prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6
//                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
//                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-6
//                  prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
//                  prose-strong:text-white prose-strong:font-bold
//                  prose-ul:my-6 prose-ol:my-6
//                  prose-li:text-gray-300 prose-li:my-2 prose-li:marker:text-blue-400
//                  prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-950/30 prose-blockquote:text-gray-200 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic
//                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-12 prose-img:mx-auto
//                  prose-hr:border-gray-800"
//     >
//       {children}
//     </div>
//   );
// }