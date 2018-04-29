/** SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/** json files */
declare module "*.json" {
  const value: any;
  export default value;
}
