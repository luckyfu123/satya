// Stripped down version of `@remix-run/dev` AppConfig
export interface AppConfig {
  cacheDirectory?: string;
  serverBuildDirectory?: string;
  serverBuildPath?: string;
  serverBuildTarget?: string;
}

export interface RemixBuildManifest {
  routes: {
    [id: string]: {
      path: string;
    };
  };
}
