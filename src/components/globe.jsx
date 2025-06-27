import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "php",
  "express",
  "nodejs",
  "kotlin",
  "amazonaws",
  "sqlite",
  "firebase",
  "vercel",
  "csharp",
  "cplus",
  "git",
  "linux",
  "github",
  "gitlab",
  "visualstudiocode",
  "photoshop",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
