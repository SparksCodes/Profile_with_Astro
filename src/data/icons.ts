export interface Icon {
  path: string;
  alt: string;
  name: string
}

export interface IconMap {
  [key: string]: Icon;
}

const icons: IconMap = {
  dart: {
    path: "../dart_icon.svg",
    alt: "icono de dart",
    name: "Dart"
  },
  typescript: {
    path: "../ts_icon.svg",
    alt: "icono de typescript",
    name: "TypeScript"
  },
  html: {
    path: "../html_icon.svg",
    alt: "icono de html",
    name: "HTML"
  },
  css: {
    path: "../css_icon.svg",
    alt: "icono de css",
    name: "CSS"
  },
  electron: {
    path: "../electron_icon.svg",
    alt: "icono de electron",
    name: "Electron"
  },
  react: {
    path: "../react_icon.svg",
    alt: "icono de react",
    name: "React"
  },
  astro: {
    path: "../astro_icon.svg",
    alt: "icono de astro",
    name: "Astro"
  },
  flutter: {
    path: "../flutter_icon.svg",
    alt: "icono de flutter",
    name: "Flutter"
  },
  node: {
    path: "../node_icon.svg",
    alt: "icono de node",
    name: "Node"
  },
};

export default icons;

