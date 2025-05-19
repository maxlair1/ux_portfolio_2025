declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
  
declare module '*.scss';

interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}
  